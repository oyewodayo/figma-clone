"use client";

import {fabric} from 'fabric'
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import RightSidebar from "@/components/RightSidebar";
import Navbar from "@/components/users/Navbar";
import { useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing  = useRef(false);


  return (
    <main className="h-screen overflow-hidden">
      <Navbar/>
      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}