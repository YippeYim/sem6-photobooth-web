'use client'
import Link from "next/link";
import { useStorage } from "./hooks/useStorage";
import { useState } from "react";
import { GuidePicture } from "./components/guide-picture/GuidePicture";

export default function Home() {

  return <div>
    <h1 className='text-xl font-bold'>Home page</h1>

    <ul>
      <li><Link href="/">Go to home</Link></li>
      <li><Link href="/photo-setting">Go to setting</Link></li>
    </ul>
    
    <GuidePicture></GuidePicture>
    
  </div>
}
