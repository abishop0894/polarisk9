import Page from '../modules/components/layout/Page';
import Hero from '../modules/components/hero/Hero';
import ProductList from '../modules/components/merch/ProductList';

export default function MerchPage() {
  return (
    <Page>
      <Hero title="Merch" backgroundImage='https://polarisk9.s3.us-east-1.amazonaws.com/merch/hoodie.png' />
      <ProductList />
    </Page>
  );
}
