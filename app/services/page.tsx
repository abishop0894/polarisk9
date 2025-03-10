import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import LeftRight from '../modules/components/cta/LeftRight';

export default function ServicesPage() {
  return (
    <Page>
      <Hero title="Services" />
      <LeftRight
        header="One-on-One Training"
        subText="Transform your dog's behavior with our personalized training sessions. Our experienced trainers work directly with you and your dog to address specific challenges and build a strong foundation of obedience. Whether you're dealing with basic commands or complex behavioral issues, we'll create a tailored program to meet your needs."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/services/dog1.png"
        imageAlt="One-on-one dog training session"
        ctaText="Book Training"
        ctaLink="/contact"
        headerColor="text-white"
        subTextColor="text-white"
        backgroundColor="bg-black"
      />
      <LeftRight
        header="Group Classes"
        subText="Join our dynamic group training classes where your dog can learn essential skills while socializing with other dogs. Our structured group sessions provide a supportive environment for both handlers and their dogs to learn and grow together. Perfect for building confidence and reinforcing training in real-world scenarios."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/services/dog2.png"
        imageAlt="Group dog training class"
        ctaText="Join a Class"
        ctaLink="/contact"
        headerColor="text-white"
        subTextColor="text-white"
        backgroundColor="bg-gradient-to-r from-gray-900 to-gray-800"
        reverse={true}
      />
      <LeftRight
        header="Specialized Services"
        subText="From personal protection and K9 selection to professional boarding and advanced training, we offer a comprehensive range of specialized services. Our expertise in law enforcement and military dog training translates into exceptional results for civilian dogs. Whether you need boarding, protection training, or help selecting the perfect K9 partner, we've got you covered."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/services/dog-training-Tampa.jpg.webp"
        imageAlt="Specialized dog training"
        ctaText="Learn More"
        ctaLink="/contact"
        headerColor="text-white"
        subTextColor="text-white"
        backgroundColor="bg-black"
      />
    </Page>
  );
}
