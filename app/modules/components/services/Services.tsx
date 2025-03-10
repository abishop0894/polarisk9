'use client'
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    title: "One-on-One Training",
    description: "",
    imageUrl: "https://polarisk9.s3.us-east-1.amazonaws.com/services/dog1.png",
    altText: "Personal trainer working with a client"
  },
  {
    id: 2,
    title: "Group Classes",
    description: "",
    imageUrl: "https://polarisk9.s3.us-east-1.amazonaws.com/services/dog2.png",
    altText: "Group fitness class in action"
  },
  {
    id: 3,
    title: "Boarding, Personal Protection, K9 Selection, and More",
    description: "",
    imageUrl: "https://polarisk9.s3.us-east-1.amazonaws.com/services/dog-training-Tampa.jpg.webp",
    altText: "Nutrition consultation session"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive K9 training solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-[250px] relative">
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  fill
                  className='object-cover object-top'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 mb-6 flex-grow">
                    {item.description}
                  </p>
                )}
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Dog&apos;s Behavior?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
