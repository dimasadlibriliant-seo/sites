import { useState, useEffect } from 'react';
import { Language } from './types';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Works from './components/Works';
import Quotes from './components/Quotes';
import Timeline from './components/Timeline';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Legacy from './components/Legacy';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Manage Dark/Light theme state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [darkMode]);

  // Scroll viewport spy
  useEffect(() => {
    const sections = ['hero', 'biography', 'works', 'quotes', 'timeline', 'essays', 'gallery', 'legacy', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset navbar height
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 80; // height of sticky header
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 selection:bg-amber-500/30 selection:text-neutral-900 transition-colors duration-300">
      
      {/* Dynamic SEO Tag & JSON-LD schema Injector */}
      <SEO lang={lang} currentSection={activeSection} />

      {/* Primary Global Sticky Navbar Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Segment Content Layouts */}
      <main>
        <Hero lang={lang} scrollToSection={scrollToSection} />
        
        <Biography lang={lang} />
        
        <Works lang={lang} searchQuery={searchQuery} />
        
        <Quotes lang={lang} />
        
        <Timeline lang={lang} />
        
        <Articles lang={lang} searchQuery={searchQuery} />
        
        <Gallery lang={lang} />
        
        <Legacy lang={lang} />
        
        <FAQ lang={lang} />
        
        <Contact lang={lang} />
      </main>

      {/* Professional Footer */}
      <Footer lang={lang} scrollToSection={scrollToSection} />

    </div>
  );
}
