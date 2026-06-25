"use client";

import Header from "@/components/Header";
import InternalHeader from "../components/InternalHeader";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import ProtectedRoute from "./ProtectedRoute";

export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideLayout = ["/login"].includes(pathname);
  const internalLayout = ["/dashboard"].includes(pathname);

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
      <Header/>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
