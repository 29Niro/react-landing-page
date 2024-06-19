import React, { useEffect, useState, useRef } from 'react';

function AboutUs() {
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const boxCount = 4;
          const interval = 1000; // Time interval between each box animation

          const revealBoxes = (index) => {
            if (index < boxCount) {
              setTimeout(() => {
                setVisibleBoxes((prevVisibleBoxes) => [
                  ...prevVisibleBoxes,
                  index,
                ]);
                revealBoxes(index + 1);
              }, interval);
            }
          };

          revealBoxes(0);
        } else {
          setVisibleBoxes([]); // Reset the visible boxes when out of view
        }
      },
      { threshold: 0.1 } // Lower the threshold for better visibility on mobile
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const boxContents = [
    {
      title: 'Our Mission',
      text: 'To empower businesses of all sizes to unlock their full potential through technology. We believe that the right set of digital tools, when effectively applied, can revolutionize business operations, reduce costs, and enhance efficiencies.',
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to be the market leader in the industry, providing innovative solutions that drive business growth and success. We aim to be the go-to partner for businesses looking to transform their digital landscape and achieve their goals.',
    },
    {
      title: 'Why Choose Us',
      text: 'We offer unparalleled quality and service, ensuring that our clients receive the best solutions tailored to their unique needs. Our team of experts is committed to delivering excellence in every project, from concept to completion.',
    },
    {
      title: 'Our Values',
      text: 'Integrity, commitment, and excellence are at the core of our values. We believe in building strong relationships with our clients, based on trust and transparency. Our values guide us in everything we do, ensuring that we deliver the highest standards of service.',
    },
  ];

  return (
    <div
      ref={aboutRef}
      className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-100"
    >
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-5xl font-bold text-center my-6 text-gray-800 animate-fade-in">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-bold text-justify my-4 text-blue-600 animate-fade-in">
            At Devi Web, we are not just software developers; we are innovators
            committed to delivering cutting-edge solutions that drive success.
            Founded by a passionate team of technology enthusiasts, we have
            always been driven by the desire to solve complex business
            challenges through creative digital solutions.
          </p>
        </div>
        <img
          src="https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/about.png"
          alt="About Us"
          className="w-full animate-fade-in"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-12 p-4">
        {boxContents.map((content, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-500 bg-white p-4 rounded-md shadow-lg ${
              visibleBoxes.includes(index)
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600">
              {content.title}
            </h2>
            <p className="text-gray-700 text-xl">{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
