import Terminal from "@/app/icon-components/Terminal";
import Image from "next/image";

export default function Taskbar() {
  return (
    <div className="flex justify-center">
      <div className="absolute bottom-2 bg-white/70 backdrop-blur-md w-[80%] p-3 rounded-lg flex">
        <Terminal />
        <Terminal />
      </div>
    </div>
  );
}
