"use client";
import BottomBar from "./BottomBar";
import { Button } from "@/components/ui/button";
import NavigationLink from "../Navigation/NavigationLink";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
export default function Footer() {
  // const t = useTranslations("Contact");
  return (
    <footer className=" w-full ">
      <div className="w-full bg-black text-white text-xs md:text-base p-2 md:p-12">
        <div className="max-w-5xl grid grid-cols-2  mx-auto  p-2">
          <div className=" flex flex-col items-center py-1 space-x-3 ">
              <Image
                src="/images/logo-white.webp"
                alt="Areafly Solar logo"
                width={229}
                height={43}
              />
              <div className="w-full py-10">
                <ul className="flex justify-around flex-row text-center text-base uppercase font-bold flex-nowrap">
                  <li  >
                  <Image
                      src="/images/whatsapp.webp"
                      alt="whats app"
                      width={99}
                      height={99}
                      priority
                    />
                    <p >whats app</p>
                  </li>
                  <li >
                  <Image
                      src="/images/wechat.webp"
                      alt="wechat"
                      width={99}
                      height={99}
                      priority
                    />
                    <p>wechat</p>
                  </li>
                </ul>
                </div>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="icon" size="icon">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"
                      />
                    </svg>
                  </Link>
                </Button>
                <Button variant="icon" size="icon">
                  <Link href="https://www.x.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.283 20.263c7.547 0 11.676-6.259 11.676-11.677q.002-.264-.008-.528A8.4 8.4 0 0 0 22 5.928a8.3 8.3 0 0 1-2.36.649a4.13 4.13 0 0 0 1.808-2.273a8.2 8.2 0 0 1-2.61.993A4.1 4.1 0 0 0 15.847 4a4.11 4.11 0 0 0-4.106 4.106c0 .32.04.632.104.936a11.65 11.65 0 0 1-8.46-4.29a4.115 4.115 0 0 0 1.273 5.482A4.15 4.15 0 0 1 2.8 9.722v.056a4.11 4.11 0 0 0 3.29 4.026a4 4 0 0 1-1.08.144q-.397 0-.77-.072a4.1 4.1 0 0 0 3.834 2.85a8.23 8.23 0 0 1-5.098 1.76c-.328 0-.656-.016-.976-.056a11.67 11.67 0 0 0 6.283 1.833"
                      />
                    </svg>
                  </Link>
                </Button>
                <Button variant="icon" size="icon">
                  <Link href="https://www.youtube.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.073 2.5c1.824 0 3.293 0 4.45.155c1.2.162 2.21.507 3.012 1.31c.803.802 1.148 1.813 1.31 3.013C24 8.134 24 9.603 24 11.427v1.146c0 1.824 0 3.293-.155 4.45c-.162 1.2-.507 2.21-1.31 3.012c-.802.803-1.812 1.148-3.013 1.31c-1.156.155-2.625.155-4.449.155H8.927c-1.824 0-3.293 0-4.45-.155c-1.2-.162-2.21-.507-3.013-1.31c-.802-.802-1.147-1.812-1.309-3.013C0 15.866 0 14.397 0 12.573v-1.146c0-1.824 0-3.293.155-4.45c.162-1.2.507-2.21 1.31-3.013c.802-.802 1.813-1.147 3.013-1.309C5.634 2.5 7.103 2.5 8.927 2.5zm1.426 9.501L9.3 7.832v8.338z"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            
          </div>
          <div className=" flex justify-between ">
            <div className="flex flex-col ">
              <NavigationLink href="/products/SolarInverter" className="text-white hover:text-primary" >
                  PRODUCTS
                </NavigationLink>
              <div className="flex flex-col">
                <NavigationLink href="/products/SolarInverter" className="text-white hover:text-primary" >
                  Solar Inverter
                </NavigationLink>
                <NavigationLink href="/products/SolarBattery" className="text-white hover:text-primary">
                  Solar Battery
                </NavigationLink>
                <NavigationLink href="/products/Solarpanel" className="text-white hover:text-primary">
                  Solar panel
                </NavigationLink>
                <NavigationLink href="/products/SolarLighting" className="text-white hover:text-primary">
                  Solar Lighting
                </NavigationLink>
                <NavigationLink href="/products/SolarWaterPump" className="text-white hover:text-primary">
                  Solar Water Pump
                </NavigationLink>
                <NavigationLink href="/products/SolarEnergySystem" className="text-white hover:text-primary">
                  Solar Energy System
                </NavigationLink>
              </div>
            </div>
            <div className="flex flex-col">
              <NavigationLink href={"/project"} className="text-white hover:text-primary">PROIFCT</NavigationLink>
              <NavigationLink href={"/about"} className="text-white hover:text-primary">About Us</NavigationLink>
              <NavigationLink href={"/contact"} className="text-white hover:text-primary">CONTACT</NavigationLink>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto ">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5">
             <li className="flex items-start">
              <FaEnvelope className="text-primary text-lg mt-1 mr-4" />
                <h3 >Email: <a
                  href="mailto:areaflysolar@163.com"
                  className="text-white hover:text-primary  mt-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  areaflysolar@163.com
                </a></h3>
            </li>
           
            <li className="flex items-start">
              <FaPhone className="text-primary text-lg  mt-1 mr-4" />
                <h3 >Tele: <a
                  href="tel:+8615017203259"
                  className=" mt-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +86 15017203259
                </a></h3>
            </li>
            <li className="flex items-start col-span-1 md:col-span-2">
              <FaMapMarker className="text-primary text-lg mt-0.5 mr-4" />
                <h3 >Address: <a
                  href="#"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A003、005, first floor,Zone B, Yueyang Trade Mall, Yuexiu District, Guangzhou, Guangdong
                </a></h3>
                
            </li>
          </ul>
        </div>
      </div>
      <BottomBar />
    </footer>
  );
}
