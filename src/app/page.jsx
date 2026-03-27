'use client'
import { useEffect } from "react";
import { Button } from "./components/Button";
import { useRouter } from "next/navigation";
import { useStorage } from "./hooks/useStorage";
import { useState } from "react";

import { Header } from "./components/Header";
import { PageLayout } from "./components/PageLayout";

export default function Home() {
  const { getAllImageUrlFromFolder } = useStorage();

  const [frameUrls, setFrameUrls] = useState([]);
  useEffect(()=>{
    const fetchFrames = async () => {
      try {
        const urls = await getAllImageUrlFromFolder("3-slot", "frame-bucket");
        setFrameUrls(urls);
      } catch (error) {
        console.error("Failed to fetch frames:", error);
      }
    };

    fetchFrames();
  },[])
  
  const router = useRouter();
  const handleClick = ()=>{
    router.push("/photo-setting");
  }

  return <>
    <PageLayout>
    <Header/>
    
    {/* <div className="translate-x-1/2 translate-y-1/5 flex flex-row flex-auto justify-center items-center max-w-1/2 p-10">
       <img src={frameUrls[0]} className="flex-initial grow -rotate-3 shadow-md rotage-12" />
       <img src={frameUrls[1]} className="flex-initial grow rotate-1 shadow-md" />
       <img src={frameUrls[2]} className="flex-initial grow rotate-3 shadow-md" />
    </div> */}
    <div className="flex flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto p-20 gap-10 outline outline-red-500">
       <img src={frameUrls[0]} className="w-1/3 h-auto -rotate-3 shadow-md border-4 border-white" />
       <img src={frameUrls[1]} className="w-1/3 h-auto rotate-1 shadow-md border-4 border-white" />
       <img src={frameUrls[2]} className="w-1/3 h-auto rotate-6 shadow-md border-4 border-white" />
    </div>
    <div className="flex w-full justify-center">
      <Button onClick={handleClick} buttonType="primary" className="">Start Choose Frame</Button>
    </div>
    </PageLayout>
    </>
}
