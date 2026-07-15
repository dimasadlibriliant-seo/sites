import { useState, FormEvent } from 'react';
import { Mail, Send, Newspaper, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/stefan_zweig_data';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail && inquiryMsg) {
      setInquirySuccess(true);
      setInquiryName('');
      setInquiryEmail('');
      setInquirySubject('');
      setInquiryMsg('');
      setTimeout(() => setInquirySuccess(false), 6000);
    }
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 6000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100/50 dark:bg-neutral-900/10 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Epistulae
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {t.contactTitle}
          </h2>
          <p className="font-serif text-sm text-neutral-600 dark:text-neutral-405 italic">
            {t.contactSub}
          </p>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Form and Newsletter Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry form column */}
          <form
            onSubmit={handleInquirySubmit}
            className="lg:col-span-7 bg-white dark:bg-neutral-950/40 border border-amber-500/10 rounded-2xl p-6 sm:p-10 shadow-sm space-y-5"
          >
            {inquirySuccess && (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/35 text-emerald-700 dark:text-emerald-450 rounded-xl text-xs sm:text-sm font-sans">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                {t.successInquiry}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-sans text-[10px] tracking-widest uppercase text-neutral-450 dark:text-neutral-500 font-bold mb-1.5">
                  {t.contactName} *
                </label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-sans rounded-md border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block font-sans text-[10px] tracking-widest uppercase text-neutral-450 dark:text-neutral-500 font-bold mb-1.5">
                  {t.contactEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs font-sans rounded-md border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-[10px] tracking-widest uppercase text-neutral-450 dark:text-neutral-500 font-bold mb-1.5">
                {t.contactSubject}
              </label>
              <input
                type="text"
                value={inquirySubject}
                onChange={(e) => setInquirySubject(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-sans rounded-md border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] tracking-widest uppercase text-neutral-450 dark:text-neutral-500 font-bold mb-1.5">
                {t.contactMessage} *
              </label>
              <textarea
                required
                rows={5}
                value={inquiryMsg}
                onChange={(e) => setInquiryMsg(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-sans rounded-md border border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 hover:bg-amber-600 dark:bg-neutral-50 dark:hover:bg-amber-500 text-neutral-50 dark:text-neutral-950 text-xs font-sans tracking-widest uppercase font-semibold rounded-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Send className="h-3.5 w-3.5" />
              {t.sendBtn}
            </button>
          </form>

          {/* Newsletter card column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Newsletter Container */}
            <div className="bg-neutral-950 dark:bg-black text-neutral-100 rounded-2xl p-6 sm:p-10 border border-amber-500/15 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-amber-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                
                <div className="h-10 w-10 rounded-full border border-amber-500/25 bg-neutral-900 flex items-center justify-center text-amber-500 shadow-md">
                  <Newspaper className="h-5 w-5" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold tracking-wide text-neutral-50">
                  {t.newsletterTitle}
                </h3>

                <p className="font-serif text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {t.newsletterSub}
                </p>

                {newsletterSuccess && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 rounded-xl text-xs font-sans">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    {t.successNewsletter}
                  </div>
                )}

                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder={t.newsletterPlaceholder}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs font-sans rounded-md border border-neutral-800 bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-sans text-xs tracking-widest uppercase font-semibold rounded-md transition-colors duration-200 cursor-pointer shadow-sm"
                  >
                    {t.subscribeBtn}
                  </button>
                </form>

              </div>
            </div>

            {/* Direct contact references */}
            <div className="bg-white dark:bg-neutral-950/40 border border-amber-500/10 rounded-xl p-6 space-y-4">
              <h4 className="font-display text-sm font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide">
                {lang === 'EN' ? 'Academic Repositories' : lang === 'DE' ? 'Akademische Archive' : 'Repositori Akademis'}
              </h4>
              
              <ul className="space-y-2.5 font-serif text-xs text-neutral-500 dark:text-neutral-400">
                <li>
                  <a
                    href="https://www.sbg.ac.at/zweig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 dark:hover:text-amber-400 underline transition-colors duration-200"
                  >
                    Stefan Zweig Centre Salzburg
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.stefanzweig.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 dark:hover:text-amber-400 underline transition-colors duration-200"
                  >
                    The Stefan Zweig Bibliography Archive
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.casastefanzweig.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 dark:hover:text-amber-400 underline transition-colors duration-200"
                  >
                    Casa Stefan Zweig (Petrópolis, Brazil)
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
