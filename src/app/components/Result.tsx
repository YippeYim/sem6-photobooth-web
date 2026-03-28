"use client";

import { useEffect, useState } from "react";
import { createPhotoStrip } from "../../lib/capture";
import { saveAs } from "file-saver";
import { useSearchParams } from "next/navigation";
import { getUrlFromFileName, getMaxShotFromFileName } from "../../lib/utils";

export function Result({imgUrl}) {
  const [finalImg, setFinalImg] = useState<string>("");
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

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl">Result</h1>
      <button onClick={handleResult}>Show Result</button>

      {finalImg && (
        <img src={finalImg} className="w-[300px] rounded-xl shadow-lg" />
      )}

      <button
        onClick={download}
        className="bg-pink-300 px-6 py-2 rounded-full"
      >
        Download
      </button>
    </div>
  );   
}