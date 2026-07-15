import { Award, Heart, Shield, Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/stefan_zweig_data';

interface LegacyProps {
  lang: Language;
}

export default function Legacy({ lang }: LegacyProps) {
  const t = TRANSLATIONS[lang];

  const corePillars = [
    {
      icon: <Globe className="h-5 w-5 text-amber-600 dark:text-amber-500" />,
      title: {
        EN: 'Cosmopolitan Humanism',
        DE: 'Kosmopolitischer Humanismus',
        ID: 'Humanisme Kosmopolitan'
      },
      desc: {
        EN: 'Zweig rejected any form of cultural isolation, advocating instead for a borderless European citizenship based on shared literary appreciation and collective empathy.',
        DE: 'Zweig lehnte jede Form der kulturellen Abschottung ab und setzte sich stattdessen für eine grenzenlose europäische Staatsbürgerschaft ein, die auf gemeinsamem literarischen Verständnis beruht.',
        ID: 'Zweig menolak segala bentuk isolasi budaya, sebaliknya mengadvokasi kewarganegaraan Eropa tanpa batas berdasarkan apresiasi sastra bersama dan empati kolektif.'
      }
    },
    {
      icon: <Shield className="h-5 w-5 text-amber-600 dark:text-amber-500" />,
      title: {
        EN: 'Radical Pacifism',
        DE: 'Radikaler Pazifismus',
        ID: 'Pasifisme Radikal'
      },
      desc: {
        EN: 'Even during the peak of World War I, Zweig refused to write war propaganda, dedicating his intellectual efforts instead to the rebuilding of cultural and moral bridges.',
        DE: 'Selbst auf dem Höhepunkt des Ersten Weltkriegs weigerte sich Zweig, Kriegspropaganda zu verfassen. Er widmete seine Energie dem Wiederaufbau moralischer Brücken.',
        ID: 'Bahkan selama puncak Perang Dunia I, Zweig menolak menulis propaganda perang, melainkan mendedikasikan upaya intelektualnya untuk membangun kembali jembatan budaya dan moral.'
      }
    },
    {
      icon: <Heart className="h-5 w-5 text-amber-600 dark:text-amber-500" />,
      title: {
        EN: 'The Psychological Mirror',
        DE: 'Der psychologische Spiegel',
        ID: 'Cermin Psikologis'
      },
      desc: {
        EN: 'Deeply influenced by his close friend Sigmund Freud, Zweig revolutionized biography and fiction by exploring how unconscious, passionate drives shape historical destinies.',
        DE: 'Tief beeinflusst von seinem engen Freund Sigmund Freud, revolutionierte Zweig die Biografie, indem er zeigte, wie unbewusste, leidenschaftliche Triebe das Schicksal prägen.',
        ID: 'Sangat dipengaruhi oleh sahabat dekatnya Sigmund Freud, Zweig merevolusi biografi dan fiksi dengan mengeksplorasi bagaimana dorongan emosional bawah sadar membentuk takdir sejarah.'
      }
    },
    {
      icon: <Award className="h-5 w-5 text-amber-600 dark:text-amber-500" />,
      title: {
        EN: 'The Spiritual Academy',
        DE: 'Die geistige Akademie',
        ID: 'Akademi Spiritual'
      },
      desc: {
        EN: 'Zweig cultivated an active international network of intellectual correspondence with Thomas Mann, Albert Einstein, Romain Rolland, Richard Strauss, and James Joyce.',
        DE: 'Zweig pflegte einen regen internationalen Briefwechsel mit Denkern wie Thomas Mann, Albert Einstein, Romain Rolland, Richard Strauss und James Joyce.',
        ID: 'Zweig membina jaringan korespondensi intelektual internasional yang aktif dengan Thomas Mann, Albert Einstein, Romain Rolland, Richard Strauss, dan James Joyce.'
      }
    }
  ];

  return (
    <section
      id="legacy"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-500/[0.01] dark:bg-neutral-950/20 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Descriptive narrative column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block">
              Posteritas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              {t.aboutTitle}
            </h2>
            <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500" />
            
            <p className="font-serif text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t.aboutP1}
            </p>
            
            <p className="font-serif text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t.aboutP2}
            </p>
          </div>

          {/* Core Pillars visual grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900/40 rounded-xl border border-amber-500/10 p-6 hover:border-amber-500/35 transition-all duration-300 shadow-sm"
              >
                <div className="h-10 w-10 rounded-full bg-amber-500/5 flex items-center justify-center mb-4 border border-amber-500/10">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide mb-2">
                  {pillar.title[lang]}
                </h3>
                <p className="font-serif text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {pillar.desc[lang]}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Legacy Blockquote Quote Banner */}
        <div className="bg-neutral-950 dark:bg-black rounded-2xl p-8 sm:p-12 border border-amber-500/15 relative overflow-hidden max-w-4xl mx-auto shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 bg-amber-500/[0.02] rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative z-10 text-center sm:text-left">
            <div className="h-14 w-14 rounded-full border border-amber-500/25 bg-neutral-900 flex items-center justify-center text-amber-500 flex-shrink-0 shadow-lg">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base italic text-amber-100/90 leading-relaxed mb-3">
                {lang === 'EN'
                  ? '"Stefan Zweig, more than almost any of his contemporaries, represented the ultimate distillation of European humanistic solidarity. His tragic death only amplified his prophetic vision of a world without borders."'
                  : lang === 'DE'
                  ? '"Stefan Zweig verkörperte wie kaum ein anderer Zeitgenosse die Quintessenz der europäischen humanistischen Solidarität. Sein tragischer Tod verstärkte seine prophetische Vision."'
                  : '"Stefan Zweig, lebih dari hampir semua rekan sezamannya, mewakili penyulingan tertinggi dari solidaritas humanistik Eropa. Kematian tragisnya hanya memperkuat visi kenabiannya tentang dunia tanpa perbatasan."'}
              </p>
              <cite className="font-sans text-[10px] tracking-widest uppercase font-semibold text-neutral-500 not-italic block">
                — Romain Rolland, Nobel Laureate in Literature
              </cite>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
