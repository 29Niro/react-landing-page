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
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/company-register.webp',
      title: '"(Pvt) Ltd." Company Registration',
      description:
        'Establish your business with confidence through Devi Web’s expert company registration services. Our comprehensive solutions are designed to simplify the process, ensuring compliance with all legal requirements and regulations. From name reservation and document preparation to obtaining necessary licenses and registrations, we handle every detail with precision and professionalism. Let us guide you through the complexities of business formation, providing the support and expertise needed to lay a strong foundation for your company. Partner with Devi Web to navigate the registration process seamlessly and set your business on the path to success.',
      path: '/social-media',
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/graphics-design.webp',
      title: 'Graphic Designing',
      description:
        "Transform your brand’s visual identity with Devi Web’s premier graphic design services. Our team of talented designers is dedicated to creating stunning and impactful designs that capture your brand's essence and resonate with your audience. From logo creation and brand collateral to marketing materials and digital graphics, we craft visually compelling assets that elevate your brand presence. Let us bring your vision to life with innovative and customized design solutions that enhance your brand’s appeal and communicate your message effectively. Partner with Devi Web for graphic design that distinguishes your brand and leaves a lasting impression.",
      path: '/social-media',
    },
    {
      image:
        'https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/cctv-camera.webp',
      title: 'CCTV Installation & Maintenance',
      description:
        "Ensure the safety and security of your premises with Devi Web’s professional CCTV installation and maintenance services. Our team of experts specializes in designing and implementing customized surveillance solutions that meet your specific needs and budget. From residential homes and commercial establishments to industrial facilities and public spaces, we provide comprehensive CCTV solutions that enhance security and peace of mind. Whether you’re looking to deter theft, monitor activities, or safeguard your property, our CCTV systems offer reliable performance and advanced features to protect what matters most. Partner with Devi Web for expert CCTV installation and maintenance services that keep your property safe and secure around the clock.",
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
              <div className="py-2 px-6 my-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-72 rounded-lg object-cover"
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
