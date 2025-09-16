"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { i18n, type Locale } from "@/i18n/routing";

// 创建使用本地SVG图标的国旗组件
const LocalFlagIcon = ({ countryCode }: { countryCode: string }) => {
  // 根据国家代码返回对应的本地SVG图标路径
  const getFlagPath = (code: string) => {
    switch (code.toUpperCase()) {
      case 'CN':
        return `/CN.svg`;
      case 'GB':
        return `/GB.svg`;
      case 'FR':
        return `/FR.svg`;
      default:
        // 对于未定义的国旗，返回默认的文本占位符
        return null;
    }
  };

  const flagPath = getFlagPath(countryCode);
  
  // 如果有对应的SVG文件，显示SVG图标
  if (flagPath) {
    return (
      <Image 
        src={flagPath} 
        alt={`${countryCode} flag`}
        className="w-6 h-4 object-contain border border-gray-300 rounded-sm"
        width={24}
        height={16}
      />
    );
  }

  // 否则显示默认的文本占位符
  return (
    <div className="w-6 h-4 flex items-center justify-center border border-gray-300 rounded-sm bg-gray-100 text-[8px] font-medium">
      {countryCode.toUpperCase()}
    </div>
  );
};

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // 定义语言代码到语言名称的映射
  const languageNames: Record<Locale, string> = {
    en: "English",
    fr: "French",
    zh: "Chinese"
  };

  // 定义语言代码到国家代码的映射，用于显示国旗
  const languageToCountry: Record<Locale, string> = {
    en: "GB",
    fr: "FR",
    zh: "CN"
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-2">
      <span>Language:</span>
      <ul className="flex flex-row font-medium space-x-4 ml-4">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="flex items-center">
              <Link 
                href={redirectedPathname(locale)} 
                className="flex items-center space-x-1 hover:opacity-75"
              >
                <LocalFlagIcon countryCode={languageToCountry[locale] || locale.toUpperCase()} />
                <span>{languageNames[locale] || locale}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}