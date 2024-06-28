"use client";

import "./globals.css";
import Taskbar from "./components/Taskbar";
import Terminal from "./components/Terminal";
import { useState } from "react";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <main
      className="h-[100dvh] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/wallpaper.jpg)" }}
    >
      <Taskbar
        setIsTerminalOpen={setIsTerminalOpen}
        setIsResumeOpen={setIsResumeOpen}
        setIsContactOpen={setIsContactOpen}
      />
      {isTerminalOpen && <Terminal />}
    </main>
  );
}
