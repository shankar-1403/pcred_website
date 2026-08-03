import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";

export interface Career {
  id: string;
  title?: string;
  department?: string;
  location?: string;
  type?: string;
  experience?: string;
  openings?: number;
  description?: string;
  requirements?: string;
  active?: boolean;
  createdAt?: number;
  createdBy?: string | null;
  updatedAt?: number;
  updatedBy?: string | null;
  [key: string]: unknown;
}

export function useCareers() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const careersRef = ref(db, "careers");
    const unsubscribe = onValue(
      careersRef,
      (snapshot) => {
        const value = snapshot.val();
        const list: Career[] = value
          ? Object.entries(value).map(([id, data]) => ({
              id,
              ...(data as Omit<Career, "id">),
            }))
          : [];
        list.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
        setCareers(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setCareers([]);
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return { careers, loading, error };
}
