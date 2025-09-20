"use client";
import BottomBar from "./BottomBar";
import { Button } from "@/components/ui/button";
import {  Menu } from "lucide-react";
import NavigationLink from "../Navigation/NavigationLink";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="w-full bg-black text-white text-xs md:text-base p-2 md:p-12">
        <div className="max-w-5xl flex justify-between  mx-auto">
          <div className="w-1/2 flex ">
            <NavigationLink
              href="/"
              className="flex items-center py-1 space-x-3 flex-none"
            >
              <Image
                className="dark:invert"
                src="/images/logo-white.png"
                alt="Areafly Solar logo"
                width={229}
                height={43}
                priority
              />{" "}
            </NavigationLink>
            <Button className="hidden not-md:block" size={"icon"}>
              <Menu />
            </Button>
          </div>
          <div className="w-1/2 flex justify-between ">
            <div className="flex flex-col">
            PRODUCTS
            <div className="flex flex-col">
            <NavigationLink href="/products/SolarInverter">Solar Inverter</NavigationLink>
            <NavigationLink href="/products/SolarBattery">Solar Battery</NavigationLink>
            <NavigationLink href="/products/Solarpanel">Solar panel</NavigationLink>
              <NavigationLink href="/products/SolarLighting">Solar Lighting</NavigationLink>
              <NavigationLink href="/products/SolarWaterPump">Solar Water Pump</NavigationLink>
              <NavigationLink href="/products/SolarEnergySystem">Solar Energy System</NavigationLink>
            </div>
            </div>
            <div className="flex flex-col"> 
             <NavigationLink href={"/project"}>PROIFCT</NavigationLink>
             <NavigationLink href={"/about"}>About Us</NavigationLink>
              <NavigationLink href={"/contact"}>CONTACT</NavigationLink>
            </div>
          
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
