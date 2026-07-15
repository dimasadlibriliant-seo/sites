import { ArrowRight, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/stefan_zweig_data';

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

export default function Hero({ lang, scrollToSection }: HeroProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-950 min-h-[90vh] flex items-center py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-500/10 dark:border-amber-500/5"
    >
      {/* Background elegant accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start space-x-2">
            <span className="h-[1px] w-8 bg-amber-600 dark:bg-amber-500" />
            <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold">
              1881 — 1942
            </span>
            <span className="h-[1px] w-8 bg-amber-600 dark:bg-amber-500" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            {t.heroTitle}
          </h1>

          <p className="font-serif text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed italic">
            "{t.heroSubtitle}"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollToSection('works')}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 dark:bg-neutral-50 hover:bg-amber-600 dark:hover:bg-amber-500 text-neutral-50 dark:text-neutral-950 font-sans text-xs tracking-widest uppercase font-semibold rounded-md transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              {t.exploreBtn}
            </button>
            
            <button
              onClick={() => scrollToSection('biography')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-300 dark:border-neutral-800 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 text-neutral-800 dark:text-neutral-300 font-sans text-xs tracking-widest uppercase font-semibold rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              {t.bioBtn}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mini-badge */}
          <div className="pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <div>
              <span className="block font-display text-2xl font-bold text-amber-600 dark:text-amber-500">1</span>
              <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500 dark:text-neutral-450">Mission of Unity</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-amber-600 dark:text-amber-500">50+</span>
              <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500 dark:text-neutral-450">Languages Translated</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-amber-600 dark:text-amber-500">100%</span>
              <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-500 dark:text-neutral-450">Preserved Legacy</span>
            </div>
          </div>

        </div>

        {/* Hero Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-amber-500/10 p-2 bg-neutral-200 dark:bg-neutral-900 transition-transform duration-500 hover:scale-[1.02]">
            {/* Elegant luxury framing */}
            <div className="absolute inset-2 border border-amber-500/20 pointer-events-none z-20" />
            
            <img
              src="/src/assets/images/stefan_zweig_portrait_1784080734252.jpg"
              alt="Stefan Zweig Portrait"
              className="w-full h-full object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
            
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
          </div>

          {/* Decorative design accent */}
          <div className="absolute -bottom-6 -right-6 h-24 w-24 border-r-2 border-b-2 border-amber-600/30 dark:border-amber-500/20 pointer-events-none hidden sm:block" />
          <div className="absolute -top-6 -left-6 h-24 w-24 border-l-2 border-t-2 border-amber-600/30 dark:border-amber-500/20 pointer-events-none hidden sm:block" />
        </div>

      </div>
    </section>
  );
}
