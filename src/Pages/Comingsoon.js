import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Comingsoon = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <div className="mb-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-1/3 p-8 mx-auto bg-black rounded-xl"
          />
        </div>
        <span className="block text-lg">Our Website is</span>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-blue-500">COMING</span> SOON
        </h1>
        <button
          onClick={() => {
            window.location.href = '/';
          }}
          className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
        <p className="mb-8">
          Please check back later, We are working hard to get everything just
          right.
        </p>
        <ul className="flex justify-center items-center space-x-2 mb-8">
          <li className="text-center">
            <span className="block text-2xl font-bold">54</span>days
          </li>
          <li className="text-2xl font-bold">:</li>
          <li className="text-center">
            <span className="block text-2xl font-bold">10</span>Hrs
          </li>
          <li className="text-2xl font-bold">:</li>
          <li className="text-center">
            <span className="block text-2xl font-bold">47</span>Min
          </li>
          <li className="text-2xl font-bold">:</li>
          <li className="text-center">
            <span className="block text-2xl font-bold">
              {formatTime(seconds)}
            </span>
            Sec
          </li>
        </ul>
        <div className="mb-8">
          <label className="block text-left mb-2 text-gray-700">
            Subscribe to get notified!
          </label>
          <div className="flex space-x-2">
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
            />
            <Link
              to="#"
              className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="#">
              <i className="fab fa-facebook-f text-xl text-blue-600"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-instagram text-xl text-pink-600"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-twitter text-xl text-blue-400"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-pinterest-p text-xl text-red-600"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-linkedin text-xl text-blue-700"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comingsoon;
