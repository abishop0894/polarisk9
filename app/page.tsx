import Page from "@/app/modules/components/layout/Page";
import Hero from "@/app/modules/components/layout/Hero";
import LeftRight from "@/app/modules/components/cta/LeftRight";
import ScrollingBannerComp from "@/app/modules/components/banners/ScrollingBannerComp";
import { CarouselDemo } from "@/app/modules/components/carousel/CarouselComp";
import Contact from "@/app/modules/components/forms/Contact";
import Services from "@/app/modules/components/services/Services";
export default function Component() {
  return (

    <Page>
     <Hero />
     <ScrollingBannerComp />
     <Services />
     <LeftRight
  imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/vrooman.png"
  imageAlt="Description of the image"
  header="Your Main Heading"
  subText="Your descriptive text goes here. Make it engaging and informative."
  ctaText="Get Started"
  ctaLink="/about"
  reverse={false} // Will show image on right
  headerColor="text-white"
  subTextColor="text-white"
/>
  <LeftRight
  imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/new+%E2%80%94+arrivals+(1).png"
  imageAlt="Description of the image"
  header="Your Main Heading"
  subText="Your descriptive text goes here. Make it engaging and informative."
  ctaText="Get Started"
  ctaLink="/merch"
  reverse={true} 
  backgroundColor="bg-[#5f5d57]"
  imageShadow="none"
  headerColor="text-white"
  subTextColor="text-white"
/>
<CarouselDemo />
<Contact />
    </Page>
  );
}

