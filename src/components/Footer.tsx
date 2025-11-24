import React from 'react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon, MailIcon, MapPinIcon } from 'lucide-react';
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
      label: 'Partnerships',
      href: '#partnerships'
    }],
    resources: [{
      label: 'Success Stories',
      href: '#stories'
    }, {
      label: 'Blog',
      href: '#'
    }, {
      label: 'Resources',
      href: '#'
    }, {
      label: 'FAQs',
      href: '#'
    }],
    legal: [{
      label: 'Privacy Policy',
      href: '#'
    }, {
      label: 'Terms of Service',
      href: '#'
    }, {
      label: 'Code of Conduct',
      href: '#'
    }, {
      label: 'Contact Us',
      href: '#contact'
    }]
  };
  const socialLinks = [{
    icon: LinkedinIcon,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: TwitterIcon,
    href: '#',
    label: 'Twitter'
  }, {
    icon: InstagramIcon,
    href: '#',
    label: 'Instagram'
  }, {
    icon: FacebookIcon,
    href: '#',
    label: 'Facebook'
  }];
  return <footer className="bg-burgundy text-blush">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-rose-gold mb-4">
              African Women Founders
            </h3>
            <p className="font-body text-blush/80 mb-6 leading-relaxed">
              Empowering African women entrepreneurs through meaningful
              connections, strategic partnerships, and access to high-level
              corporate experiences.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@africanwomenfounders.com" className="font-body text-blush/80 hover:text-rose-gold transition-colors">
                  hello@africanwomenfounders.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-blush/80">
                  Pan-African Network • 30+ Countries
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
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

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => <li key={index}>
                  <a href={link.href} className="font-body text-blush/80 hover:text-rose-gold transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => <li key={index}>
                  <a href={link.href} className="font-body text-blush/80 hover:text-rose-gold transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-blush/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body text-blush/60 text-sm">
              © 2025 African Women Founders Network. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-blush/10 hover:bg-rose-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <social.icon className="w-5 h-5 text-blush group-hover:text-white transition-colors" />
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
}