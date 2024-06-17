import Terminal from "@/app/icon-components/Terminal";

interface TaskbarProps {
  setIsTerminalOpen: (isOpen: boolean) => void;
}

export default function Taskbar({ setIsTerminalOpen }: TaskbarProps) {
  return (
    <div className="flex justify-center">
      <div className="absolute bottom-2 bg-white/70 backdrop-blur-md w-[80%] p-3 rounded-lg flex">
        <Terminal clickHandler={() => setIsTerminalOpen(true)} />
      </div>
    </div>
  );
}
