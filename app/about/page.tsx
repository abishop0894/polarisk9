import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import LeftRight from '../modules/components/cta/LeftRight';

export default function About() {
  return (
    <Page>
      <Hero title="About" backgroundImage='https://polarisk9.s3.us-east-1.amazonaws.com/heros/20MML008_AU_Vet_Med_Canine_Performance.jpg' />
      <LeftRight
        header="Quality Training You Can Trust"
        subText=" With years of experience working with law enforcement, Military Working Dogs, Sport K9s, and more, Jessie Vrooman has dedicated his life to building stronger and more effective K9 teams. At Polaris K9, LLC, we strive to build confident working dogs to handle any situation that may come their way through training like we fight. We provide services and training in Narcotics/Explosive Detection, Tracking, Bite Work, Personal Protection, Basic Obedience, and E-Collar. We ensure that every dog with which we have the honor to work receives the highest level of care and training. Let's bring out the best in your K9."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/ULPS-Dog-Training-AdobeStock_214124240-1080x675.jpg"
        imageAlt="Dog training session"
        ctaText="Get a Quote"
        ctaLink="/contact"
        headerColor="text-white"
        subTextColor="text-white"
        backgroundColor="bg-gradient-to-r from-gray-900 to-gray-800"
      />
      <LeftRight
        header="Meet Jessie Vrooman, Owner and Founder"
        subText="With over a decade of experience in the military and the K9 industry, Jessie has a variety of experience in the K9 world.  From working military working dogs, United States Secret Service missions, hosting training courses for law enforcement across the country, to being a instructor and supervisor of the Department of Defense Military Working Dog Handler Course."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/vrooman.png"
        imageAlt="Dog training session"
        ctaText="Contact Jessie"
        ctaLink="/contact"
        headerColor="text-white"
        subTextColor="text-white"
        backgroundColor="bg-black"
        reverse={true}
        objectTop={true}
      />
    </Page>
  );
}
