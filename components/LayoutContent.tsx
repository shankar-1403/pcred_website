"use client";

import Header from "@/components/Header";
import InternalHeader from "../components/InternalHeader";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import ProtectedRoute from "./ProtectedRoute";
import TextReveal from "./TextReveal";

export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideLayout = ["/login"].includes(pathname);
  const internalLayout = ["/dashboard","/internal-blogs","/internal-careers"].includes(pathname);

  if(hideLayout){
    return( 
      <>
        <main>{children}</main>
      </>
    )
  }

  if(internalLayout){
    return( 
      <>
        <ProtectedRoute>
          <InternalHeader/>
          <main>{children}</main>
        </ProtectedRoute>
      </>
    )
  }
  return (
    <>
      <TextReveal />
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
