'use client'
import Image from 'next/image';

interface HeroProps {
  title: string;
  backgroundImage?: string;
}

const Hero = ({ 
  title, 
  backgroundImage = "https://polarisk9.s3.us-east-1.amazonaws.com/hero/hero.png" 
}: HeroProps) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
