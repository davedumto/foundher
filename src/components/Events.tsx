import React from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';
export function Events() {
  const events = [{
    title: 'The FoundHer Table - Inaugural Gathering',
    date: 'November 27, 2025',
    location: 'Private Venue',
    attendees: 'Invitation Only',
    type: 'In-Person',
    description: 'Join us for the very first FoundHer Table gathering - an intimate evening where regal disruptors come together to birth a movement. This exclusive co-operate chic affair marks the beginning of our journey to connect Africa\'s most visionary women founders.',
    image: '/women-connecting.jpg',
    isInaugural: true
  }];
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-wine/10 border border-wine text-wine font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Inaugural Gathering
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-mauve mb-6">
            Where It All <span className="text-wine">Begins</span>
          </h2>
          <p className="font-body text-xl text-mauve/70 max-w-3xl mx-auto leading-relaxed">
            The inaugural gathering that marks the beginning of our movement - where Africa's most
            visionary women founders come together at The FoundHer Table.
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-8">
          {events.map((event, index) => <div key={index} className="group bg-blush rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    {event.isInaugural ? (
                      <span className="px-4 py-2 bg-wine text-white font-display text-xs tracking-wider uppercase rounded-full shadow-lg">
                        First Ever
                      </span>
                    ) : (
                      <span className="px-4 py-2 bg-rose-gold text-white font-display text-xs tracking-wider uppercase rounded-full shadow-lg">
                        {event.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-bold text-mauve mb-4 group-hover:text-wine transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-body text-mauve/70 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-wine flex-shrink-0" />
                      <span className="font-body text-sm text-mauve/80">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="w-5 h-5 text-wine flex-shrink-0" />
                      <span className="font-body text-sm text-mauve/80">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <UsersIcon className="w-5 h-5 text-wine flex-shrink-0" />
                      <span className="font-body text-sm text-mauve/80">
                        {event.attendees}
                      </span>
                    </div>
                  </div>

                  <button className="self-start px-8 py-3 bg-gradient-to-r from-wine to-burgundy hover:from-burgundy hover:to-wine text-white font-display font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
                    Request Invitation
                  </button>
                </div>
              </div>
            </div>)}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-body text-xl text-mauve/70 mb-6 leading-relaxed">
              "We Begin Here" - This is where the story starts, where connections are forged,
              and where Africa's next generation of women leaders gather.
            </p>
            <p className="font-display text-lg text-wine font-semibold mb-8">
              More events will follow as our movement grows.
            </p>
            <div className="inline-flex items-center gap-3 text-mauve/60 font-body text-sm">
              <div className="w-8 h-px bg-wine/20"></div>
              <span>The FoundHer Table</span>
              <div className="w-8 h-px bg-wine/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}