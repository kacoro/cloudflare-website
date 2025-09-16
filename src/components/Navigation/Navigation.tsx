import {useTranslations} from 'next-intl';
import NavigationLink from './NavigationLink';

import TopBar from '../TopBar';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <>
     <TopBar />
     <div className="bg-slate-850">

      <nav className="container flex justify-between p-2">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/about">{t('about')}</NavigationLink>
        </div>
      </nav>
    </div>
    </>
   
  );
}