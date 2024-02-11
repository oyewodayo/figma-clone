"use client";

import Live from "@/components/Live";
import Navbar from "@/components/users/Navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar/>
      <section>
        <Live />
      </section>
    </main>
  );
}