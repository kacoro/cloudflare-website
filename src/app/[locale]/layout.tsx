import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {notFound} from 'next/navigation';
import {NextIntlClientProvider,hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import {getMessages} from 'next-intl/server';
import "@/globals.css";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { cookies } from "next/headers"
import Topbar from "@/components/TopBar";
import Footer from "@/components/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export const metadata: Metadata = {
  title: "AreaFly Solar",
  description: "Guangzhou Areafly Solar Technology Co., Ltd. has engaged in research, sustained development and efficient production of high-quality solar lighting, batteries,solar inverters,solar energy systems for over 12 Years,with headquarer in Guangzhou,China.",
};

export default async function LocaleLayout({children, params}: Props) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  // 获取当前locale的消息
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        
        <main className="flex flex-col min-h-screen w-full">
          <div className="w-full flex-grow">
             <Topbar/>
            <Header />
            {children}
          </div>
          <Footer />
        </main>
        </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}