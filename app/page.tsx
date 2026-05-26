'use client';
import { useState } from "react";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="">
        <video
          src="/banner.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover h-screen"
        />
        <div className="bg-white w-full blur-2xl h-70 -mt-18"></div>
      </div>
    </div>
  );
}
