"use client";

import "./globals.css";
import Taskbar from "./components/Taskbar";
import Terminal from "./components/Terminal";
import { useState } from "react";
import Contact from "./components/Contact";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState<boolean>(false);
  const [isReadMeOpen, setIsReadMeOpen] = useState<boolean>(false);

  return (
    <main
      className="h-[100dvh] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/wallpaper.jpg)" }}
    >
      <Taskbar
        setIsTerminalOpen={setIsTerminalOpen}
        setIsResumeOpen={setIsResumeOpen}
        setIsContactOpen={setIsContactOpen}
        setIsProjectsOpen={setIsProjectsOpen}
        setIsReadMeOpen={setIsReadMeOpen}
      />
      {isTerminalOpen && <Terminal />}
      {isContactOpen && <Contact />}
    </main>
  );
}
