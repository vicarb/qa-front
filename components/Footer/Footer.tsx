// components/Footer/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 mt-0 py-8 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
