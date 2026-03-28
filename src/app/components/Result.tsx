"use client";

import { useEffect, useState } from "react";
import { createPhotoStrip } from "../../lib/capture";
import { saveAs } from "file-saver";
import { useSearchParams } from "next/navigation";
import { getUrlFromFileName, getMaxShotFromFileName } from "../../lib/utils";
import { Button } from "./Button";
import { usePicture } from "./take-picture/usePicture";

export function Result({imgUrl}) {
  const [finalImg, setFinalImg] = useState("");
  const searchParams = useSearchParams();

  const handleResult = ()=>{
    async function generate() {
      // const photos = JSON.parse(localStorage.getItem("photos") || "[]");
      const photos = imgUrl;
      // const frame = localStorage.getItem("frame") || "";
      const frameName = searchParams.get("frame");
      const frame = getMaxShotFromFileName(frameName);

      if (!photos.length || !frame) return;

      const result = await createPhotoStrip(photos, getUrlFromFileName(frameName, "frame-bucket", `${frame}-slot` , "png"));
      setFinalImg(result);
    }

    generate();
  };

  const download = () => {
    if (!finalImg) return;
    saveAs(finalImg, "stickisnap.png");
  };
  
  const { sharePicture } = usePicture();

const handleShare = async () => { // 1. Make this async
  const createTestFile = async () => {
    const response = await fetch(finalImg);
    const blob = await response.blob();
    
    // 2. Ensure the filename matches the type (jpg vs png)
    const realFile = new File([blob], "picture.jpg", { type: "image/jpeg" });
    
    console.log("file created:", realFile);
    return realFile;
  };

  try {
    // 3. Wait for the file to actually exist
    const photoFile = await createTestFile(); 
    
    // 4. Pass the actual File object, not a wrapper object
    await sharePicture(finalImg, photoFile); 
  } catch (error) {
    console.error("Error creating or sharing file:", error);
  }
};

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl">Result</h1>

      {!finalImg && (
        <button className="bg-pink-300 px-6 py-2 rounded-full" onClick={handleResult}>Show Result</button>
      )}

      {finalImg && (<>
        <img src={finalImg} className="w-[300px] rounded-xl shadow-lg" />

        <button
          onClick={download}
          className="bg-pink-300 px-6 py-2 rounded-full"
        >
          Download
      </button>
      <button className="bg-white border px-6 py-2 rounded-full" onClick={handleShare}>Share</button>
      </>
      )}
    </div>
  );   
}