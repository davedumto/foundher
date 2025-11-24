'use client';

import React, { useState, useEffect } from 'react';
import { QuoteIcon } from 'lucide-react';
export function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const stories = [{
    name: 'Amara Okafor',
    title: 'Founder & CEO, TechVentures Africa',
    country: 'Nigeria',
    image: '/women-connecting.jpg',
    quote: "This network opened doors I didn't even know existed. Within 6 months, I secured partnerships with three Fortune 500 companies and expanded into 5 new markets.",
    achievement: 'Raised $2M Series A'
  }, {
    name: 'Zara Mensah',
    title: 'Co-Founder, EcoSolutions Ghana',
    country: 'Ghana',
    image: '/women1.jpg',
    quote: 'The mentorship and strategic connections I gained here transformed my business. I went from struggling to scale to leading my industry in sustainability innovation.',
    achievement: 'Expanded to 8 Countries'
  }, {
    name: 'Thandiwe Nkosi',
    title: 'Founder, FinTech Innovations',
    country: 'South Africa',
    image: '/women-group.jpg',
    quote: 'Being part of this community gave me the confidence and connections to take my fintech startup to the next level. The support is unmatched.',
    achievement: '100K+ Active Users'
  }];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stories.length]);

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < stories.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };
  return <section className="py-24 bg-gradient-to-br from-blush to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-dusty-rose/10 border border-dusty-rose text-wine font-display text-sm tracking-wider uppercase rounded-full mb-6">
            Success Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-mauve mb-6">
            Founders Making <span className="text-wine">Impact</span>
          </h2>
          <p className="font-body text-xl text-mauve/70 max-w-3xl mx-auto leading-relaxed">
            Real stories from women who transformed their businesses through our
            network.
          </p>
        </div>

        {/* Stories - Desktop Grid / Mobile Carousel */}
        <div className="relative">
          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
            {stories.map((story, index) => <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-4 py-2 bg-rose-gold text-white font-display text-xs tracking-wider uppercase rounded-full">
                      {story.achievement}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <QuoteIcon className="w-8 h-8 text-rose-gold mb-4" />
                  <p className="font-body text-mauve/80 mb-6 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                  <div className="border-t border-mauve/10 pt-6">
                    <h4 className="font-display text-xl font-bold text-mauve mb-1">
                      {story.name}
                    </h4>
                    <p className="font-body text-wine font-semibold mb-1">
                      {story.title}
                    </p>
                    <p className="font-body text-mauve/60 text-sm">
                      {story.country}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Mobile Carousel (visible on mobile only) */}
          <div className="md:hidden">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {stories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-wine/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="inline-block px-4 py-2 bg-rose-gold text-white font-display text-xs tracking-wider uppercase rounded-full">
                            {story.achievement}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <QuoteIcon className="w-8 h-8 text-rose-gold mb-4" />
                        <p className="font-body text-mauve/80 mb-6 leading-relaxed italic text-sm">
                          "{story.quote}"
                        </p>
                        <div className="border-t border-mauve/10 pt-6">
                          <h4 className="font-display text-lg font-bold text-mauve mb-1">
                            {story.name}
                          </h4>
                          <p className="font-body text-wine font-semibold mb-1 text-sm">
                            {story.title}
                          </p>
                          <p className="font-body text-mauve/60 text-xs">
                            {story.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-wine scale-110' 
                      : 'bg-mauve/30 hover:bg-mauve/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="font-body text-sm text-mauve/60">
                {currentSlide + 1} of {stories.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}