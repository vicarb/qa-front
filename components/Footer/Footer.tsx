// components/Footer/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 mt-10 py-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
