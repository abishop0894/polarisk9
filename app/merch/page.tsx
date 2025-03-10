import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import ProductList from '../modules/components/merch/ProductList';

export default function MerchPage() {
  return (
    <Page>
      <Hero title="Merch" />
      <ProductList />
    </Page>
  );
}
