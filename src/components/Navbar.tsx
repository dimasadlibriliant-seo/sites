import { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, Search, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/stefan_zweig_data';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'biography', label: t.navBio },
    { id: 'works', label: t.navBooks },
    { id: 'quotes', label: t.navQuotes },
    { id: 'timeline', label: t.navTimeline },
    { id: 'essays', label: t.navArticles },
    { id: 'gallery', label: t.navGallery },
    { id: 'legacy', label: t.navAbout },
    { id: 'faq', label: t.navFAQ },
    { id: 'contact', label: t.navContact },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'ID', name: 'Indonesia' },
  ];

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b bg-neutral-50/80 dark:bg-neutral-950/85 border-amber-500/10 dark:border-amber-500/15 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="font-display text-2xl font-semibold tracking-wide flex items-center gap-2">
              <span className="text-amber-600 dark:text-amber-500 font-serif font-bold italic">S.Z.</span>
              <span className="hidden sm:inline font-display text-neutral-800 dark:text-neutral-100 font-semibold text-lg tracking-widest uppercase">
                Stefan Zweig
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-xs font-sans tracking-widest uppercase rounded-md transition-all duration-250 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-500'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/5'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Utilities (Search, Language, Theme, Mobile Toggle) */}
          <div className="flex items-center space-x-3">
            
            {/* Search Input */}
            <div className="relative hidden md:flex items-center">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-56 px-3 py-1.5 pl-8 text-xs font-sans rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                aria-label="Search content"
              />
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-neutral-400" />
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer"
                aria-expanded={showLangMenu}
                aria-haspopup="true"
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ring-1 ring-black/5 z-50">
                  <div className="py-1" role="menu">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-sans hover:bg-amber-500/5 dark:hover:bg-amber-500/10 cursor-pointer flex justify-between items-center ${
                          lang === l.code ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-neutral-700 dark:text-neutral-300'
                        }`}
                        role="menuitem"
                      >
                        {l.name}
                        {lang === l.code && <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-neutral-600" />}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:outline-none transition-colors duration-200 cursor-pointer"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle main menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-sans tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-amber-500/5 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Search Input for Mobile */}
            <div className="relative pt-2 px-3">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 pl-8 text-xs font-sans rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              />
              <Search className="absolute left-6 top-4.5 h-3.5 w-3.5 text-neutral-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
