import "./globals.css";
import Taskbar from "./components/Taskbar";

export default function Home() {
  return (
    <main
      className="h-[100dvh] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/wallpaper.jpg)" }}
    >
      <Taskbar />
    </main>
  );
}
