import React, { useState } from 'react';
import RedDot from '../assets/pricing/red.png';
import GreenDot from '../assets/pricing/green.png';

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Start',
      monthlyPrice: 350,
      yearlyPrice: 4500,
      description:
        'The best and startup plan for all of you and anyone can easy to get in touch with us.',
      green: GreenDot,
      red: RedDot,
      website: 1,
      storage: '2GB',
      emails: 5,
      bandwidth: '1TB',
      cdn: '5GB',
      mysql: 5,
      subdomains: 5,
      ssl: 'Free',
      support: '24/7',
      uptime: '99.9%',
    },
    {
      name: 'Advance',
      monthlyPrice: 550,
      yearlyPrice: 6000,
      description:
        'The best and trending plan for all of you and anyone can most fastly track and touch with us.',
      green: GreenDot,
      red: RedDot,
      website: 3,
      storage: '5GB',
      emails: 10,
      bandwidth: '2TB',
      cdn: '10GB',
      mysql: 10,
      subdomains: 10,
      ssl: 'Free',
      support: '24/7',
      uptime: '99.9%',
    },
    {
      name: 'Premium',
      monthlyPrice: 750,
      yearlyPrice: 8500,
      description:
        'The wonderful and super plan for all of you and anyone VIP and fast in touch with us.',
      green: GreenDot,
      red: RedDot,
      website: 10,
      storage: '10GB',
      emails: 'Unlimited',
      bandwidth: 'Unlimited',
      cdn: '10GB',
      mysql: 'Unlimited',
      subdomains: 'Unlimited',
      ssl: 'Free',
      support: '24/7',
      uptime: '99.9%',
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>

        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          You can choose any plan for you in free way as your needs and feasible
          guidings as well. So hurry up and get with us.
        </p>

        {/* toggle pricing */}

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? 'bg-blue-800 ml-8' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>

          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* pricing cards */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div key={index} className="border py-10 md:px-6 px-4 rounded-lg">
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className="text-4xl mt-5 text-center text-secondary font-bold">
              {isYearly ? `LKR ${pkg.yearlyPrice}` : `LKR ${pkg.monthlyPrice}`}
              <span className="text-base text-tartiary">
                {' '}
                /{isYearly ? 'year' : 'month'}
              </span>
            </p>
            <ul className="mt-5 space-y-2 px-4">
              <li className="flex items-center justify-between">
                <span>{pkg.website} Website</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.storage} NVMe SSD Storage</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.emails} Email Accounts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.bandwidth} Bandwidth</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Free {pkg.cdn} CDN</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.mysql} MySQL Databases</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.subdomains} Subdomains</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.ssl} SSL Certificate</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.support} Support</span>
              </li>
              <li className="flex items-center justify-between">
                <span>{pkg.uptime} Uptime</span>
              </li>
            </ul>

            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
