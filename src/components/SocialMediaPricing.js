import React from 'react';

const SocialMediaPricing = () => {
  const packages = [
    {
      title: 'Basic',
      oldPrice: '10000 Rs/month',
      discount: '40% off',
      price: '6000 Rs',
      features: [
        'Custom Designing',
        '6 posts per Week (1 page include 1 product)',
        'WhatsApp Group or Facebook page POST',
        'One time re-edit',
      ],
    },
    {
      title: 'Standard',
      oldPrice: '20000 Rs/month',
      discount: '50% off',
      price: '10000 Rs',
      features: [
        'Custom Designing',
        '10 posts per Week (1 page may include 2 products)',
        'WhatsApp Group and Facebook page POST',
        'One time re-edit',
        'Monthly basic analytics report',
      ],
    },
    {
      title: 'Premium',
      oldPrice: '40000 Rs/month',
      discount: '25% off',
      price: '30000 Rs',
      features: [
        'Custom Designing',
        '20 posts per Week (1 page may include 4 products)',
        'WhatsApp Group and Facebook page POST and Twitter',
        'One time re-edit',
        'Monthly Advanced analytics report',
        'Monthly one video for TikTok',
        'Post Boosting',
        '100 users SMS marketing',
        'Priority support',
      ],
    },
  ];

  // const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="md:px-14 p-4 max-w-7xl mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>

        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          You can choose any plan for you in free way as your needs and feasible
          guidings as well. So hurry up and get with us.
        </p>

        {/* toggle pricing
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
        </div> */}
      </div>

      {/* pricing cards */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-lg shadow-gray-500 flex flex-col items-between justify-between"
          >
            
            <div>
              
              <h3 className="text-3xl font-bold text-center text-primary">
                {pkg.title}
              </h3>
              <p className="text-3xl text-red-600 text-tartiary text-center my-5">{pkg.discount}</p>
              <p className="text-4xl mt-5 text-center text-secondary font-bold">
                {pkg.price}
                <span className="text-base text-tartiary"> /month</span>
              </p>
              <p className="text-2xl text-center line-through text-black-400">
                {pkg.oldPrice}
              </p>
              <ul className="mt-5 space-y-2 px-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

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
};

export default SocialMediaPricing;
