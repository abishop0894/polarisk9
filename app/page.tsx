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
  header="Meet The Founder"
  subText="Jessie Vrooman, the founder of Polaris K9, is a seasoned K9 trainer with over a decade of experience in the military and the K9 industry."
  ctaText="Learn More"
  ctaLink="/about"
  reverse={false} // Will show image on right
  headerColor="text-white"
  subTextColor="text-white"
/>
  <LeftRight
  imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/new+%E2%80%94+arrivals+(1).png"
  imageAlt="Check out our new arrivals"
  header="Check Out Our Merch"
  subText="We have a variety of merchandise available for purchase. Make sure to check out our new arrivals and see what we have to offer."
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

