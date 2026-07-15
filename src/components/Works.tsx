import { Book as BookIcon, Quote as QuoteIcon, SearchX } from 'lucide-react';
import { Language, Book } from '../types';
import { ZWEIG_BOOKS, TRANSLATIONS } from '../data/stefan_zweig_data';

interface WorksProps {
  lang: Language;
  searchQuery: string;
}

export default function Works({ lang, searchQuery }: WorksProps) {
  const t = TRANSLATIONS[lang];

  const filteredBooks = ZWEIG_BOOKS.filter((book) => {
    const titleText = book.title[lang].toLowerCase();
    const originalText = book.originalTitle.toLowerCase();
    const descText = book.description[lang].toLowerCase();
    const genresText = book.genres.join(' ').toLowerCase();
    const query = searchQuery.toLowerCase();

    return (
      titleText.includes(query) ||
      originalText.includes(query) ||
      descText.includes(query) ||
      genresText.includes(query)
    );
  });

  return (
    <section
      id="works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950/20 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Bibliographia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.featuredBooksTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-400 italic">
            {t.featuredBooksSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Dynamic List Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                id={`book-${book.id}`}
                className="bg-white dark:bg-neutral-900/30 rounded-xl border border-amber-500/10 overflow-hidden shadow-sm flex flex-col hover:border-amber-500/30 transition-all duration-300 group"
              >
                {/* Book Header Split */}
                <div className="p-6 sm:p-8 flex-1">
                  
                  {/* Genre Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {book.genres.map((g, i) => (
                      <span
                        key={i}
                        className="font-sans text-[9px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-500/5 text-amber-600 dark:text-amber-400 border border-amber-500/10"
                      >
                        {g}
                      </span>
                    ))}
                  </div>

                  {/* Titles */}
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-wide mb-1 flex items-center gap-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                    <BookIcon className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    {book.title[lang]}
                  </h3>
                  
                  <span className="block font-serif text-[11px] italic text-neutral-500 dark:text-neutral-405 mb-4">
                    {t.originalTitleLabel}: {book.originalTitle} ({book.year})
                  </span>

                  {/* Description */}
                  <p className="font-serif text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed mb-6">
                    {book.description[lang]}
                  </p>

                  {/* Embedded Landmark Quote */}
                  {book.quotes && book.quotes.length > 0 && (
                    <div className="bg-amber-500/[0.02] dark:bg-neutral-950/50 rounded-lg p-4 border-l-2 border-amber-500">
                      <QuoteIcon className="h-4 w-4 text-amber-500/40 mb-1" />
                      <p className="font-serif text-xs italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        "{book.quotes[0][lang]}"
                      </p>
                    </div>
                  )}

                </div>

                {/* Footer Meta Details */}
                <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-900 flex justify-between items-center">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                    {t.publishedLabel}: <span className="font-semibold text-neutral-600 dark:text-neutral-300">{book.year}</span>
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-amber-600 dark:text-amber-400 font-semibold">
                    Stefan Zweig
                  </span>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="text-center py-16 bg-white dark:bg-neutral-900/20 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 max-w-md mx-auto">
            <SearchX className="h-8 w-8 text-neutral-400 mx-auto mb-3" />
            <h3 className="font-display text-base font-semibold text-neutral-800 dark:text-neutral-300">
              {lang === 'EN' ? 'No works matched your search' : lang === 'DE' ? 'Keine Werke gefunden' : 'Tidak ada karya yang cocok dengan pencarian Anda'}
            </h3>
            <p className="font-serif text-xs text-neutral-500 dark:text-neutral-550 mt-1">
              {lang === 'EN' ? 'Try adjusting your terms or check for spelling errors.' : lang === 'DE' ? 'Versuchen Sie es mit anderen Begriffen.' : 'Coba sesuaikan kata pencarian Anda.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
