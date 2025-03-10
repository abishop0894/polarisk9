"use client";

import { Carousel } from "./ui/Carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Polaris K9 Owner and Founder, Jessie Vrooman, has worked countless K9s from around the world.",
      button: "Explore Component",
      src: "https://polarisk9.s3.us-east-1.amazonaws.com/vroomanBack.png",
    },
    {
      title: "Our courses are hands-on with instruction that builds the K9's and handler's confidence to take on any scenario.",
      button: "Explore Component",
      src: "https://polarisk9.s3.us-east-1.amazonaws.com/training.png",
    },
    {
      title: "We're honored to be trusted by LEO, MWD, and civilian handlers to work with them and their K9 partners.",
      button: "Explore Component",
      src: "https://polarisk9.s3.us-east-1.amazonaws.com/group.png",
    },
    {
      title: "Owner and Founder, Jessie Vrooman, with sweet pea.",
      button: "Explore Component",
      src: "https://polarisk9.s3.us-east-1.amazonaws.com/vroomanAndDog.png",
    },
  
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
