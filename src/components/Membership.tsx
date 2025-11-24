import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
export function Membership() {
  const tiers = [{
    name: 'Founder',
    price: 'Free',
    description: 'Perfect for getting started with our community',
    features: ['Access to member directory', 'Monthly networking events', 'Community forum access', 'Newsletter and updates', 'Basic profile listing'],
    cta: 'Join Free',
    featured: false
  }, {
    name: 'Executive',
    price: '$299/year',
    description: 'For founders ready to scale and connect strategically',
    features: ['Everything in Founder, plus:', 'Exclusive executive events', 'Priority partnership matching', 'Corporate experience access', 'Mentorship opportunities', 'Featured profile listing', 'Quarterly strategy sessions'],
    cta: 'Become Executive',
    featured: true
  }, {
    name: 'Legacy',
    price: '$599/year',
    description: 'Elite tier for established founders and industry leaders',
    features: ['Everything in Executive, plus:', 'Private mastermind groups', 'VIP corporate partnerships', 'Speaking opportunities', 'Advisory board access', 'Personal brand amplification', '1-on-1 strategic consulting', 'Lifetime legacy recognition'],
    cta: 'Join Legacy',
    featured: false
  }];
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-rose-gold/10 border border-rose-gold text-wine font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Membership
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-mauve mb-6">
            Choose Your <span className="text-wine">Impact Level</span>
          </h2>
          <p className="font-body text-xl text-mauve/70 max-w-3xl mx-auto leading-relaxed">
            Select the membership tier that aligns with your business goals and
            networking ambitions.
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {tiers.map((tier, index) => <div key={index} className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${tier.featured ? 'bg-gradient-to-br from-wine to-burgundy text-white shadow-2xl scale-105 border-4 border-rose-gold' : 'bg-blush border-2 border-mauve/10 hover:border-rose-gold hover:shadow-xl'}`}>
              {tier.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-6 py-2 bg-rose-gold text-white font-display text-xs tracking-wider uppercase rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>}

              <div className="mb-8">
                <h3 className={`font-display text-3xl font-bold mb-3 ${tier.featured ? 'text-rose-gold' : 'text-wine'}`}>
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className={`font-display text-4xl font-bold ${tier.featured ? 'text-white' : 'text-mauve'}`}>
                    {tier.price}
                  </span>
                </div>
                <p className={`font-body ${tier.featured ? 'text-blush/90' : 'text-mauve/70'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.featured ? 'text-rose-gold' : 'text-wine'}`} />
                    <span className={`font-body ${tier.featured ? 'text-blush' : 'text-mauve/80'}`}>
                      {feature}
                    </span>
                  </li>)}
              </ul>

              <button className={`w-full py-4 rounded-xl font-display font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${tier.featured ? 'bg-rose-gold hover:bg-rose-gold/90 text-white shadow-lg hover:shadow-rose-gold/50' : 'bg-wine hover:bg-wine/90 text-white'}`}>
                {tier.cta}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>)}
        </div>
      </div>
    </section>;
}