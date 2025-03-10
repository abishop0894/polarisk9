'use client'
import ProductCard from './ui/ProductCard';

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  href: string;
  imageAlt?: string;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: "https://polarisk9.s3.us-east-1.amazonaws.com/merch/merch1.png",
    title: "Training Equipment",
    href: "/contact",
    imageAlt: "Dog training equipment collection"
  },
  {
    id: 2,
    imageSrc: "https://polarisk9.s3.us-east-1.amazonaws.com/merch/merch2.png",
    title: "Apparel",
    href: "/contact",
    imageAlt: "Polaris K9 branded apparel"
  },
  {
    id: 3,
    imageSrc: "https://polarisk9.s3.us-east-1.amazonaws.com/merch/merch3.png",
    title: "Accessories",
    href: "/contact",
    imageAlt: "Dog accessories and gear"
  }
];

const ProductList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop Our Products
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Quality equipment and gear for your training needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              href={product.href}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
