import React, { useState } from 'react';
import Modal from './Modal';

function OurServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const services = [
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/web.png',
      title: 'Web Development',
      description:
        "At Devi Web, we specialize in crafting bespoke web solutions that drive business growth and enhance digital presence. Our web development services encompass everything from responsive website designs to complex e-commerce platforms, ensuring robust functionality and a seamless user experience. Whether you're a startup or an established enterprise, our tailored solutions are designed to meet your specific needs and help you thrive in the digital world!",
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/mobile.jpg',
      title: 'Mobile Development',
      description:
        'Empower your business with high-performance mobile applications designed by Devi Web. Our mobile development team excels at creating intuitive, user-friendly apps for both iOS and Android platforms. We focus on integrating the latest technological advancements to deliver mobile apps that not only look great but also provide a rich, interactive experience. Whether it’s enhancing customer engagement or streamlining operations, our mobile apps help you achieve your business goals on the go!',
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/marketing.png',
      title: 'Digital Marketing',
      description:
        'Elevate your brand with Devi Web’s comprehensive digital marketing services. Our strategies are crafted to increase visibility, engage audiences, and drive conversions. From SEO and content marketing to social media campaigns and PPC advertising, we leverage a variety of tools and techniques to create a strong digital footprint for your business. Let us help you navigate the digital landscape and connect with your target audience effectively, optimizing your ROI and boosting your overall business performance!',
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/social-media-manage.jpg',
      title: 'Social Media Management',
      description:
        'Harness the power of social media with Devi Web’s expert social media management services. Our team of social media specialists creates customized strategies to enhance your brand presence, engage your audience, and drive meaningful interactions. From content creation and community management to analytics and reporting, we handle every aspect of your social media presence, ensuring your brand stands out in the crowded digital landscape. Let us help you build a strong social media presence that drives results and fosters long-term relationships with your customers!',
      path: '/social-media',
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/social-media-manage.jpg',
      title: '"(Pvt) Ltd." Company Registration',
      description:
        '',
      path: '/social-media',
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="py-8 px-8">
        <h1 className="text-4xl font-bold text-center my-4">OUR SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col border rounded-lg shadow-md"
            >
              <div className="py-2 px-4 my-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-auto rounded-lg object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold my-2 mx-4">{service.title}</h1>
              <p className="h-56 mx-4 text-justify overflow-hidden">
                {service.description}
              </p>
              <button
                onClick={() => openModal(service)}
                className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 my-2 mx-4 rounded w-40"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedService.title}
        description={selectedService.description}
        path={selectedService.path}
      />
    </>
  );
}

export default OurServices;
