'use client';
import LocaleSwitcher from "@/components/LocaleSwitcher"
import { Button } from "@/components/ui/button"
import { X,Menu } from 'lucide-react';
import { useSidebar } from "@/components/ui/sidebar"
export default function Topbar() {
    const { toggleSidebar,state } = useSidebar()
  return (
      <div className="w-full bg-primary text-white text-xs md:text-base">
        <div className="container flex justify-between  mx-auto">
            <div className="flex ">
            <Button className="hidden not-md:block" onClick={()=>toggleSidebar()}>
                {state==="collapsed"?(<Menu />): (<X />)}
             </Button>
            </div>
        <LocaleSwitcher />
        </div>
      </div>
  );
}

