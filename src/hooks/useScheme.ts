import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";
import type { Scheme } from "./useSchemes";

export function useScheme(schemeId: string | undefined) {
  const [scheme, setScheme] = useState<Scheme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!schemeId) {
      setScheme(null);
      setLoading(false);
      return;
    }

    const schemeRef = ref(db, `schemes/${schemeId}`);

    const unsubscribe = onValue(
      schemeRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setScheme({
            id: schemeId,
            ...(snapshot.val() as Omit<Scheme, "id">),
          });
        } else {
          setScheme(null);
        }
        setError(null);
        setLoading(false);
      },
      (err) => {
        console.error(`[CMS] scheme read failed for ${schemeId}.`, err);
        setScheme(null);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [schemeId]);

  return { scheme, loading, error };
}
