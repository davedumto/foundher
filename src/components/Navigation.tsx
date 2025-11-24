'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    label: 'About',
    href: '#about'
  }, {
    label: 'Membership',
    href: '#membership'
  }, {
    label: 'Events',
    href: '#events'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#contact') {
      // Scroll to footer for contact
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-wine shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-rose-gold transition-colors" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setIsMobileMenuOpen(false);
        }}>
            FoundHer
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => <a key={index} href={link.href} onClick={e => handleNavClick(e, link.href)} className="font-body text-white hover:text-rose-gold transition-colors font-medium">
                {link.label}
              </a>)}
            <button className="px-6 py-3 bg-rose-gold hover:bg-rose-gold/90 text-white font-display font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-rose-gold/50 hover:scale-105">
              Join Network
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-rose-gold transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-wine border-t border-rose-gold/20 px-6 py-6 space-y-4">
          {navLinks.map((link, index) => <a key={index} href={link.href} onClick={e => handleNavClick(e, link.href)} className="block font-body text-white hover:text-rose-gold transition-colors font-medium py-2">
              {link.label}
            </a>)}
          <button className="w-full px-6 py-3 bg-rose-gold hover:bg-rose-gold/90 text-white font-display font-semibold rounded-lg transition-all duration-300 shadow-lg">
            Join Network
          </button>
        </div>
      </div>
    </nav>;
}