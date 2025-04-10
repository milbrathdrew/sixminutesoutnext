import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-medium-dark text-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Image src="/six_minutes_out_logo_black_fill.png" alt="Six Minutes Out PR" width={40} height={40} />
              <span className="ml-2 text-xl font-heading">Six Minutes Out PR</span>
            </div>
            <p className="mt-2 text-sm text-gray-300 max-w-md">
              Strategic public relations and affiliate program management for small business consumer products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-mint tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-base text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-base text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                {/* Case Studies and Blog links removed until ready for production */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-mint tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@sixminutesout.com" className="text-base text-gray-300 hover:text-white">
                    info@sixminutesout.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-dark pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Six Minutes Out PR. All rights reserved.
          </div>
          
          {/* Social media links removed until ready for production */}
        </div>
      </div>
    </footer>
  );
} 