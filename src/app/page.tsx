import "./globals.css";
import Taskbar from "./components/Taskbar";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <main
      className="h-[100dvh] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/wallpaper.jpg)" }}
    >
      <Taskbar />
      <Terminal />
    </main>
  );
}
