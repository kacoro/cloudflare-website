"use client"
import Video from "../Video";
import { useTranslations} from 'next-intl';
import Image from "next/image";
import { useState } from "react";
export function VideoDemo() {
    const v = useTranslations('Video');
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative bg-background  h-screen w-full">
      <Video
        src="/videos/f1080p.webm"
        alt="Solar energy in action"
        autoPlay
        muted
        loop
        controls={false}
        className="object-cover h-full w-full"
      >
        <source src="/videos/f1080p.webm" type="video/webm" />
        <source src="/videos/f720p.mp4" type="video/mp4" />
      </Video>
      <div className=" absolute left-0 top-0 h-full w-full inset-0 overflow-hidden
       bg-black/80 flex flex-col items-center justify-center">
        <div className=" max-w-[950] mx-auto  text-center p-5 ">
          <div className="h-full w-full  overflow-hidden text-ellipsis">
            {v.rich("content", {
              h1: (chunks) => (
                <h1 className="text-white text-lg sm:text-2xl mb-6 sm:mb-12 md:text-5xl/snug font-bold md:mb-14">
                  {chunks}
                </h1>
              ),
              p: (chunks) => (
                <p className="font-mono text-xs sm:text-base text-white mb-2.5">{chunks}</p>
              ),
            })}
          </div>
        </div>
        {/* 播放按钮 */}
          {/* <button 
            onClick={openModal}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={v('playButton') || 'Play video'}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 mr-2" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-xl font-medium">
              {v('watchVideo') || 'Watch Video'}
            </span>
          </button> */}
          <Image onClick={openModal}
            src="/images/video.png"
            alt="logo"
            width={295}
            height={166}
            className="w-40 md:w-[295px] md:mt-14"
          />
      </div>
      
      {/* 视频弹窗 */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            
            <Video
              src="/videos/f1080p.webm"
              alt="Solar energy in action"
              autoPlay
              controls
              className="w-full rounded-lg shadow-2xl"
            >
              <source src="/videos/f1080p.webm" type="video/webm" />
              <source src="/videos/f720p.mp4" type="video/mp4" />
            </Video>
          </div>
        </div>
      )}
    </section>
  );
}
