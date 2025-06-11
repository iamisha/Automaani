import React, { useRef, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Contact from './sections/Contact';
import BookMeeting from './sections/BookMeeting';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [showBook, setShowBook] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-background text-text">
      <Navbar
        onHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onAbout={() => scrollTo(aboutRef)}
        onServices={() => scrollTo(servicesRef)}
        onContact={() => scrollTo(contactRef)}
        onBook={() => setShowBook(true)}
      />
      <Hero onBook={() => setShowBook(true)} />
      <div ref={aboutRef}><AboutUs /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={contactRef}><Contact /></div>
      {showBook && <BookMeeting onClose={() => setShowBook(false)} />}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
