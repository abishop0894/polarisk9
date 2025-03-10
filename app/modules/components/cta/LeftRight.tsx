"use client"
import React from 'react';
import Image from 'next/image';

interface LeftRightProps {
  imageSrc: string;
  imageAlt: string;
  header: string;
  subText: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
  backgroundColor?: string;
  imageShadow?: string;
  headerColor?: string;
  subTextColor?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectTop?: boolean;
}

export default function LeftRight({
  imageSrc,
  imageAlt,
  header,
  subText,
  ctaText,
  ctaLink,
  reverse = false,
  backgroundColor = 'transparent',
  imageShadow = 'shadow-lg',
  headerColor = 'text-gray-900',
  subTextColor = 'text-gray-600',
  objectFit = 'cover',
  objectTop
}: LeftRightProps) {
  return (
    <div className={`${backgroundColor} px-4 py-16`}>
      <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col md:grid-cols-2' : ''}`}>
        {/* Image */}
        <div className={`relative w-full h-[400px] ${reverse ? 'md:order-last' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`rounded-lg ${objectTop && 'lg:object-top'} ${imageShadow} object-${objectFit}`}
         
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start space-y-6">
            <hr className='w-1/2 border-white'/>
          <h2 className={`text-3xl md:text-4xl font-bold ${headerColor}`}>
            {header}
          </h2>
          <p className={`text-lg ${subTextColor}`}>
            {subText}
          </p>
          <a
            href={ctaLink}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}