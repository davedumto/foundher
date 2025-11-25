'use client';

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wine via-wine to-burgundy overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-rose-gold rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 border-2 border-rose-gold rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-dusty-rose rotate-45"></div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src="/women-connecting.jpg" alt="African women entrepreneurs connecting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-wine/90 via-wine/80 to-burgundy/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-rose-gold/20 border border-rose-gold text-rose-gold font-display text-sm tracking-wider uppercase rounded-full">
            Found Her Table
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
        >
          Empowering African
          <br />
          <span className="text-rose-gold">Women Founders</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl sm:text-2xl text-blush/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join an exclusive network of visionary African women entrepreneurs
          building the future of business through meaningful connections and
          strategic partnerships.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group px-10 py-5 bg-rose-gold hover:bg-rose-gold/90 text-white font-display font-semibold text-lg rounded-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-rose-gold/50 hover:scale-105">
            Join The Network
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
{/* 
          <button className="px-10 py-5 bg-transparent border-2 border-blush text-blush hover:bg-blush hover:text-wine font-display font-semibold text-lg rounded-lg transition-all duration-300">
            Explore Opportunities
          </button> */}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Active Founders" },
            { number: "50+", label: "Corporate Partners" },
            { number: "200+", label: "Partnerships Formed" },
            { number: "30+", label: "Countries Represented" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-display font-bold text-rose-gold mb-2">
                {stat.number}
              </div>
              <div className="text-blush/80 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8F5F1" />
        </svg>
      </div>
    </section>;
}