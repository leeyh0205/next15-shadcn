"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { makeData } from "./makeData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>Hello</div>
        <Link href={"/table"}>Table</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
