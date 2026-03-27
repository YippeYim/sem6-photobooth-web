"use client";

import { useRouter } from "next/navigation";

export default function FramesPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      
      <h1 className="text-3xl">Choose Frames</h1>

      <div className="grid grid-cols-2 gap-6">
        {[2, 3, 4, 6].map((f) => (
          <button
            key={f}
            onClick={() => router.push("/camera")}
            className="w-40 h-40 bg-gray-200 rounded-xl"
          >
            {f} Frames
          </button>
        ))}
      </div>
    </div>
  );
}