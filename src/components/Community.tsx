import React from 'react';
export function Community() {
  const members = [{
    name: 'Chioma Adeleke',
    title: 'FinTech Founder',
    country: 'Nigeria',
    image: '/women-connecting.jpg'
  }, {
    name: 'Aisha Mohammed',
    title: 'E-Commerce CEO',
    country: 'Kenya',
    image: '/women-group.jpg'
  }, {
    name: 'Naledi Khumalo',
    title: 'Tech Innovator',
    country: 'South Africa',
    image: '/women1.jpg'
  }, {
    name: 'Fatima Hassan',
    title: 'AgriTech Leader',
    country: 'Ghana',
    image: '/women-connecting.jpg'
  }, {
    name: 'Zuri Mwangi',
    title: 'Healthcare Founder',
    country: 'Tanzania',
    image: '/women-group.jpg'
  }, {
    name: 'Amara Okonkwo',
    title: 'EdTech Pioneer',
    country: 'Rwanda',
    image: '/women1.jpg'
  }];
  return <section className="py-24 bg-gradient-to-br from-blush to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-dusty-rose/10 border border-dusty-rose text-wine font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Our Community
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-mauve mb-6">
            Meet Our <span className="text-wine">Visionary Founders</span>
          </h2>
          <p className="font-body text-xl text-mauve/70 max-w-3xl mx-auto leading-relaxed">
            A diverse community of African women leaders building innovative
            businesses across the continent and beyond.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-rose-gold font-semibold mb-1">
                  {member.title}
                </p>
                <p className="font-body text-blush/90 text-sm">
                  {member.country}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-rose-gold/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-8 py-3 bg-white text-wine font-display font-semibold rounded-lg hover:bg-blush transition-colors">
                  View Profile
                </button>
              </div>
            </div>)}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-xl text-mauve/70 mb-6">
            Join 500+ African women founders making an impact
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-wine to-burgundy hover:from-burgundy hover:to-wine text-white font-display font-semibold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Become a Member
          </button>
        </div>
      </div>
    </section>;
}