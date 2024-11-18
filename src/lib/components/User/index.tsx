'use client';

import type React from 'react';

import MobileUserBoard from './MobileUserBoard';
import Navbar from './Navbar';

const UserBoard: React.FC = () => {
  return (
    <div className="mt-20">
      {/* mobile */}
      <div className="block md:hidden">
        <MobileUserBoard />
      </div>

      {/* desktop */}
      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
};

export default UserBoard;
