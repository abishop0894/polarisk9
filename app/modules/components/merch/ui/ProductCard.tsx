'use client'
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  href: string;
  imageAlt?: string;
}

const ProductCard = ({ imageSrc, title, href, imageAlt = '' }: ProductCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <Link href={href} className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-6 flex flex-col items-start">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <Link
          href={href}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
