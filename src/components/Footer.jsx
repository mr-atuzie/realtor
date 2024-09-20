import React from "react";
import { GiQueenCrown } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-white">
            <GiQueenCrown size={30} />
          </div>
          <h4 className="text-2xl font-semibold">The Grand Stage</h4>
        </div>

        {/* Column 2: About Section */}
        <div>
          <h2 className="lg:text-xl font-semibold mb-2 lg:mb-4">About Us</h2>
          <p className="text-sm">
            Welcome to The Grand Stage, where talented contestants showcase
            their skills and compete for exciting cash prizes. Join our
            community to vote, participate, and support your favorite
            contestants.
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h2 className="lg:text-xl font-semibold mb-2 lg:mb-4">Quick Links</h2>
          <ul className=" text-sm">
            <li className="mb-2">
              <a href="#home" className="hover:text-purple-500">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#contestants" className="hover:text-purple-500">
                Contestants
              </a>
            </li>
            <li className="mb-2">
              <a href="#how-it-works" className="hover:text-purple-500">
                How It Works
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-purple-500">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#faq" className="hover:text-purple-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2 lg:mb-4">Stay Connected</h2>
          <p className="text-sm">
            Follow us on social media to stay updated with the latest news.
          </p>

          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-purple-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Facebook SVG Path */}
                <path d="M22.675 0h-21.35C.591 0 0 .591 0 1.325v21.351C0 23.409.591 24 1.325 24h11.495v-9.294H9.695v-3.622h3.125V8.432c0-3.099 1.891-4.788 4.655-4.788 1.325 0 2.462.099 2.794.143v3.236h-1.916c-1.504 0-1.796.715-1.796 1.763v2.318h3.592l-.468 3.622h-3.124v9.294h6.124c.733 0 1.324-.591 1.324-1.324V1.325C24 .591 23.409 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-purple-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Twitter SVG Path */}
                <path d="M24 4.557a9.914 9.914 0 01-2.828.775 4.933 4.933 0 002.165-2.725 9.864 9.864 0 01-3.127 1.196 4.922 4.922 0 00-8.384 4.482 13.959 13.959 0 01-10.141-5.146 4.908 4.908 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.924 4.924 0 003.946 4.827 4.927 4.927 0 01-2.224.085 4.927 4.927 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.786-.023-1.175-.068a13.943 13.943 0 007.557 2.212c9.054 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 002.457-2.548z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:text-purple-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Instagram SVG Path */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.407a4.92 4.92 0 011.684 1.103 4.918 4.918 0 011.104 1.684c.168.457.351 1.257.407 2.427.059 1.267.071 1.647.071 4.851s-.012 3.584-.071 4.85c-.056 1.17-.24 1.97-.407 2.427a4.918 4.918 0 01-1.103 1.684 4.92 4.92 0 01-1.684 1.104c-.457.168-1.257.351-2.427.407-1.267.059-1.647.071-4.85.071s-3.584-.012-4.851-.071c-1.17-.056-1.97-.24-2.427-.407a4.92 4.92 0 01-1.684-1.103 4.918 4.918 0 01-1.104-1.684c-.168-.457-.351-1.257-.407-2.427-.059-1.267-.071-1.647-.071-4.85s.012-3.584.071-4.851c.056-1.17.24-1.97.407-2.427a4.918 4.918 0 011.103-1.684 4.92 4.92 0 011.684-1.104c.457-.168 1.257-.351 2.427-.407 1.267-.059 1.647-.071 4.85-.071m0-2.163c-3.259 0-3.667.012-4.947.072-1.263.059-2.134.27-2.88.573a7.104 7.104 0 00-2.561 1.66 7.09 7.09 0 00-1.661 2.561c-.303.745-.514 1.617-.573 2.88-.06 1.279-.072 1.687-.072 4.947s.012 3.667.072 4.947c.059 1.263.27 2.134.573 2.88a7.089 7.089 0 001.66 2.561 7.098 7.098 0 002.561 1.661c.745.303 1.617.514 2.88.573 1.279.06 1.687.072 4.947.072s3.667-.012 4.947-.072c1.263-.059 2.134-.27 2.88-.573a7.104 7.104 0 002.561-1.66 7.089 7.089 0 001.661-2.561c.303-.745.514-1.617.573-2.88.06-1.279.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.059-1.263-.27-2.134-.573-2.88a7.089 7.089 0 00-1.66-2.561 7.098 7.098 0 00-2.561-1.661c-.745-.303-1.617-.514-2.88-.573-1.279-.06-1.687-.072-4.947-.072z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 mt-8 border-t border-gray-700">
        <p className="text-xs lg:text-sm">
          © 2024 The Grand Stage. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
