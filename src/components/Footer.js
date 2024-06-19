/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import American from '../assets/american.png';
import Master from '../assets/master.jpeg';
import Visa from '../assets/visa.png';
import Mastero from '../assets/mastero.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container mx-auto px-4 py-8 md:px-20 lg:px-20 bg-gray-800 ">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-3 mx-8">
            <h1 className="text-xl md:text-3xl font-bold">DEVI WEB</h1>
            <p className="text-gray-200">
              123, Laxapana Road,
              <br />
              Thonikkal, Vavuniya,
              <br />
              Sri Lanka.
              <br />
              Phone: +94 77 796 5608
              <br />
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Quick Links
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="/#" className="text-gray-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about-us" className="text-gray-200 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-200 hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-200 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Important Links
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a href="#" className="text-gray-200 hover:text-white">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 container mx-auto px-4 md:px-20 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="text-center md:text-left text-gray-400 col-span-1 md:col-span-1 mx-8">
            <h2 className="text-xl text-white">Join Our Newsletter</h2>
            <div className="flex flex-col md:flex-row items-center rounded-md mt-4 space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full focus:outline-none rounded-md bg-gray-800 text-white"
              />
              <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
            <p className="text-justify mt-2">
              Subscribe to our newsletter to get our latest news. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="text-center md:text-right text-gray-400 col-span-1 md:col-span-1 mx-8 flex flex-col justify-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 my-2">
              <img src={American} alt="american" className="h-8 w-auto" />
              <img src={Master} alt="master" className="h-8 w-auto" />
              <img src={Visa} alt="visa" className="h-8 w-auto" />
              <img src={Mastero} alt="mastero" className="h-8 w-auto" />
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 my-2">
              <p>Contact Us</p>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <p className="my-2">
              © 2024 All Rights Reserved. Designed by{' '}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                DEVI WEB
              </a>
            </p>{' '}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
