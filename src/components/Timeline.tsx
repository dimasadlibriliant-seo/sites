import { useState } from 'react';
import { Calendar, Award, Compass, Landmark } from 'lucide-react';
import { Language, TimelineEvent } from '../types';
import { ZWEIG_TIMELINE, TRANSLATIONS } from '../data/stefan_zweig_data';

interface TimelineProps {
  lang: Language;
}

export default function Timeline({ lang }: TimelineProps) {
  const [filter, setFilter] = useState<'all' | 'life' | 'work' | 'history'>('all');
  const t = TRANSLATIONS[lang];

  const filteredEvents = ZWEIG_TIMELINE.filter(
    (ev) => filter === 'all' || ev.category === filter
  );

  const getCategoryIcon = (category: 'life' | 'work' | 'history') => {
    switch (category) {
      case 'life':
        return <Compass className="h-4 w-4" />;
      case 'work':
        return <Award className="h-4 w-4" />;
      case 'history':
        return <Landmark className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: 'life' | 'work' | 'history') => {
    switch (category) {
      case 'life':
        return 'bg-amber-600 text-neutral-50';
      case 'work':
        return 'bg-neutral-800 dark:bg-neutral-200 text-neutral-50 dark:text-neutral-950';
      case 'history':
        return 'bg-amber-100 dark:bg-neutral-900 border border-amber-600/30 text-amber-700 dark:text-amber-400';
    }
  };

  return (
    <section
      id="timeline"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100/50 dark:bg-neutral-900/10 border-b border-amber-500/10"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Chronologia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.timelineTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-400 italic">
            {t.timelineSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {(['all', 'life', 'work', 'history'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-sans tracking-widest uppercase font-semibold transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? 'bg-amber-600 border-amber-600 text-white shadow-sm'
                  : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-450 hover:border-amber-500/40'
              }`}
            >
              {cat === 'all'
                ? lang === 'EN'
                  ? 'All Events'
                  : lang === 'DE'
                  ? 'Alle Ereignisse'
                  : 'Semua Peristiwa'
                : cat === 'life'
                ? lang === 'EN'
                  ? 'Personal Life'
                  : lang === 'DE'
                  ? 'Persönliches Leben'
                  : 'Kehidupan Pribadi'
                : cat === 'work'
                ? lang === 'EN'
                  ? 'Publications & Works'
                  : lang === 'DE'
                  ? 'Veröffentlichungen'
                  : 'Publikasi & Karya'
                : lang === 'EN'
                ? 'European History'
                : lang === 'DE'
                ? 'Europäische Geschichte'
                : 'Sejarah Eropa'}
            </button>
          ))}
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-neutral-300 dark:border-neutral-800 ml-4 sm:ml-6 md:mx-auto md:w-full md:border-l-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-[1px] md:before:bg-neutral-300 md:before:dark:bg-neutral-800">
          
          <div className="space-y-12 relative">
            {filteredEvents.map((ev, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={ev.year}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* central vertical bullet node */}
                  <div className="absolute -left-4 top-1.5 h-8 w-8 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-center shadow-sm z-10 md:left-1/2 md:-ml-4">
                    <span className="text-amber-600">{getCategoryIcon(ev.category)}</span>
                  </div>

                  {/* Empty Spacer column on desktops */}
                  <div className="hidden md:block w-1/2 px-10" />

                  {/* Content card */}
                  <div className="w-full pl-8 md:pl-0 md:w-1/2 md:px-10">
                    <div className="bg-white dark:bg-neutral-950/40 rounded-xl border border-amber-500/10 p-6 shadow-sm hover:border-amber-500/30 transition-all duration-300 relative">
                      
                      {/* Year Indicator */}
                      <span className="inline-flex items-center gap-1 font-sans text-xs font-bold tracking-widest text-amber-600 dark:text-amber-500 mb-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {ev.year}
                      </span>

                      {/* Header Title */}
                      <h3 className="font-display text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-50 tracking-wide mb-2">
                        {ev.title[lang]}
                      </h3>

                      {/* Description Text */}
                      <p className="font-serif text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed">
                        {ev.description[lang]}
                      </p>

                      {/* Micro category tag */}
                      <div className="mt-4 flex justify-end">
                        <span className={`text-[8px] tracking-widest uppercase font-bold px-2 py-0.5 rounded ${getCategoryColor(ev.category)}`}>
                          {ev.category}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
