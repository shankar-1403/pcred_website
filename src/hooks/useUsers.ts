import { useEffect, useMemo, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";

export interface User {
  id: string;
  email?: string;
  displayName?: string;
  role?: string;
  createdAt?: number;
  createdByAdminUid?: string | null;
  [key: string]: unknown;
}

export function useUsers() {
  const [usersById, setUsersById] = useState<Record<string, User>>({});
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const usersRef = ref(db, "users");

    const unsubscribe = onValue(
      usersRef,
      (snapshot) => {
        const value = snapshot.val();

        const list: User[] = value
          ? Object.entries(value).map(([id, data]) => ({
              id,
              ...(data as Omit<User, "id">),
            }))
          : [];

        list.sort(
          (a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0)
        );

        setUsers(list);
        setUsersById((value as Record<string, User>) ?? {});
        setError(null);
        setLoading(false);
      },
      (err) => {
        console.error(
          "[CMS] users read denied — rules must allow auth users to read /users.",
          err
        );

        setUsers([]);
        setUsersById({});
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    users,
    usersById,
    loading,
    error,
  };
}