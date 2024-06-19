import React from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import TypewriterComponent from 'typewriter-effect';

function WebHosting() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(https://ddtwfnehtvilwpusmflk.supabase.co/storage/v1/object/public/image_assets/host-background.png)`,
        }}
        className="flex items-center justify-center h-screen bg-blue-500"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white animate-fade-in">
            Welcome to Our Hosting Service
          </h1>
          {/* <p className="mt-4 text-2xl text-white animate-slide-in">
            Reliable, Fast, and Secure Hosting
          </p> */}
          <div className="mt-6 text-white text-2xl font-semibold">
            <TypewriterComponent
              options={{
                strings: ['Reliable, Fast, and Secure Hosting'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <button
            onClick={() => {
              window.location.href = '#pricing';
            }}
            className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-100 transition duration-300 animate-bounce"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default WebHosting;
