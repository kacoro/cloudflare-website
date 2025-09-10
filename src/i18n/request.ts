import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    // const store = await cookies();
  // Static for now, we'll change this later
//   const locale = store.get('locale')?.value || 'en';
 
   // Typically corresponds to the `[locale]` segment
   const requested = await requestLocale;
   const locale = hasLocale(routing.locales, requested)
     ? requested
     : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});