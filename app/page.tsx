"use client";
import { DialogDemo } from "@/components/DialogDemo";
import Example from "@/components/Example";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DialogDemo />
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      />
      <Example open={open} setOpen={setOpen} />
    </main>
  );
}
