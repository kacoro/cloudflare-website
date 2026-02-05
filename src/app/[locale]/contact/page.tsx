import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';


type PageProps = {
  params: Promise<{ locale: string }>;
};
export default function AboutPage({
  params
}: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('Contact');
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fafafa]">
       <Image src="/images/contact-bg.webp" width={1920} height={1080} alt="Contact" className="absolute  bottom-0 w-full  object-cover" />
      <div className="container mx-auto px-4 py-12 grow">

        <div className="text-center mb-12">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-primary uppercase tracking-wider">Contact</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>


        <div className="max-w-5xl mx-auto relative">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-items-center">

            <div className="flex flex-col items-center">
              <div className=" rounded-lg ">
                <Image src="/images/whatsapp.webp" width={145} height={145} alt="WhatsApp QR Code" className="w-48 h-48" />
              </div>
              <p className="mt-4 text-lg font-semibold text-center">WHATS APP</p>
            </div>


            <div className="flex flex-col items-center">
              <div className=" rounded-lg  ">
                <Image src="/images/wechat.webp" width={145} height={145} alt="WeChat QR Code" className="w-48 h-48" />
              </div>
              <p className="mt-4 text-lg font-semibold text-center">WECHAT</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            <li className="flex items-start">
              <FaFacebookSquare className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Facebook.label")}</h3>
                <a
                  href={t("Facebook.content")}
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Facebook.content")}
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaInstagram className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Instagram.label")}</h3>
                <a
                href={t("Instagram.content")}
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Instagram.content")}
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaYoutube className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Youtube.label")}</h3>
                <a
                  href={t("Youtube.content")}
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Youtube.content")}
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Tel.label")}</h3>
                <a
                  href={`tel:${t("Tel.content")}`}
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Tel.content")}
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Email.label")}</h3>
                <a
                  href={`mailto:${t("Email.content")}`}
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Email.content")}
                </a>
              </div>
            </li>
            <li className="flex items-start col-span-1 md:col-span-2">
              <FaMapMarker className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">{t("Address.label")}</h3>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Address.content")}
                </a>
              </div>
            </li>
          </ul>
        </div></div></div>
  );
}