"use client";

import Camera from "../components/Camera";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CameraPage() {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();

  const handleCapture = (img: string) => {
    const newImgs = [...images, img];
    setImages(newImgs);

    if (newImgs.length >= 3) {
      localStorage.setItem("photos", JSON.stringify(newImgs));
      router.push("/result");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Camera shoot</h1>
      <Camera onCapture={handleCapture} />

      <p>{images.length}/3</p>
    </div>
  );
}