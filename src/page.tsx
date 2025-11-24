import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Community } from './components/Community';
import { Membership } from './components/Membership';
import { SuccessStories } from './components/SuccessStories';
import { Leadership } from './components/Leadership';
import { Events } from './components/Events';
import { Partnerships } from './components/Partnerships';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-champagne">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="community">
        {/* <Community /> */}
      </section>
      <section id="membership">
        {/* <Membership /> */}
      </section>
      <section id="stories">
        <SuccessStories />
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="partnerships">
        {/* <Partnerships /> */}
      </section>
      <Newsletter />
      <Footer />
    </div>;
}
export default App;