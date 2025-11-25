'use client';

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="bg-champagne">
      {/* Hero Statement - Minimal & Bold */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block mb-8"
          >
            <span className="font-display text-xs tracking-[0.4em] uppercase text-wine">
              Our Mission
            </span>
            <div className="h-px bg-wine/20 mt-3"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-mauve leading-[0.95] mb-12"
          >
            Building
            <br />
            Africa's Future
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-2xl text-mauve leading-relaxed max-w-2xl"
          >
            A premium network where African women founders connect, collaborate,
            and create lasting impact across the continent.
          </motion.p>
        </div>
      </div>

      {/* Full-Bleed Image Moment */}
      <div className="relative h-[70vh] mb-32">
        <img src="/women1.jpg" alt="African women entrepreneurs networking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-mauve/60 via-transparent to-transparent"></div>

        {/* Quote Overlay */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-200px" }}
              className="max-w-3xl bg-white/95 backdrop-blur-sm p-12 rounded-2xl"
            >
              <p className="font-display text-3xl text-mauve leading-tight mb-6">
                "We're not just building businesses—we're building a movement."
              </p>
              <div className="h-px bg-rose/20 w-24 mb-4"></div>
              <p className="font-body text-wine font-semibold">
                FoundHer Network
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bento Grid - Asymmetric Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Feature - Elite Network */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-8">
                  <div className="w-6 h-6 rounded-full bg-wine"></div>
                </div>
                <h3 className="font-display text-4xl font-bold text-mauve mb-6">
                  Elite Network
                </h3>
                <p className="font-body text-lg text-mauve leading-relaxed mb-8">
                  Connect with vetted African women founders across industries.
                  Every connection is intentional, every partnership is
                  strategic.
                </p>
                <div className="flex items-center gap-3 text-wine font-display text-sm tracking-wide">
                  <span>500+ Active Founders</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
              <div className="h-64 md:h-auto">
                <img src="/women-connecting.jpg" alt="African women networking" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Tall Feature - Strategic Growth */}
          <div className="bg-gradient-to-br from-wine to-burgundy rounded-3xl p-12 text-white flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8">
                <div className="w-6 h-6 rounded-full bg-rose-gold"></div>
              </div>
              <h3 className="font-display text-4xl font-bold mb-6">
                Strategic Growth
              </h3>
              <p className="font-body text-lg text-white/90 leading-relaxed">
                Access exclusive corporate experiences, mentorship, and
                resources designed to accelerate your trajectory.
              </p>
            </div>
            <div className="pt-8 border-t border-white/20">
              <div className="text-5xl font-display font-bold text-rose-gold mb-2">
                200+
              </div>
              <div className="text-white/80 font-body">Partnerships Formed</div>
            </div>
          </div>

          {/* Wide Feature - Pan-African Reach */}
          <div className="lg:col-span-3 bg-blush rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 h-64 md:h-auto">
                <img src="/women-group.jpg" alt="African women founders gathering" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-3 p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center mb-8">
                  <div className="w-6 h-6 rounded-full bg-dusty-rose"></div>
                </div>
                <h3 className="font-display text-4xl font-bold text-mauve mb-6">
                  Pan-African Reach
                </h3>
                <p className="font-body text-lg text-mauve leading-relaxed mb-8">
                  Expand your influence across borders with a network spanning
                  30+ African countries and global diaspora connections.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full font-body text-sm text-mauve">
                    Nigeria
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full font-body text-sm text-mauve">
                    Kenya
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full font-body text-sm text-mauve">
                    South Africa
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full font-body text-sm text-mauve">
                    Ghana
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full font-body text-sm text-mauve">
                    +26 More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Statement - Bold & Simple */}
      <div id="membership" className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="font-display text-5xl sm:text-6xl font-bold text-mauve mb-8 leading-tight">
            More than a network.
            <br />
            <span className="text-wine">A movement.</span>
          </h3>
          <p className="font-body text-xl text-mauve/60 leading-relaxed mb-12">
            Join a community of women who understand the unique challenges and
            opportunities of building businesses in Africa.
          </p>
          <button className="px-12 py-5 bg-wine hover:bg-wine/90 text-white font-display font-semibold text-lg rounded-full transition-all duration-300 inline-flex items-center gap-3">
            Join FoundHer
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>;
}