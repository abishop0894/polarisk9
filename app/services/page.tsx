import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import Services from '../modules/components/services/Services';

export default function ServicesPage() {
  return (
    <Page>
      <Hero title="Services" />
      <Services />
    </Page>
  );
}
