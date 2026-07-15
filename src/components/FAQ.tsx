import { useState } from 'react';
import { HelpCircle, ChevronDown, Search, HelpCircle as HelpIcon } from 'lucide-react';
import { Language } from '../types';
import { ZWEIG_FAQS, TRANSLATIONS } from '../data/stefan_zweig_data';

interface FAQProps {
  lang: Language;
}

export default function FAQ({ lang }: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [localSearch, setLocalSearch] = useState('');
  const t = TRANSLATIONS[lang];

  const filteredFAQs = ZWEIG_FAQS.filter((faq) => {
    const q = faq.question[lang].toLowerCase();
    const a = faq.answer[lang].toLowerCase();
    const query = localSearch.toLowerCase();
    return q.includes(query) || a.includes(query);
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-500/[0.01] dark:bg-neutral-900/30 border-b border-amber-500/10"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Quaestiones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.faqTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-405 italic">
            {t.faqSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Local FAQ Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder={lang === 'EN' ? 'Search questions...' : lang === 'DE' ? 'Fragen durchsuchen...' : 'Cari pertanyaan...'}
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 text-xs font-sans rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 shadow-sm"
          />
          <Search className="absolute left-3.5 top-3.5 h-3.5 w-3.5 text-neutral-400" />
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openFAQ === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-neutral-950/40 rounded-xl border border-amber-500/10 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/10 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-100 flex items-center gap-3">
                    <HelpIcon className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    {faq.question[lang]}
                  </span>
                  
                  <ChevronDown
                    className={`h-4 w-4 text-neutral-400 dark:text-neutral-550 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Content wrapper */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-neutral-100 dark:border-neutral-900' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-neutral-50/50 dark:bg-neutral-950/20 font-serif text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {faq.answer[lang]}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
