"use client";

import { useEffect, useRef } from "react";

export default function Camera({
  onCapture,
}: {
  onCapture: (img: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    startCamera();
  }, []);

  const capture = () => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    const img = canvas.toDataURL("image/png");
    onCapture(img);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} autoPlay className="rounded-xl w-[400px]" />
      <button
        onClick={capture}
        className="bg-pink-300 px-6 py-2 rounded-full"
      >
        Capture
      </button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}