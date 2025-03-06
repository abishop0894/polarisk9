import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute w-full h-full inset-0">
        <Image
          src="https://polarisk9.s3.us-east-1.amazonaws.com/hero.png" // Make sure to add your image to the public folder
          alt="Hero background"
          fill
          className="object-cover  h-full"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
             Elite K9 Training for Those Who Protect and Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 drop-shadow-md">
            Polaris delivers mission-critical canine training solutions for military and law enforcement units in the DMV area. Our battle-tested methodologies produce K9 assets with superior detection, apprehension, and tactical capabilities.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
           Request Training Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;