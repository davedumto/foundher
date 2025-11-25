import React from 'react';
import { HandshakeIcon, TrendingUpIcon, GlobeIcon, SparklesIcon } from 'lucide-react';
export function Partnerships() {
  const opportunities = [{
    icon: HandshakeIcon,
    title: 'Strategic Collaborations',
    description: 'Connect with complementary businesses for joint ventures, co-marketing, and shared growth opportunities.'
  }, {
    icon: TrendingUpIcon,
    title: 'Corporate Partnerships',
    description: 'Access exclusive partnerships with Fortune 500 companies and leading African corporations.'
  }, {
    icon: GlobeIcon,
    title: 'Market Expansion',
    description: 'Find partners to help you expand into new markets across Africa and globally.'
  }, {
    icon: SparklesIcon,
    title: 'Innovation Labs',
    description: 'Collaborate on cutting-edge projects with fellow founders and corporate innovation teams.'
  }];
  return <section className="py-24 bg-gradient-to-br from-wine via-burgundy to-wine relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border-4 border-rose-gold rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-dusty-rose rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-rose-gold/20 border border-rose-gold text-rose-gold font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Partnerships
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Build Strategic <span className="text-rose-gold">Alliances</span>
          </h2>
          <p className="font-body text-xl text-blush/90 max-w-3xl mx-auto leading-relaxed">
            Our platform facilitates meaningful business partnerships that drive
            growth, innovation, and market expansion.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => <div key={index} className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-rose-gold/20 hover:border-rose-gold hover:bg-white/20 transition-all duration-300">
              <div className="w-14 h-14 bg-rose-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <opportunity.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {opportunity.title}
              </h3>
              <p className="font-body text-blush/80 leading-relaxed">
                {opportunity.description}
              </p>
            </div>)}
        </div>

        {/* Partnership Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-rose-gold/20 rounded-3xl blur-2xl"></div>
            <img src="/women-group.jpg" alt="African women founders collaborating" className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold text-white mb-6">
              Partnerships That Transform Businesses
            </h3>
            <p className="font-body text-lg text-blush/90 leading-relaxed mb-6">
              Our intelligent matching system connects you with founders and
              corporations whose goals, values, and capabilities align perfectly
              with yours. We've facilitated over 200 successful partnerships
              that have generated millions in revenue and created thousands of
              jobs across Africa.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-blush/90">
                <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                <span className="font-body">AI-powered partner matching</span>
              </li>
              <li className="flex items-center gap-3 text-blush/90">
                <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                <span className="font-body">
                  Structured partnership frameworks
                </span>
              </li>
              <li className="flex items-center gap-3 text-blush/90">
                <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                <span className="font-body">Legal and advisory support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partnership Matching CTA */}
        <div className="bg-white rounded-3xl p-12 lg:p-16 text-center shadow-2xl">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-mauve mb-6">
            Ready to Find Your Perfect Partner?
          </h3>
          <p className="font-body text-xl text-mauve max-w-3xl mx-auto mb-10 leading-relaxed">
            Start building partnerships that matter. Our platform makes it easy
            to discover, connect, and collaborate with the right partners for
            your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-wine hover:bg-wine/90 text-white font-display font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Partnerships
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white font-display font-semibold text-lg rounded-xl transition-all duration-300">
              Become a Partner
            </button>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="mt-12 pt-12 border-t border-mauve/10">
            <p className="font-display text-sm text-mauve/60 uppercase tracking-wider mb-8">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="w-32 h-12 bg-mauve/10 rounded"></div>
              <div className="w-32 h-12 bg-mauve/10 rounded"></div>
              <div className="w-32 h-12 bg-mauve/10 rounded"></div>
              <div className="w-32 h-12 bg-mauve/10 rounded"></div>
              <div className="w-32 h-12 bg-mauve/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}