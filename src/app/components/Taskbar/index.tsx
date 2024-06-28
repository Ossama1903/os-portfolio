import Contact from "@/app/icon-components/Contact";
import Resume from "@/app/icon-components/Resume";
import Terminal from "@/app/icon-components/Terminal";

interface TaskbarProps {
  setIsTerminalOpen: (isOpen: boolean) => void;
  setIsResumeOpen: (isOpen: boolean) => void;
  setIsContactOpen: (isOpen: boolean) => void;
}

export default function Taskbar({
  setIsTerminalOpen,
  setIsResumeOpen,
  setIsContactOpen,
}: TaskbarProps) {
  return (
    <div className="flex justify-center">
      <div className="absolute bottom-2 bg-white/70 backdrop-blur-md w-[80%] p-3 rounded-lg flex">
        <Terminal clickHandler={() => setIsTerminalOpen(true)} />
        <Resume clickHandler={() => setIsResumeOpen(true)} />
        <Contact clickHandler={() => setIsContactOpen(true)} />
      </div>
    </div>
  );
}
