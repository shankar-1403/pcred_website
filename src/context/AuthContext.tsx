"use client";

import {createContext,useCallback,useContext,useEffect,useMemo,useState,ReactNode} from "react";
import { onAuthStateChanged,signInWithEmailAndPassword,signOut,User} from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, db } from "../lib/firebase";
import { loginIdToAuthEmail } from "../lib/auth";

const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const SESSION_STORAGE_KEY = "cms_auth_session_v1";

interface SessionRecord {
  uid: string;
  startMs: number;
}

interface UserProfile {
  uid: string;
  email?: string;
  displayName?: string;
  role?: string;
  createdAt?: number;
  createdByAdminUid?: string | null;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  profileIssue: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<UserProfile | null>;
}

const AuthContext = createContext<AuthContextType | null>(null);

function readSessionRecord(): SessionRecord | null {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;

    const record = JSON.parse(raw);

    if (
      record &&
      typeof record.uid === "string" &&
      typeof record.startMs === "number"
    ) {
      return record;
    }
  } catch {}

  return null;
}

function writeSessionRecord(uid: string, startMs: number) {
  try {
    localStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({
        uid,
        startMs,
      })
    );
  } catch {}
}

function clearSessionRecord() {
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  } catch {}
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileIssue, setProfileIssue] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (uid: string): Promise<UserProfile | null> => {
    setProfileIssue(null);

    try {
      const snap = await get(ref(db, `users/${uid}`));

      if (!snap.exists()) {
        setProfile(null);
        return null;
      }

      const data = snap.val();

      const merged: UserProfile = {
        uid,
        ...data,
      };

      setProfile(merged);

      if (!data?.role || String(data.role).trim() === "") {
        return merged;
      }

      return merged;
    } catch (error) {
      console.error(
        `[CMS] Could not read users/${uid}. Check database rules.`,
        error
      );
      setProfile(null);
      setProfileIssue("Unable to load profile.");
      return null;
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        await loadProfile(firebaseUser.uid);
      } else {
        setProfile(null);
        setProfileIssue(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [loadProfile]);

  useEffect(() => {
    if (!user) return;

    const uid = user.uid;

    let record = readSessionRecord();

    if (!record || record.uid !== uid) {
      const startMs = Date.now();
      writeSessionRecord(uid, startMs);
      record = { uid, startMs };
    }

    const signOutIfExpired = () => {
      const session = readSessionRecord();

      if (!session || session.uid !== uid) return;

      if (Date.now() - session.startMs >= SESSION_DURATION_MS) {
        clearSessionRecord();
        signOut(auth).catch(() => {});
      }
    };

    const elapsed = Date.now() - record.startMs;

    if (elapsed >= SESSION_DURATION_MS) {
      clearSessionRecord();
      signOut(auth).catch(() => {});
      return;
    }

    const remaining = SESSION_DURATION_MS - elapsed;

    const timeoutId = setTimeout(signOutIfExpired, remaining);
    const intervalId = setInterval(signOutIfExpired, 60_000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [user]);

  const login = useCallback(async (email: string, password: string) => {
    const id = email.trim();
    const authEmail = id.includes("@")
      ? id
      : loginIdToAuthEmail(id);

    await signInWithEmailAndPassword(auth, authEmail, password);
  }, []);

  const logout = useCallback(async () => {
    clearSessionRecord();
    await signOut(auth);
  }, []);
  
  const refreshProfile = useCallback(async (): Promise<UserProfile | null> => {
    if (!user) return null;
    return loadProfile(user.uid);
  }, [user, loadProfile]);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      profile,
      profileIssue,
      loading,
      login,
      logout,
      refreshProfile,
    }),
    [
      user,
      profile,
      profileIssue,
      loading,
      login,
      logout,
      refreshProfile,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}