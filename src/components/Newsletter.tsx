import React from 'react';
import { MailIcon, ArrowRightIcon } from 'lucide-react';
export function Newsletter() {
  return <section className="py-24 bg-blush">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-wine to-burgundy rounded-3xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-dusty-rose/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-rose-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MailIcon className="w-8 h-8 text-white" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="font-body text-xl text-blush/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get exclusive insights, event invitations, and success stories
              delivered to your inbox monthly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-xl font-body text-mauve bg-white border-2 border-transparent focus:border-rose-gold focus:outline-none transition-all" required />
              <button type="submit" className="group px-8 py-4 bg-rose-gold hover:bg-rose-gold/90 text-white font-display font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-rose-gold/50 hover:scale-105">
                Subscribe
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="font-body text-sm text-blush/70 mt-6">
              Join 5,000+ founders receiving our newsletter. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>;
}