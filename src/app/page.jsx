'use client'
import Link from "next/link";
import { Button } from "./components/Button";

export default function Home() {

  return <div>
    <h1 className='text-xl font-bold'>Home page</h1>

    <Button buttonType="primary"><Link href="/photo-setting">Start Choose Frame</Link></Button>
    
  </div>
}
