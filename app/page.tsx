"use client"
import { ModeToggle } from "@/components/themetoggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { appWindow } from "@tauri-apps/api/window"

export default function Home() {
  if(window != undefined && window.__TAURI__){

    const handleClose = () => window != undefined? appWindow.close(): null;
    const handleMinimize = () => appWindow.minimize();
    const handleMaximize = () => appWindow.maximize();
    
    return (
    <div className="h-screen overflow-hidden overflow-y-hidden">

      <Menubar className="titlebar-drag-region flex justify-between" data-tauri-drag-region>
        <MenubarMenu>
          <MenubarTrigger className="ml-2">Game</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Game</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <div className="titlebar-buttons flex space-x-2">
        <button onClick={handleMinimize} className="hover:bg-gray-700 p-1 rounded">
          &#x2014;
        </button>
        <button onClick={handleMaximize} className="hover:bg-gray-700 p-1 rounded">
          &#x25A1;
        </button>
        <button onClick={handleClose} className="hover:bg-red-600 p-1 rounded">
          &#x2715;
        </button>
      </div>
      </Menubar>
    <div className="bg-background h-screen w-screen flex justify-center items-center">
      <div id="modetoggle" className="absolute animate-fade top-10 right-4">
      <ModeToggle />
    </div>
      <h1 className="text-3xl font-bold">Hello World!</h1>
    </div>
    </div>
      
    );
  }
}
