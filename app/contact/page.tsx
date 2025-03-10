import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import Contact from '../modules/components/forms/Contact';

export default function ContactPage() {
  return (
    <Page>
      <Hero title="Contact" backgroundImage='https://polarisk9.s3.us-east-1.amazonaws.com/heros/247739725_10161294631605558_4027226096542341256_n-2000-e68c6e17f3fc45afb6516117e706c52f.jpg' />
      <Contact />
    </Page>
  );
}
