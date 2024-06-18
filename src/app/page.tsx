"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => alert("안녕하세요, 마켓 연리지 입니다.")}>
        Hi
      </Button>
    </main>
  );
}
