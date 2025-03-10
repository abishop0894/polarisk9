import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import LeftRight from '../modules/components/cta/LeftRight';

export default function About() {
  return (
    <Page>
      <Hero title="About" />
      <LeftRight
        header="About Polaris K9"
        subText="At Polaris K9, we specialize in comprehensive dog training solutions that transform challenging behaviors into reliable obedience. Our experienced trainers work with dogs of all breeds and ages, utilizing proven methods that prioritize both effectiveness and the well-being of your canine companion."
        imageSrc="https://polarisk9.s3.us-east-1.amazonaws.com/about/about.png"
        imageAlt="Dog training session"
        
      />
    </Page>
  );
}
