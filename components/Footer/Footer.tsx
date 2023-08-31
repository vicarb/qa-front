import React from 'react';
import Link from 'next/link'; // If you are using Next.js for navigation

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 mt-0 py-8 text-center text-white">
      <div className="container mx-auto">
        <p className="mb-4 text-xl font-semibold">&copy; {new Date().getFullYear()} Share your interview questions with us!</p>
        <div className="flex justify-center">
          {/* Styled Navigation buttons */}
          <Link href="/">
            <span className="mx-2 py-4 px-4 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="mx-2 py-2 px-4 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="mx-2 py-2 px-4 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white">
              Contact
            </span>
          </Link>
          <Link href="/faq">
            <span className="mx-2 py-2 px-4 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white">
              FAQ
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
