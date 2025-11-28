"use client"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import { useTranslations, } from 'use-intl';
import { Package, Home, Newspaper, Folder, Info, Mail } from "lucide-react"
import NavigationLink from "../Navigation/NavigationLink";
export function AppSidebar() {
  // Enable static rendering
  // Menu items.
  const t = useTranslations('Navigation');
  const items = [
    {
      title: t("home"),
      url: "/",
      icon: Home,
    },
    {
      title: t("products.title"),
      url: "/products",
      icon: Package,
    },
    {
      title: t("project"),
      url: "/project",
      icon: Folder,
    },
    {
      title: t("news"),
      url: "/news",
      icon: Newspaper,
    },
    {
      title: t("about"),
      url: "/about",
      icon: Info,
    },
    {
      title: t("contact"),
      url: "/contact",
      icon: Mail,
    },
  ]

  return (
    <Sidebar className="">
      <SidebarHeader className="h-10">
        <SidebarMenu>
          <SidebarMenuItem>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild >
                  <NavigationLink href={item.url} className= "rounded-none text-2xl active:text-white hover:bg-primary hover:text-white h-auto [&>svg]:size-6" >
                    {/* <item.icon  /> */}
                    <span>{item.title}</span>
                  </NavigationLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}

