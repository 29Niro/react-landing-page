import React, { useState, useEffect } from 'react';

const technologyCategories = [
  {
    name: 'Frontend',
    technologies: [
      'html',
      'css',
      'sass',
      'tailwind',
      'react',
      'redux',
      'flutter',
    ],
  },
  {
    name: 'Backend',
    technologies: ['express', 'nodejs', 'spring', 'nestjs'],
  },
  {
    name: 'Databases',
    technologies: ['mongodb', 'mysql', 'postgres', 'firebase'],
  },
  {
    name: 'Tools',
    technologies: ['figma', 'ai', 'postman', 'git', 'github', 'docker'],
  },
  { name: 'Languages', technologies: ['c', 'java', 'py', 'js', 'dart'] },
  { name: 'Cloud', technologies: ['linux', 'aws', 'azure'] },
];

function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [imageSrc, setImageSrc] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const selectedTechnologies = technologyCategories
      .filter(
        (category) =>
          selectedCategory === 'All' || selectedCategory === category.name
      )
      .flatMap((category) => category.technologies)
      .join(',');

    setImageSrc(`https://skillicons.dev/icons?i=${selectedTechnologies}`);
  }, [selectedCategory]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const renderButtons = () => (
    <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0 mb-4">
      <button
        className={`${
          selectedCategory === 'All' ? 'bg-blue-800 text-white' : 'bg-gray-300'
        } px-4 py-2 rounded`}
        onClick={() => setSelectedCategory('All')}
      >
        All
      </button>
      {technologyCategories.map(({ name }) => (
        <button
          key={name}
          className={`${
            selectedCategory === name ? 'bg-blue-800 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded`}
          onClick={() => setSelectedCategory(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );

  const renderDropdown = () => (
    <div className="mb-4 px-8">
      <label htmlFor="category-select" className="sr-only">
        Select Category
      </label>
      <select
        id="category-select"
        className="block w-full bg-gray-300 px-4 py-2 rounded focus:outline-none"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="All">All</option>
        {technologyCategories.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="container mx-auto px-4 lg:px-20 py-10 my-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Technologies</h2>
        <p className="text-gray-600 py-2">
          Explore the technologies we work with to build innovative solutions
          for our clients.
        </p>
      </div>

      {isMobileView ? renderDropdown() : renderButtons()}

      <div className="flex justify-center mb-4">
        <p>
          <a href="https://skillicons.dev">
            <img
              className={`max-w-full ${isMobileView ? 'h-auto' : ''}`}
              src={imageSrc}
              alt=""
            />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Technologies;
