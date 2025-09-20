
import Video from "../Video";
import { useTranslations} from 'next-intl';
export function VideoDemo() {
    const v = useTranslations('Video');
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
      <div className=" absolute left-0 top-0 h-full w-full inset-0 overflow-hidden  bg-black/80 flex flex-col items-center justify-center">
        <div className=" max-w-[950] mx-auto  text-center p-5 ">
          <div className="h-full w-full  overflow-hidden text-ellipsis">
            {v.rich("content", {
              h1: (chunks) => (
                <h1 className="text-white text-2xl mb-12 md:text-5xl/snug font-bold md:mb-14">
                  {chunks}
                </h1>
              ),
              p: (chunks) => (
                <p className="font-mono text-white mb-2.5">{chunks}</p>
              ),
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
