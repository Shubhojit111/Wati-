import { ArrowRight, MessageSquare } from 'lucide-react';
import React from 'react'
import WatiButton from './WatiButton';

const GREEN = "#00E676";
const BLACK = "#111111";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3 mx-auto bg-white sticky top-0 z-50 border-b border-gray-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://www.wati.io/wp-content/uploads/2023/03/wati-logo-1.svg" alt="" className='h-12 w-auto' />
      </div>

      {/* Nav Actions */}
      <div className="flex justify-center gap-2">
          <WatiButton variant="outline">
            Pricing
          </WatiButton>
          
          <WatiButton variant="outline">
            Book Demo
          </WatiButton>

          <WatiButton variant="primary">
            Try for Free
          </WatiButton>
        </div>
    </nav>
  );
}

export default Navbar