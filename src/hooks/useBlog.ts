import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";
import type { Blog } from "./useBlogs";

export function useBlog(blogId: string | undefined) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!blogId) {
      setBlog(null);
      setLoading(false);
      return;
    }
    const blogRef = ref(db, `blogs/${blogId}`);
    const unsubscribe = onValue(
      blogRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setBlog({ id: blogId, ...(snapshot.val() as Omit<Blog, "id">) });
        } else {
          setBlog(null);
        }
        setError(null);
        setLoading(false);
      },
      (err) => {
        setBlog(null);
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [blogId]);

  return { blog, loading, error };
}
