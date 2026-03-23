'use client'
import Link from "next/link";

export default function Home() {
  return <div>
    <h1 className='text-xl font-bold'>Home page</h1>

    <li><Link href="/">Go to home</Link></li>
    <li><Link href="/photo-setting">Go to setting</Link></li>
  </div>
}
