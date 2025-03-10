import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import Contact from '../modules/components/forms/Contact';

export default function ContactPage() {
  return (
    <Page>
      <Hero title="Contact" />
      <Contact />
    </Page>
  );
}
