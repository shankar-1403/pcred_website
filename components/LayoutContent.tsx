"use client";

import Header from "@/components/Header";
import InternalHeader from "../components/InternalHeader";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideLayout = ["/login"].includes(pathname);
  const internalLayout = ["/cms"].includes(pathname);

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
        <InternalHeader/>
        <main>{children}</main>
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
