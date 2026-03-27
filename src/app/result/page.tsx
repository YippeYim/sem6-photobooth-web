"use client";

import { useEffect, useState } from "react";
import { createPhotoStrip } from "../../lib/capture";
import { saveAs } from "file-saver";

export default function ResultPage() {
  const [finalImg, setFinalImg] = useState<string>("");

  useEffect(() => {
    const photos = JSON.parse(localStorage.getItem("photos") || "[]");

    createPhotoStrip(photos).then(setFinalImg);
  }, []);

  const download = () => {
    saveAs(finalImg, "stickisnap.png");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl">Result</h1>

      {finalImg && (
        <img src={finalImg} className="rounded-xl shadow-lg" />
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