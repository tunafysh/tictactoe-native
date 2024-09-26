import { ModeToggle } from "@/components/themetoggle";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">

      <div id="modetoggle" className="absolute animate-fade top-4 right-4">
      <ModeToggle />
    </div>
      <h1 className="text-3xl font-bold">Hello World!</h1>
    </div>
      
  );
}
