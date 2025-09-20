"use client";

import React, { ReactNode, useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  alt?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
  className?: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
  playsInline?: boolean;
  lazy?: boolean;
  children?: ReactNode;
}

const Video: React.FC<VideoProps> = ({
  src,
  alt = "",
  autoPlay = false,
  muted = true, // 默认静音，提高自动播放成功率
  loop = false,
  controls = true,
  preload = "metadata",
  className = "",
  poster,
  width,
  height,
  playsInline = true,
  lazy = true,
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 视频属性配置
  const videoProps = {
    muted, // 大多数浏览器要求静音才能自动播放
    loop,
    controls,
    preload: lazy ? "none" : preload, // 懒加载时初始不加载内容
    poster,
    width,
    height,
    playsInline,
    className: `w-full h-full ${className}`,
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // 处理懒加载
    if (lazy) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoElement) {
              // 当视频进入视口时，开始加载
              videoElement.preload = preload;
              
              // 如果设置了自动播放，尝试播放
              if (autoPlay) {
                // 添加一个小延迟以确保视频元素已正确加载
                setTimeout(() => {
                  videoElement.play()
                    .then(() => {
                      console.log("Video autoplay started successfully");
                    })
                    .catch((error) => {
                      console.warn("Video autoplay failed:", error);
                      // 自动播放失败时，如果静音未设置，尝试静音播放
                      if (!muted) {
                        videoElement.muted = true;
                        videoElement.play()
                          .then(() => {
                            console.log("Video autoplay started with mute");
                          })
                          .catch((error) => {
                            console.warn("Video autoplay failed even with mute:", error);
                          });
                      }
                    });
                }, 100);
              }
              observer.unobserve(videoElement);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    } 
    // 非懒加载情况
    else if (autoPlay) {
      videoElement.preload = preload;
      // 添加一个小延迟以确保视频元素已正确加载
      setTimeout(() => {
        videoElement.play()
          .then(() => {
            console.log("Video autoplay started successfully");
          })
          .catch((error) => {
            console.warn("Video autoplay failed:", error);
            // 自动播放失败时，如果静音未设置，尝试静音播放
            if (!muted) {
              videoElement.muted = true;
              videoElement.play()
                .then(() => {
                  console.log("Video autoplay started with mute");
                })
                .catch((error) => {
                  console.warn("Video autoplay failed even with mute:", error);
                });
            }
          });
      }, 100);
    }
  }, [autoPlay, lazy, preload, muted]);

  return (
    <div className="relative w-full h-full">
      <video 
        ref={videoRef}
        {...videoProps}
      >
        {children ? children :( 
        <>
        <source src={src} type="video/mp4" />
        {alt || "Your browser does not support the video tag."}
        </>
        )}
        
      </video>
    </div>
  );
};

export default Video;