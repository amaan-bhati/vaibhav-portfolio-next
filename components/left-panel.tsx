"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div >
        <div className="">
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/dp.png"
            width={120}
            height={120}
            blurDataURL="/dp.png"
          />
        </div>

        {/* Text Container */}
        <div className="mt-1">
          <div className="text-xl font-bold text-primary">
            {siteConfig.title}
          </div>
          <h1 className="mt-1 text-4xl font-bold">{siteConfig.creator}</h1>

          <p className="text-l mt-1  text-neutral-500 ">{siteConfig.bio}</p>
        </div>
        {/* Buttons Container */}
        <div className="md-hidden">
          <div className="flex items-center gap-3 mt-6 lg-hidden">
            <a
              href={`https://drive.google.com/file/d/1rJNGaVu30-4Ts_DVbnx1KaGtwu6f2WeH/view?usp=sharing`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 "
            >
              {siteConfig.location}
            </a>
            <a
              href={`https://amaanbhati.tech`}
              className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-200 dark:border-neutral-800 "
            >
              Visit Portfolio
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
