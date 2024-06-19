import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import Logo from '../assets/Logo.png';

function HeroComponent() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/hero-background.png)`,
      }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
      <div className="relative text-center z-10 p-4">
        {/* <h1 className="text-6xl font-bold shine-text">Welcome to DEVI WEB</h1> */}
        <img src={Logo} alt="logo" className="w-48 sm:w-64 md:w-96 mx-auto" />
        <div className="mt-6 text-white text-lg sm:text-2xl font-semibold">
          <TypewriterComponent
            options={{
              strings: ['Reliable and Secure Business Solutions'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <button
          onClick={() => {
            window.location.href = '/#about-us';
          }}
          className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition duration-300 animate-bounce"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroComponent;
