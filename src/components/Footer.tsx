import { Language } from '../types';
import { TRANSLATIONS } from '../data/stefan_zweig_data';

interface FooterProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

export default function Footer({ lang, scrollToSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer
      id="footer"
      className="bg-neutral-950 text-neutral-400 dark:bg-black border-t border-amber-500/10 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo Brand column */}
          <div className="md:col-span-5 space-y-4">
            <span
              className="font-display text-2xl font-bold tracking-wide flex items-center gap-2 text-white cursor-pointer select-none"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-amber-500 font-serif italic">S.Z.</span> Stefan Zweig
            </span>
            
            <p className="font-serif text-xs leading-relaxed text-neutral-400 max-w-sm">
              {lang === 'EN'
                ? 'A premier digital gateway and academic archive honoring the cosmopolitan legacy, pacifist philosophy, and psychological masterpieces of Austria’s legendary writer, Stefan Zweig (1881–1942).'
                : lang === 'DE'
                ? 'Ein erstklassiges digitales Portal und akademisches Archiv, das das kosmopolitische Erbe, die pazifistische Philosophie und die psychologischen Meisterwerke von Stefan Zweig (1881–1942) ehrt.'
                : 'Pintu gerbang digital utama dan arsip akademis untuk menghormati warisan kosmopolitan, filsafat pasifis, dan karya agung psikologis dari penulis legendaris Austria, Stefan Zweig (1881–1942).'}
            </p>
          </div>

          {/* Quick Nav links column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-[10px] tracking-widest uppercase font-bold text-amber-500">
              {lang === 'EN' ? 'Navigation' : lang === 'DE' ? 'Navigation' : 'Navigasi'}
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('biography')}
                  className="hover:text-amber-500 transition-colors duration-200 cursor-pointer text-left"
                >
                  {t.navBio}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('works')}
                  className="hover:text-amber-500 transition-colors duration-200 cursor-pointer text-left"
                >
                  {t.navBooks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quotes')}
                  className="hover:text-amber-500 transition-colors duration-200 cursor-pointer text-left"
                >
                  {t.navQuotes}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('timeline')}
                  className="hover:text-amber-500 transition-colors duration-200 cursor-pointer text-left"
                >
                  {t.navTimeline}
                </button>
              </li>
            </ul>
          </div>

          {/* Secondary links column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-[10px] tracking-widest uppercase font-bold text-amber-500">
              {lang === 'EN' ? 'Academic Archives' : lang === 'DE' ? 'Akademische Archive' : 'Arsip Akademis'}
            </h4>
            <ul className="space-y-2 text-xs font-serif text-neutral-400">
              <li>
                <a
                  href="https://www.sbg.ac.at/zweig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 underline transition-colors duration-200"
                >
                  Stefan Zweig Centre Salzburg
                </a>
              </li>
              <li>
                <a
                  href="https://www.casastefanzweig.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 underline transition-colors duration-200"
                >
                  Casa Stefan Zweig Petrópolis
                </a>
              </li>
              <li>
                <a
                  href="https://www.stefanzweig.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 underline transition-colors duration-200"
                >
                  The Zweig Bibliography Database
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and copyright block */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[10px] tracking-wider uppercase text-neutral-500 text-center md:text-left">
            © {new Date().getFullYear()} stefanzweig.eu. {t.rightsReserved}
          </span>
          
          <div className="flex gap-4 text-[10px] font-sans tracking-widest uppercase text-neutral-500">
            <span className="hover:text-amber-500 cursor-pointer select-none">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-amber-500 cursor-pointer select-none">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-amber-500 cursor-pointer select-none">Legal Notice</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
