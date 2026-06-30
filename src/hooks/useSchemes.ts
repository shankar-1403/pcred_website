import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../lib/firebase";

export interface SchemePoint {
  icon: string;
  point: string;
}

export interface SchemeTableRow {
  icon: string;
  label: string;
  description: string;
  criteria: string;
  criteria_description: string;
}

export interface SchemeFaq {
  question: string;
  answer: string;
}

export interface Scheme {
  id: string;
  dropdown_label?:string;
  section_1_header?: string;
  section_1_subheader?:string;
  section_1_description?: string;
  section_1_points?: SchemePoint[];
  video_link?: string;
  section_1_logo?: string;
  section_1_banner?: string;
  section_2_header?: string;
  section_2_description?: string;
  section_3_description?: string;
  table_footer?: string;
  section_3_img?: string;
  section_4_header?: string;
  section_4_description?: string;
  section_4_tagline?: string;
  eligibility_table?: SchemeTableRow[];
  faq_description?: string;
  faq_image?: string;
  faqs?: SchemeFaq[];
  disclaimer?:string;
  createdAt?: number;
  createdBy?: string | null;
  [key: string]: unknown;
}

export function useSchemes() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const schemesRef = ref(db, "schemes");

    const unsubscribe = onValue(
      schemesRef,
      (snapshot) => {
        const value = snapshot.val();

        const list: Scheme[] = value
          ? Object.entries(value).map(([id, data]) => ({
              id,
              ...(data as Omit<Scheme, "id">),
            }))
          : [];

        list.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));

        setSchemes(list);
        setError(null);
        setLoading(false);
      },
      (err) => {
        console.error("[CMS] schemes read failed.", err);
        setSchemes([]);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { schemes, loading, error };
}
