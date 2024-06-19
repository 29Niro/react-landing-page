import React from 'react';

function GridComponent() {
  const data = [
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
    {
      title: 'Launch fast your great products',
      description:
        'Launch fast your great products. Create a landing page for your business or project and generate more leads!',
      image: 'https://placehold.co/600x400',
    },
  ];
  return (
    <div className='py-8'>
      <h1 className="text-2xl font-bold text-center my-4">
        Launch fast your great products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.image}
              alt="imag"
              className="w-96 h-auto rounded-lg"
            />
            <h1 className="text-2xl font-bold my-2">{item.title}</h1>
            <p>{item.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded w-40">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridComponent;
