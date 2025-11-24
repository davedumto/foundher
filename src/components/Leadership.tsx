import React from 'react';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Leadership() {
  const leaders = [{
    name: 'Nneka Okoye',
    title: 'Founder & CEO, AfriTech Solutions',
    bio: 'Leading the charge in African fintech innovation with solutions serving 2M+ users across 15 countries. Former Goldman Sachs executive turned entrepreneur.',
    image: '/women1.jpg',
    achievements: ['$5M Series A Raised', 'Forbes 30 Under 30', '2M+ Users'],
    linkedin: '#',
    twitter: '#'
  }, {
    name: 'Thandiwe Nkosi',
    title: 'Co-Founder, EcoVentures Africa',
    bio: 'Pioneer in sustainable business practices across Africa. Building the future of green technology while empowering rural communities through innovation.',
    image: '/women-group.jpg',
    achievements: ['10K+ Jobs Created', 'UN Climate Award', '20 Countries'],
    linkedin: '#',
    twitter: '#'
  }];
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-wine/10 border border-wine text-wine font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Leadership Spotlight
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-mauve mb-6">
            Trailblazers <span className="text-wine">Leading the Way</span>
          </h2>
          <p className="font-body text-xl text-mauve/70 max-w-3xl mx-auto leading-relaxed">
            Meet the exceptional women founders who are redefining business
            success across Africa.
          </p>
        </div>

        {/* Leaders */}
        <div className="space-y-20">
          {leaders.map((leader, index) => <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-br from-wine/20 to-dusty-rose/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={leader.image} alt={leader.name} className="w-full h-[600px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-8 right-8 flex gap-4">
                    <a href={leader.linkedin} className="w-12 h-12 bg-white/90 hover:bg-rose-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <LinkedinIcon className="w-6 h-6 text-wine group-hover:text-white" />
                    </a>
                    <a href={leader.twitter} className="w-12 h-12 bg-white/90 hover:bg-rose-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <TwitterIcon className="w-6 h-6 text-wine group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="font-display text-4xl font-bold text-mauve mb-3">
                  {leader.name}
                </h3>
                <p className="font-display text-xl text-wine font-semibold mb-6">
                  {leader.title}
                </p>
                <p className="font-body text-lg text-mauve/70 leading-relaxed mb-8">
                  {leader.bio}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {leader.achievements.map((achievement, idx) => <div key={idx} className="px-6 py-3 bg-gradient-to-r from-wine/10 to-dusty-rose/10 border border-rose-gold rounded-full">
                      <span className="font-display text-sm text-wine font-semibold">
                        {achievement}
                      </span>
                    </div>)}
                </div>

                <button className="px-8 py-4 bg-wine hover:bg-wine/90 text-white font-display font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Read Full Story
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}