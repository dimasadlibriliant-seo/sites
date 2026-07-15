import { useState } from 'react';
import { Eye, X, Image as ImageIcon } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { ZWEIG_GALLERY, TRANSLATIONS } from '../data/stefan_zweig_data';

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950/20 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Pinacotheca
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.galleryTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-405 italic">
            {t.gallerySub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ZWEIG_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-xl overflow-hidden border border-amber-500/10 bg-neutral-100 dark:bg-neutral-950/40 aspect-[4/3] shadow-sm hover:border-amber-500/30 transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title[lang]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/70 transition-all duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="font-sans text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-base font-semibold text-white tracking-wide mb-1 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-amber-500" />
                  {item.title[lang]}
                </h3>
                <p className="font-serif text-xs text-neutral-300 leading-normal">
                  {item.description[lang]}
                </p>
                <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-amber-500 mt-4 flex items-center gap-1">
                  <Eye className="h-3 w-3" /> Zoom Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox full-screen modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              
              {/* Close trigger */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors duration-200 cursor-pointer z-50"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="bg-neutral-900 border border-amber-500/15 rounded-xl p-2 sm:p-4 max-h-[80vh] flex flex-col justify-center overflow-hidden">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title[lang]}
                  className="max-h-[60vh] object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="pt-4 text-center text-neutral-200 max-w-2xl mx-auto">
                  <span className="font-sans text-[9px] tracking-widest font-bold uppercase text-amber-500 block mb-1">
                    {activePhoto.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-wide text-white mb-2">
                    {activePhoto.title[lang]}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {activePhoto.description[lang]}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
