import React from "react";

import {Logo1, Logo10, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9} from "@/app/modules/components/banners/ui/Logos";

import ScrollingBanner from "@/app/modules/components/banners/ui/ScrollingBanner";
import Image from "next/image";
const logos = [
  {
    key: "logo-1",
    logo: Logo1,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/images.svg",  
  },
  {
    key: "logo-2",
    logo: Logo2,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/logo.svg",
  },
  {
    key: "logo-3",
    logo: Logo3,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/Purina-logo.svg.svg",
  },
  {
    key: "logo-4",
    logo: Logo4,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/redlinelogo_495x.webp",
  },
  {
    key: "logo-5",
    logo: Logo5,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/images.svg",
  },
  {
    key: "logo-6",
    logo: Logo6,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/logo.svg",
  },
  {
    key: "logo-7",
    logo: Logo7,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/Purina-logo.svg.svg",
  },
  {
    key: "logo-8",
    logo: Logo8,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/redlinelogo_495x.webp",
  },
  {
    key: "logo-9",
    logo: Logo9,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/images.svg",
  },
  {
    key: "logo-10",
    logo: Logo10,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/logo.svg",
  },
   {
    key: "logo-11",
    logo: Logo1,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/images.svg",  
  },
  {
    key: "logo-12",
    logo: Logo2,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/logo.svg",
  },
  {
    key: "logo-13",
    logo: Logo3,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/Purina-logo.svg.svg",
  },
  {
    key: "logo-14",
    logo: Logo4,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/redlinelogo_495x.webp",
  }, {
    key: "logo-15",
    logo: Logo1,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/images.svg",  
  },
  {
    key: "logo-16",
    logo: Logo2,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/logo.svg",
  },
  {
    key: "logo-17",
    logo: Logo3,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/Purina-logo.svg.svg",
  },
  {
    key: "logo-18",
    logo: Logo4,
    src: "https://polarisk9.s3.us-east-1.amazonaws.com/logos/redlinelogo_495x.webp",
  },
];

export default function Component() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40 flex flex-col items-center justify-center gap-10">
     <h4 className="text-white text-center text-2xl font-bold">Proudly Affiliated With</h4>
      <ScrollingBanner shouldPauseOnHover gap="40px">
        {logos.map(({src, key}) => (
          <div key={key} className="flex items-center w-[100px] h-[100px]  justify-center text-foreground">
            <Image src={src} alt={key} width={100} height={100} className="object-cover"  />
          </div>
        ))}
      </ScrollingBanner>
    </section>
  );
}
