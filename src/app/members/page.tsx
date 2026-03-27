"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MembersPage() {
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1 className="text-3xl mb-6">How many members?</h1>

      <div className="flex items-center gap-6 text-4xl">
        <button onClick={() => setCount(Math.max(1, count - 1))}>{"<"}</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>{">"}</button>
      </div>

      <button
        onClick={() => router.push("/frames")}
        className="mt-6 bg-pink-300 px-6 py-2 rounded-full"
      >
        Start
      </button>
    </div>
  );
}