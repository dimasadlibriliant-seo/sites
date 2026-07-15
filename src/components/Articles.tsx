import { useState } from 'react';
import { Newspaper, Clock, ArrowRight, X, Calendar, User } from 'lucide-react';
import { Language, Article } from '../types';
import { ZWEIG_ARTICLES, TRANSLATIONS } from '../data/stefan_zweig_data';

interface ArticlesProps {
  lang: Language;
  searchQuery: string;
}

export default function Articles({ lang, searchQuery }: ArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const t = TRANSLATIONS[lang];

  const filteredArticles = ZWEIG_ARTICLES.filter((art) => {
    const titleText = art.title[lang].toLowerCase();
    const excerptText = art.excerpt[lang].toLowerCase();
    const contentText = art.content[lang].toLowerCase();
    const query = searchQuery.toLowerCase();

    return (
      titleText.includes(query) ||
      excerptText.includes(query) ||
      contentText.includes(query)
    );
  });

  return (
    <section
      id="essays"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-150 dark:bg-neutral-900/10 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Disputationes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.latestArticlesTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-405 italic">
            {t.latestArticlesSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Essays List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white dark:bg-neutral-900/30 rounded-xl border border-amber-500/10 overflow-hidden shadow-sm flex flex-col hover:border-amber-500/30 transition-all duration-300 group"
            >
              
              {/* Landscape Cover Illustration */}
              <div className="h-56 w-full relative overflow-hidden bg-neutral-200 dark:bg-neutral-950">
                <img
                  src={art.coverUrl}
                  alt={art.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Meta Badge */}
                <div className="absolute bottom-4 left-4 flex gap-3 text-neutral-50">
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    <Clock className="h-3 w-3 text-amber-500" />
                    {art.readTime}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1 bg-amber-600 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                </div>
              </div>

              {/* Text Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-wide leading-snug mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-250">
                    {art.title[lang]}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed mb-6">
                    {art.excerpt[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-850 pt-4 mt-auto">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-neutral-450 dark:text-neutral-500 font-medium">
                    By {art.author}
                  </span>
                  
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="font-sans text-xs tracking-widest uppercase font-bold text-amber-600 dark:text-amber-500 flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 cursor-pointer"
                  >
                    Read Essay
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Expanded Modal View for reading essays */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-amber-500/15 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer z-50"
                aria-label="Close article modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Landscape Banner */}
              <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-neutral-200 dark:bg-neutral-950">
                <img
                  src={selectedArticle.coverUrl}
                  alt={selectedArticle.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Meta details */}
                <div className="absolute bottom-6 left-6 right-6 text-neutral-50">
                  <div className="flex items-center gap-4 text-xs font-sans tracking-widest uppercase font-semibold text-amber-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {selectedArticle.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                    {selectedArticle.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Core Content Body */}
              <div className="p-6 sm:p-12">
                <div className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-semibold mb-8 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-4">
                  <User className="h-4 w-4 text-amber-500" />
                  Written by <span className="text-neutral-800 dark:text-neutral-200">{selectedArticle.author}</span>
                </div>

                <div className="prose dark:prose-invert max-w-none font-serif text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line space-y-4">
                  {selectedArticle.content[lang]}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
