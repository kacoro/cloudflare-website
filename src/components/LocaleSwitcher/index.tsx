'use client';
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import LocaleSwitcherSelect from './Select';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, startTransition, useTransition} from 'react';
import Image from "next/image";
import {usePathname, useRouter} from '@/i18n/navigation';
import { useParams } from 'next/navigation';

// 创建使用本地SVG图标的国旗组件
const LocalFlagIcon = ({ countryCode }: { countryCode: string }) => {
  // 根据国家代码返回对应的本地SVG图标路径
  const getFlagPath = (code: string) => {
    switch (code.toUpperCase()) {
      case 'ZH':
        return `/ZH.svg`;
      case 'EN':
        return `/EN.svg`;
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
export default function Index() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }
  return (

    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
   
      {routing.locales.map((cur) => (
        <li key={cur} value={cur}  onClick={() => onSelectChange(cur)}>
        <LocalFlagIcon countryCode={cur} />  {t('locale', {locale: cur})}
        </li>
      ))}
    </LocaleSwitcherSelect>
  );
}