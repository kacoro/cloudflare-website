"use client"
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu-demo"
import NavigationLink from "./NavigationLink";


export function NavigationMenuDemo() {

  return (
    <NavigationMenu viewport={false} className="max-w-none items-stretch flex-col not-md:hidden">
      <NavigationMenuList className="width-full">
        <NavigationMenuItem>
          <NavigationMenuLink asChild  >
            {/* data-active="true" */}
            <NavigationLink href="/"  >Home</NavigationLink>
          </NavigationMenuLink>
      </NavigationMenuItem>
         {/*
        <NavigationMenuItem>
          <NavigationMenuTrigger  className="hover:bg-primary">
          <NavigationLink href="/products" >Products</NavigationLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]  ">
              <li>
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/SolarInverter">Solar Inverter</NavigationLink>
                </NavigationSubMenuLink >
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/SolarBattery">Solar Battery</NavigationLink>
                </NavigationSubMenuLink>
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/Solarpanel">Solar panel</NavigationLink>
                </NavigationSubMenuLink>
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/SolarLighting">Solar Lighting</NavigationLink>
                </NavigationSubMenuLink>
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/SolarWaterPump">Solar Water Pump</NavigationLink>
                </NavigationSubMenuLink>
                <NavigationSubMenuLink asChild >
                  <NavigationLink href="/products/SolarEnergySystem">Solar Energy System</NavigationLink>
                </NavigationSubMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
         <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <NavigationLink href="/products">Products</NavigationLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <NavigationLink href="/project">Project</NavigationLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <NavigationLink href="/news">News</NavigationLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <NavigationLink href="/about">About us</NavigationLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <NavigationLink href="/contact">Contact</NavigationLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
// }