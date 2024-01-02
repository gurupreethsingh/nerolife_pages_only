// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              Address
            </h3>
            <p className="text-gray-300 text-center md:text-left">
              #17, KIRLOSKER LAYOUT, SAPTAGIRI
            </p>
            <p className="text-gray-300 text-center md:text-left">
              BANGALORE, IN.
              <br/>PIN - 560073
            </p>
            <p className="text-gray-300 text-center md:text-left">
              CONTACT - +91 9740619310
            </p>
          </div>

          {/* Website Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              Website
            </h3>
            <ul className="list-none p-0 text-center md:text-left">
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  HOME
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  ABOUT US
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  STORIES
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              Social Media
            </h3>
            <ul className="list-none p-0 text-center md:text-left">
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  Facebook
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  Twitter
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy/Disclaimer Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              Legal
            </h3>
            <ul className="list-none p-0 text-center md:text-left">
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="text-gray-300">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
