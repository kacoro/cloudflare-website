import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';


type PageProps = {
    params: Promise<{locale: string}>;
  };
export default function AboutPage({
  params
}: PageProps) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('AboutPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
     
      </div>
    </PageLayout>
  );
}