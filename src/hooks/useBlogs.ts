import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";

export interface Blog {
  id: string;
  title?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
  cover_image?: string;
  content?: string;
  createdAt?: number;
  createdBy?: string | null;
  updatedAt?: number;
  updatedBy?: string | null;
  [key: string]: unknown;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const blogsRef = ref(db, "blogs");
    const unsubscribe = onValue(
      blogsRef,
      (snapshot) => {
        const value = snapshot.val();
        const list: Blog[] = value
          ? Object.entries(value).map(([id, data]) => ({
              id,
              ...(data as Omit<Blog, "id">),
            }))
          : [];
        list.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
        setBlogs(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setBlogs([]);
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return { blogs, loading, error };
}
