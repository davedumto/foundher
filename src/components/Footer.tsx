import React from 'react';
import { MailIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  const footerLinks = {
    platform: [{
      label: 'About Us',
      href: '#about'
    }, {
      label: 'Membership',
      href: '#membership'
    }, {
      label: 'Events',
      href: '#events'
    }, {
      label: 'Contact us',
      href: '#contact'
    }],
  };
  return <footer className="bg-burgundy text-blush">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
            {/* Brand Column */}
            <div className="flex-1 max-w-md">
              <h3 className="font-display text-2xl font-bold text-rose-gold mb-4">
                African Women Founders
              </h3>
              <p className="font-body text-blush/80 mb-6 leading-relaxed">
                Empowering African women entrepreneurs through meaningful
                connections, strategic partnerships, and access to high-level
                corporate experiences.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <MailIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
                  <a href="mailto:hello@africanwomenfounders.com" className="font-body text-blush/80 hover:text-rose-gold transition-colors">
                    hello@africanwomenfounders.com
                  </a>
                </div>
                <div className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPinIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-blush/80">
                    Pan-African Network • 30+ Countries
                  </span>
                </div>
              </div>
            </div>

            {/* Platform Links Column */}
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => <li key={index}>
                    <a href={link.href} className="font-body text-blush/80 hover:text-rose-gold transition-colors">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-blush/10">
          <div className="text-center">
            <p className="font-body text-blush/60 text-sm">
              © 2025 African Women Founders Network. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}