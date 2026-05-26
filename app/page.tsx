'use client';
import { useState } from "react";

export default function Home() {
  return (
    <div className="relative w-full">
      <video
        src="/banner.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full object-cover h-screen"
      />
    </div>
  );
}
