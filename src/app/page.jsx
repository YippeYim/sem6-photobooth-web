'use client'
import Link from "next/link";
import { Button } from "./components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/photo-setting");
  }

  return <div>
    <h1 className='text-xl font-bold'>Home page</h1>

    <Button onClick={handleClick} buttonType="primary">Start Choose Frame</Button>
    
  </div>
}
