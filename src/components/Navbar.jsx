import { ArrowRight, MessageSquare } from 'lucide-react';
import React from 'react'
import WatiButton from './WatiButton';

const GREEN = "#00E676";
const BLACK = "#111111";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 mx-auto bg-white sticky top-0 z-50 border-b border-gray-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            background: GREEN,
            width: 36,
            height: 36,
            border: `2px solid ${BLACK}`,
            borderRadius: 8,
          }}
        >
          <MessageSquare size={19} color={BLACK} strokeWidth={2.5} />
        </div>
        <span
          className="text-2xl font-bold tracking-tight"
          style={{ color: BLACK, letterSpacing: "-0.5px" }}
        >
          wati
        </span>
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