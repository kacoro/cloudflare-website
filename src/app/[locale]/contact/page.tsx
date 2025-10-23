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
       <Image src="/images/contact-bg.jpg" width={1920} height={1080} alt="Contact" className="absolute  bottom-0 w-full  object-cover" />
      <div className="container mx-auto px-4 py-12 flex-grow">

        <div className="text-center mb-12">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-primary uppercase tracking-wider">Contact</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>


        <div className="max-w-5xl mx-auto relative">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 justify-items-center">

            <div className="flex flex-col items-center">
              <div className=" rounded-lg ">
                <Image src="/images/whatsapp.jpg" width={145} height={145} alt="WhatsApp QR Code" className="w-48 h-48" />
              </div>
              <p className="mt-4 text-lg font-semibold text-center">WHATS APP</p>
            </div>


            <div className="flex flex-col items-center">
              <div className=" rounded-lg  ">
                <Image src="/images/wechat.jpg" width={145} height={145} alt="WeChat QR Code" className="w-48 h-48" />
              </div>
              <p className="mt-4 text-lg font-semibold text-center">WECHAT</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            <li className="flex items-start">
              <FaFacebookSquare className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Facebook</h3>
                <a
                  href="https://www.facebook.com/areaflysolarwd"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/areaflysolarwd
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaInstagram className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Instagram</h3>
                <a
                  href="https://www.instagram.com/areaflysolar0701/"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com/areaflysolar0701/
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaYoutube className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Youtube</h3>
                <a
                  href="https://www.youtube.com/@AreaflySolar-v2f"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/@AreaflySolar-v2f
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Tele</h3>
                <a
                  href="tel:+8615017203259"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +86 15017203259
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Email</h3>
                <a
                  href="mailto:areaflysolar@163.com"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  areaflysolar@163.com
                </a>
              </div>
            </li>
            <li className="flex items-start col-span-1 md:col-span-2">
              <FaMapMarker className="text-primary text-2xl mt-1 mr-4" />
              <div>
                <h3 className=" text-2xl">Address</h3>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A003、005, first floor,Zone B, Yueyang Trade Mall, Yuexiu District, Guangzhou, Guangdong
                </a>
              </div>
            </li>
          </ul>
        </div></div></div>
  );
}