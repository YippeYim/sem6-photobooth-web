'use client'
import { useSearchParams } from "next/navigation";

export default function TakePicturePage() {

    const searchParams = useSearchParams();

    const frameName = searchParams.get("frame");
    const peopleSize = searchParams.get("size");

    return <>
    take a pic   
    </>
}