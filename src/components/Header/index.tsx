import { NavigationMenuDemo } from "@/components/Navigation/NavigationMenuDemo";

import Image from "next/image";
import NavigationLink from "@/components/Navigation/NavigationLink";

export default async function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between px-4  ">
      <nav className="w-full bg-white  border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className=" flex-wrap  max-w-screen-lg flex items-center mx-auto  space-x-8 ">
            <NavigationLink
              href="/"
              className="flex items-center py-1 space-x-3 flex-none"
            >
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Areafly Solar logo"
                width={229}
                height={43}
                priority
              />
            </NavigationLink>
          <NavigationMenuDemo />
          </div>
        </nav>
      </header>
      {/* <Navigation /> */}
    </>
  );
}
