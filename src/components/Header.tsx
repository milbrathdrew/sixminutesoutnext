"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-medium-dark text-light py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/six_minutes_out_logo_black_fill.png" 
                alt="Six Minutes Out PR" 
                width={50} 
                height={50} 
                className="mr-3"
              />
              <span className="text-xl font-bold hidden sm:block">Six Minutes Out PR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="py-2 px-1 font-medium text-light hover:text-mint transition-colors">
              Services
            </Link>
            <Link href="/about" className="py-2 px-1 font-medium text-light hover:text-mint transition-colors">
              About
            </Link>
            <Link href="/case-studies" className="py-2 px-1 font-medium text-light hover:text-mint transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="py-2 px-1 font-medium text-light hover:text-mint transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="py-2 px-3 font-medium text-dark bg-mint hover:bg-mint-light rounded-md transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-light p-2 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-dark">
          <Link href="/services" className="block py-2 px-3 font-medium text-light hover:text-mint rounded-md">
            Services
          </Link>
          <Link href="/about" className="block py-2 px-3 font-medium text-light hover:text-mint rounded-md">
            About
          </Link>
          <Link href="/case-studies" className="block py-2 px-3 font-medium text-light hover:text-mint rounded-md">
            Case Studies
          </Link>
          <Link href="/blog" className="block py-2 px-3 font-medium text-light hover:text-mint rounded-md">
            Blog
          </Link>
          <Link href="/contact" className="block py-2 px-3 font-medium text-dark bg-mint hover:bg-mint-light rounded-md">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
} 