import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from 'lucide-react';
import { Language } from '../types';
import { ZWEIG_QUOTES, TRANSLATIONS } from '../data/stefan_zweig_data';

interface QuotesProps {
  lang: Language;
}

export default function Quotes({ lang }: QuotesProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % ZWEIG_QUOTES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + ZWEIG_QUOTES.length) % ZWEIG_QUOTES.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % ZWEIG_QUOTES.length);
  };

  return (
    <section
      id="quotes"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-neutral-100 dark:bg-black border-b border-amber-500/10 relative overflow-hidden"
    >
      {/* Decorative luxury backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-500 font-semibold block mb-2">
            Dicta & Logia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50 mb-4">
            {t.quotesTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-400 italic">
            {t.quotesSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Dynamic Display Slider Card */}
        <div className="relative bg-neutral-950/40 border border-amber-500/15 rounded-2xl p-8 sm:p-16 text-center max-w-3xl mx-auto shadow-2xl">
          
          {/* Absolute Background Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center text-neutral-950 shadow-md">
            <QuoteIcon className="h-5 w-5" />
          </div>

          {/* Core Quotes Slider Area */}
          <div className="min-h-[140px] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <blockquote className="font-serif text-lg sm:text-2xl font-light italic leading-relaxed text-amber-50/90 mb-8 select-none">
              "{ZWEIG_QUOTES[currentIdx].text[lang]}"
            </blockquote>
            
            <cite className="font-sans text-xs tracking-widest uppercase font-semibold text-amber-500 not-italic block">
              — {ZWEIG_QUOTES[currentIdx].source[lang]}
            </cite>
          </div>

          {/* Stepper Controllers */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-neutral-900">
            
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-neutral-800 hover:border-amber-500/50 text-neutral-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer"
              aria-label="Previous quote"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Pagination Dot Indicator Bullets */}
            <div className="flex space-x-2">
              {ZWEIG_QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIdx === i ? 'w-6 bg-amber-500' : 'w-1.5 bg-neutral-800 hover:bg-neutral-700'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-neutral-800 hover:border-amber-500/50 text-neutral-400 hover:text-amber-500 transition-colors duration-200 cursor-pointer"
              aria-label="Next quote"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
