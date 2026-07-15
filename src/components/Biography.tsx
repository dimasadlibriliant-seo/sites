import { useState } from 'react';
import { BookOpen, Calendar, MapPin, Feather } from 'lucide-react';
import { Language } from '../types';

interface BiographyProps {
  lang: Language;
}

export default function Biography({ lang }: BiographyProps) {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: {
        EN: 'Chapter I: The Cradle of Culture (Vienna 1881–1913)',
        DE: 'Kapitel I: Die Wiege der Kultur (Wien 1881–1913)',
        ID: 'Bab I: Pembibitan Budaya (Wina 1881–1913)'
      },
      subtitle: {
        EN: 'Youth, Coffeehouse Intellectuals, and Early Poetry',
        DE: 'Jugend, Kaffeehaus-Intellektuelle und frühe Lyrik',
        ID: 'Masa Muda, Intelektual Kedai Kopi, dan Puisi Awal'
      },
      period: '1881 — 1913',
      location: {
        EN: 'Vienna, Austria-Hungary',
        DE: 'Wien, Österreich-Ungarn',
        ID: 'Wina, Austria-Hongaria'
      },
      content: {
        EN: `Stefan Zweig was born into a golden, secure age. Late-nineteenth-century Vienna was the glittering capital of the multi-ethnic Austro-Hungarian Empire, a city where art, theater, and music were valued above politics or physical conquest. He was the second son of Moritz Zweig, a wealthy Jewish textile manufacturer, and Ida Brettauer, a daughter of an international banking dynasty. This secular, highly educated bourgeois environment provided Stefan with absolute financial independence and a deep passion for spiritual and cultural pursuits.\n\nFrom a very young age, Zweig was captivated by the literary coffeehouses of Vienna. He and his classmates at the Gymnasium would spend hours reciting Hugo von Hofmannsthal, Rainer Maria Rilke, and Charles Baudelaire. For Zweig, the coffeehouse was the "democratic academy" of culture—a place where anyone for the price of a cup of coffee could read all the world's newspapers, discuss philosophy, and write poetry.\n\nIn 1901, while studying philosophy at the University of Vienna, Zweig published his first volume of verse, "Silberne Saiten" (Silver Strings). It was received with warm praise by none other than Theodor Herzl, the literary editor of Vienna’s most prestigious newspaper, the *Neue Freie Presse*. By 1904, after completing his doctoral thesis on the philosophy of Hippolyte Taine, Zweig refused to settle down. He was seized by a severe "wanderlust", embarking on extensive journeys to India, North Africa, England, France, North America, and Central America, establishing a vast network of intellectual correspondences that would define his cosmopolitan, borderless worldview.`,
        DE: `Stefan Zweig wurde in eine Epoche der absoluten Sicherheit hineingeboren. Das Wien des späten 19. Jahrhunderts war das glitzernde Herz der österreichisch-ungarischen Monarchie, eine Welt, in der Kunst und Theater über allem standen. Er war der zweite Sohn von Moritz Zweig, einem wohlhabenden jüdischen Textilfabrikanten, und Ida Brettauer. Dieses säkulare und hochgebildete Bürgertum gab ihm die Freiheit, sich ganz der Kultur zu widmen.\n\nSchon früh verfiel Zweig dem Charme der Wiener Kaffeehausliteratur. Gemeinsam mit Schulkameraden debattierte er stundenlang über Hugo von Hofmannsthal und Rainer Maria Rilke. Das Kaffeehaus war für ihn die "demokratische Schule" des Geistes.\n\n1901 veröffentlichte er seine erste Gedichtsammlung "Silberne Saiten", die von Theodor Herzl wohlwollend aufgenommen wurde. Nach seiner Promotion im Jahr 1904 über Hippolyte Taine begann er, die Welt zu bereisen. Er besuchte Indien, Nordafrika, England, Frankreich und die USA. Dies prägte sein kosmopolitisches Weltbild und legte den Grundstein für sein weltweites Netzwerk aus Freundschaften.`,
        ID: `Stefan Zweig lahir dalam zaman keemasan yang aman dan tenteram. Wina pada akhir abad ke-19 adalah ibu kota gemerlap Kekaisaran Austria-Hongaria yang multi-etnis, kota tempat seni, teater, dan musik dihargai jauh di atas politik atau penaklukan fisik. Ia adalah putra kedua dari Moritz Zweig, seorang produsen tekstil Yahudi yang kaya raya, dan Ida Brettauer, putri dari dinasti perbankan internasional. Lingkungan borjuis sekuler yang sangat terdidik ini memberi Stefan kemandirian finansial mutlak dan hasrat mendalam terhadap pencarian spiritual dan budaya.\n\nSejak usia sangat muda, Zweig terpikat oleh budaya kedai kopi sastra di Wina. Ia dan teman-teman sekelasnya di Gymnasium menghabiskan waktu berjam-jam membaca karya Hugo von Hofmannsthal, Rainer Maria Rilke, dan Charles Baudelaire. Bagi Zweig, kedai kopi adalah "akademi demokratis" budaya—tempat di mana siapa saja, hanya dengan harga secangkir kopi, dapat membaca surat kabar seluruh dunia, mendiskusikan filsafat, dan menulis puisi.\n\nPada tahun 1901, saat belajar filsafat di Universitas Wina, Zweig menerbitkan kumpulan bait pertamanya, "Silberne Saiten" (Dawai Perak). Karya ini menerima pujian hangat dari Theodor Herzl, editor sastra surat kabar paling bergengsi di Wina, *Neue Freie Presse*. Pada tahun 1904, setelah menyelesaikan tesis doktornya tentang filsafat Hippolyte Taine, Zweig menolak untuk menetap di satu tempat. Ia didera "gairah berkelana" yang kuat, memulai perjalanan luas ke India, Afrika Utara, Inggris, Prancis, Amerika Utara, dan Amerika Tengah, membangun jaringan korespondensi intelektual yang kelak menentukan pandangan dunia kosmopolitannya tanpa batas.`
      }
    },
    {
      title: {
        EN: 'Chapter II: The Cry of Jeremiah (World War I 1914–1918)',
        DE: 'Kapitel II: Der Ruf des Jeremias (Der Erste Weltkrieg 1914–1918)',
        ID: 'Bab II: Jeritan Yeremia (Perang Dunia I 1914–1918)'
      },
      subtitle: {
        EN: 'The Collapse of the European Home and the Path of Pacifism',
        DE: 'Der Einsturz des europäischen Hauses und der Weg des Pazifismus',
        ID: 'Runtuhnya Rumah Eropa dan Jalan Pasifisme'
      },
      period: '1914 — 1918',
      location: {
        EN: 'Vienna, Switzerland',
        DE: 'Wien, Schweiz',
        ID: 'Wina, Swiss'
      },
      content: {
        EN: `In August 1914, the Golden Age of Security exploded. The assassination of Archduke Franz Ferdinand unleashed a devastating patriotic frenzy across Europe. Zweig, initially caught in the patriotic excitement but physically unfit for active duty, was assigned to the War Archives (*Kriegsarchiv*) in Vienna. However, as the reports of industrial slaughter, dismembered bodies, and shattered villages poured in, Zweig fell into a deep moral crisis. He realized that the intellectual elite had failed, having enthusiastically signed war manifestos instead of defending the common brotherhood of mankind.\n\nZweig resolved to dedicate his life and pen to absolute pacifism. He formed a vital intellectual alliance with Romain Rolland, the French writer and humanist who had taken refuge in Switzerland. Defying military censorship, Zweig wrote "Jeremias" (1917), a powerful nine-scene biblical drama. The play depicts the prophet Jeremiah predicting the destruction of Jerusalem, ignored and ridiculed by a warmongering population. It served as a brilliant, direct allegory of the self-destruction of European civilization.\n\nObtaining permission to travel to Switzerland under the guise of lecturing, Zweig effectively entered a self-imposed exile in Zurich. There, he worked closely with Rolland, James Joyce, and French pacifist Henri Guilbeaux, publishing anti-war articles in neutral Swiss newspapers. For Zweig, Switzerland was the only sanctuary where "the intellectual unity of Europe" could still be salvaged from the catastrophic flood of blood and hatred.`,
        DE: `Im August 1914 zerbrach die goldene Ära der Sicherheit. Das Attentat auf Erzherzog Franz Ferdinand löste eine vaterländische Hysterie aus. Zweig wurde dem Wiener Kriegsarchiv zugeteilt, verfiel aber angesichts der Schreckensberichte von der Front in eine moralische Krise. Er erkannte, dass die geistige Elite versagt hatte, indem sie den Krieg bejubelte.\n\nZweig schwor sich, seine Feder ganz dem Pazifismus zu weihen. Er fand einen Seelenverwandten in Romain Rolland. Unter Umgehung der Zensur verfasste er das Antikriegsdrama "Jeremias" (1917). Das biblische Werk schilderte den Untergang Jerusalems und diente als Metapher für den Selbstmord Europas.\n\nNachdem er ein Visum für Vorträge in der Schweiz erhalten hatte, zog Zweig nach Zürich. Dort arbeitete er mit Romain Rolland und James Joyce zusammen. In der neutralen Schweiz versuchten diese Denker, die geistige Einheit des Kontinents vor der endgültigen Zerstörung zu bewahren.`,
        ID: `Pada bulan Agustus 1914, Zaman Keemasan Keamanan runtuh seketika. Pembunuhan Adipati Agung Franz Ferdinand memicu histeria patriotik yang merusak di seluruh Eropa. Zweig, yang awalnya terjebak dalam kegembiraan patriotik tetapi secara fisik tidak sehat untuk tugas aktif, ditugaskan di Arsip Perang (*Kriegsarchiv*) di Wina. Namun, seiring dengan mengalirnya laporan pembantaian industri, tubuh-tubuh yang hancur, dan desa-desa yang porak-poranda, Zweig jatuh ke dalam krisis moral yang mendalam. Ia menyadari bahwa para elit intelektual telah gagal karena dengan antusias menandatangani manifesto perang alih-alih mempertahankan persaudaraan sesama manusia.\n\nZweig memutuskan untuk mendedikasikan hidup dan pena-nya demi pasifisme mutlak. Ia membentuk aliansi intelektual yang penting dengan Romain Rolland, penulis dan humanis Prancis yang mengungsi di Swiss. Menentang sensor militer, Zweig menulis "Jeremias" (1917), sebuah drama alkitabiah sembilan babak yang kuat. Drama ini menggambarkan nabi Yeremia yang memprediksi kehancuran Yerusalem, namun diabaikan dan diejek oleh penduduk yang gila perang. Karya ini berfungsi sebagai alegori langsung yang brilian atas kehancuran peradaban Eropa.\n\nMendapatkan izin perjalanan ke Swiss dengan kedok memberikan kuliah, Zweig secara efektif memasuki pengasingan sukarela di Zurich. Di sana, ia bekerja sama erat dengan Rolland, James Joyce, dan pasifis Prancis Henri Guilbeaux, menerbitkan artikel anti-perang di surat kabar Swiss yang netral. Bagi Zweig, Swiss adalah satu-satunya tempat perlindungan di mana "persatuan intelektual Eropa" masih bisa diselamatkan dari banjir darah dan kebencian.`
      }
    },
    {
      title: {
        EN: 'Chapter III: The Villa on the Mountain (Salzburg 1919–1933)',
        DE: 'Kapitel III: Die Villa auf dem Berg (Salzburg 1919–1933)',
        ID: 'Bab III: Vila di Atas Gunung (Salzburg 1919–1933)'
      },
      subtitle: {
        EN: 'The Golden Salzburg Years and Global Literary Sovereignty',
        DE: 'Die goldenen Salzburger Jahre und globale literarische Vormachtstellung',
        ID: 'Tahun-Tahun Emas Salzburg dan Kedaulatan Sastra Global'
      },
      period: '1919 — 1933',
      location: {
        EN: 'Salzburg, Austria',
        DE: 'Salzburg, Österreich',
        ID: 'Salzburg, Austria'
      },
      content: {
        EN: `After the collapse of the Austro-Hungarian Empire, Zweig returned to his wounded homeland, settling in Salzburg in 1919. He purchased the "Paschinger Schlössl", an elegant baroque villa perched high on the Kapuzinerberg mountain. He married Friderike von Winternitz, a talented writer who supported his literary ambitions. For fifteen years, this Salzburg home became a major cultural heart of Europe, hosting global icons like Thomas Mann, Albert Einstein, Sigmund Freud, H.G. Wells, Richard Strauss, and Paul Valéry.\n\nThis era marked the peak of Zweig's international success. He became one of the most widely translated and financially successful writers of the century. He published his famous historical miniatures "Sternstunden der Menschheit" (1927), which sold millions of copies worldwide. He pioneered a new genre of psychological biography, writing deeply empathetic portraits of Marie Antoinette, Joseph Fouché, Erasmus of Rotterdam, and Mary Stuart, analyzing how unconscious biological drives and psychological splits shape historical decisions.\n\nZweig believed that by creating a global republic of letters, the horrors of nationalism could be permanently neutralized. He spent his summers traveling and lecturing in France, Italy, and the Soviet Union, urging young students to think of themselves as "citizens of Europe" first. His home was filled with a massive collection of historical manuscripts and musical scores by Beethoven, Mozart, and Goethe—relics of a common European heritage that he guarded with profound devotion.`,
        DE: `Nach dem Zusammenbruch der Habsburgermonarchie ließ sich Zweig 1919 in Salzburg nieder. Er erwarb das "Paschinger Schlössl", ein barockes Anwesen auf dem Kapuzinerberg. Er heiratete Friderike von Winternitz. Fünfzehn Jahre lang war diese Villa ein europäisches Kulturzentrum, in dem sich Berühmtheiten wie Thomas Mann, Albert Einstein und Sigmund Freud trafen.\n\nDiese Zeit bedeutete den Höhepunkt seines internationalen Ruhms. Er wurde zu einem der meistübersetzten Autoren der Welt. Er veröffentlichte die historischen Miniaturen "Sternstunden der Menschheit" (1927) und revolutionierte die Biografie mit tiefenpsychologischen Arbeiten über Marie Antoinette, Joseph Fouché und Erasmus von Rotterdam.\n\nZweig war davon überzeugt, dass eine weltumspannende Republik der Literatur den Nationalismus überwinden könnte. Er reiste durch ganz Europa und sammelte kostbare Autografen von Beethoven, Mozart und Goethe – Symbole eines geeinten europäischen Kulturerbes, die er wie einen Schatz hütete.`,
        ID: `Setelah runtuhnya Kekaisaran Austria-Hongaria, Zweig kembali ke tanah airnya yang terluka, menetap di Salzburg pada tahun 1919. Ia membeli "Paschinger Schlössl", sebuah vila barok yang anggun bertengger tinggi di gunung Kapuzinerberg. Ia menikahi Friderike von Winternitz, seorang penulis berbakat yang mendukung ambisi sastranya. Selama lima belas tahun, rumah Salzburg ini menjadi jantung budaya utama Eropa, menjamu ikon-ikon global seperti Thomas Mann, Albert Einstein, Sigmund Freud, H.G. Wells, Richard Strauss, dan Paul Valéry.\n\nEra ini menandai puncak kesuksesan internasional Zweig. Ia menjadi salah satu penulis yang paling banyak diterjemahkan dan sukses secara finansial pada abad tersebut. Ia menerbitkan miniatur sejarahnya yang terkenal "Sternstunden der Menschheit" (1927), yang terjual jutaan eksemplar di seluruh dunia. Ia merintis genre baru biografi psikologis, menulis potret yang sangat berempati tentang Marie Antoinette, Joseph Fouché, Erasmus dari Rotterdam, dan Mary Stuart, menganalisis bagaimana dorongan biologis bawah sadar dan pembelahan psikologis membentuk keputusan sejarah.\n\nZweig percaya bahwa dengan menciptakan republik sastra global, kengerian nasionalisme dapat dinetralisir secara permanen. Ia menghabiskan musim panasnya bepergian dan memberikan kuliah di Prancis, Italia, dan Uni Soviet, mendesak para siswa muda untuk menganggap diri mereka sebagai "warga negara Eropa" terlebih dahulu. Rumahnya dipenuhi dengan koleksi naskah sejarah besar dan partitur musik karya Beethoven, Mozart, dan Goethe—peninggalan warisan bersama Eropa yang ia jaga dengan pengabdian yang mendalam.`
      }
    },
    {
      title: {
        EN: 'Chapter IV: The Endless Wanderer (Exile and Legacy 1934–1942)',
        DE: 'Kapitel IV: Der ewige Wanderer (Exil und Vermächtnis 1934–1942)',
        ID: 'Bab IV: Pengembara Tanpa Akhir (Pengasingan dan Warisan 1934–1942)'
      },
      subtitle: {
        EN: 'The Ascent of Nazi Darkness, Flight, and the Tragedy of Petrópolis',
        DE: 'Der Aufstieg des Nationalsozialismus, Flucht und die Tragödie von Petrópolis',
        ID: 'Kebangkitan Kegelapan Nazi, Pelarian, dan Tragedi Petrópolis'
      },
      period: '1934 — 1942',
      location: {
        EN: 'London, New York, Petrópolis',
        DE: 'London, New York, Petrópolis',
        ID: 'London, New York, Petrópolis'
      },
      content: {
        EN: `In January 1933, Adolf Hitler was appointed Chancellor of Germany. Within months, Zweig's books were banned, cataloged as "degenerate Jewish art", and publicly burned on huge bonfires across Germany. In early 1934, following the Austrian civil strife, the local Salzburg police carried out a search of Zweig's home under the pretext of looking for hidden socialist weapons. Though no weapons were found, the humiliation was absolute. Zweig realized that the rule of law was dead, and that Austria would inevitably be swallowed by the Nazi tide.\n\nHe Packed his belongings, divorced Friderike, and fled to London, beginning an agonizing exile. He traveled constantly, giving anti-fascist lectures in South America, where he was treated like a literary sovereign. In 1939, he married Lotte Altmann, his loyal young secretary. As the German armies conquered France and launched the Blitz on London, Zweig felt his psychological world disintegrating. He believed that the destruction of European culture was final, and that his life work was reduced to ashes.\n\nIn 1941, seeking peace, Stefan and Lotte emigrated to Petrópolis, a beautiful mountain city in Brazil. There, amidst the tropical landscapes, Zweig completed his masterpiece autobiography "The World of Yesterday" and his final psychological triumph, "Chess Story". Despite the warmth of the Brazilian people, the news of the fall of Singapore and the relentless advance of the Axis powers shattered his remaining hope. On February 22, 1942, unable to bear the spiritual isolation and the suicide of his beloved continent, Stefan and Lotte took a lethal dose of barbiturates. They were found in each other's arms, leaving behind an elegant suicide note thanking the nation of Brazil and wishing a speedy sunrise to those who would survive the long dark night.`,
        DE: `Im Januar 1933 wurde Adolf Hitler zum Reichskanzler ernannt. Wenige Monate später wurden Zweigs Bücher verboten und öffentlich verbrannt. Nach einer Hausdurchsuchung im Jahr 1934 verließ Zweig Salzburg und emigrierte nach London. Er spürte, dass der Nationalsozialismus auch Österreich verschlingen würde.\n\nEs folgte eine Zeit quälender Heimatlosigkeit. Zusammen mit seiner zweiten Frau, Lotte Altmann, reiste er nach New York und ließ sich schließlich im brasilianischen Bergort Petrópolis nieder. Dort vollendete er sein Vermächtnis, die Autobiografie "Die Welt von Gestern", und sein Meisterwerk, die "Schachnovelle".\n\nDoch die ständigen Nachrichten über den scheinbar unaufhaltsamen Siegeszug der Achsenmächte brachen seinen Lebensmut. Am 22. Februar 1942 schied er gemeinsam mit Lotte durch Schlaftabletten aus dem Leben. Sie wurden Hand in Hand gefunden. Sein Abschiedsbrief dankte Brasilien und wünschte jenen, die die lange Nacht überlebten, die Morgenröte.`,
        ID: `Pada bulan Januari 1933, Adolf Hitler diangkat sebagai Kanselir Jerman. Dalam beberapa bulan, buku-buku Zweig dilarang, dikategorikan sebagai "seni Yahudi yang merosot", dan dibakar di atas api unggun besar di seluruh Jerman. Pada awal tahun 1934, menyusul perselisihan sipil Austria, polisi Salzburg melakukan penggeledahan di rumah Zweig dengan kedok mencari senjata sosialis yang tersembunyi. Meskipun tidak ada senjata yang ditemukan, penghinaan itu mutlak. Zweig menyadari bahwa supremasi hukum telah mati, dan Austria pasti akan ditelan oleh gelombang Nazi.\n\nIa mengemas barang-barangnya, bercerai dengan Friderike, dan melarikan diri ke London, memulai pengasingan yang menyiksa. Ia melakukan perjalanan terus-menerus, memberikan kuliah anti-fasis di Amerika Selatan, di mana ia diperlakukan seperti raja sastra. Pada tahun 1939, ia menikahi Lotte Altmann, sekretaris mudanya yang setia. Ketika tentara Jerman menaklukkan Prancis dan meluncurkan Blitz ke London, Zweig merasakan dunia psikologisnya hancur. Ia percaya bahwa kehancuran budaya Eropa bersifat final, dan karya hidupnya telah menjadi abu.\n\nPada tahun 1941, mencari kedamaian, Stefan dan Lotte beremigrasi ke Petrópolis, sebuah kota pegunungan yang indah di Brasil. Di sana, di tengah lanskap tropis, Zweig menyelesaikan otobiografi mahakaryanya "Dunia Kemarin" dan kemenangan psikologis terakhirnya, "Chess Story". Terlepas dari kehangatan rakyat Brasil, berita jatuhnya Singapura dan kemajuan tanpa henti dari kekuatan Poros menghancurkan harapan terakhirnya. Pada tanggal 22 Februari 1942, karena tidak sanggup menanggung isolasi spiritual dan bunuh diri dari benua yang dicintainya, Stefan dan Lotte meminum dosis mematikan barbiturat. Mereka ditemukan saling merangkul, meninggalkan catatan bunuh diri yang elegan yang berterima kasih kepada bangsa Brasil dan mendoakan matahari terbit yang cepat bagi mereka yang akan bertahan dari malam gelap yang panjang.`
      }
    }
  ];

  return (
    <section
      id="biography"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-500/[0.01] dark:bg-neutral-900/30 border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-500 font-semibold block mb-2">
            Vita & Historia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            {lang === 'EN' ? 'A Comprehensive Intellectual Biography' : lang === 'DE' ? 'Eine umfassende intellektuelle Biografie' : 'Biografi Intelektual Komprehensif'}
          </h2>
          <div className="h-[1px] w-12 bg-amber-600 dark:bg-amber-500 mx-auto" />
        </div>

        {/* Dynamic Chapter Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Chapter Navigation Stepper */}
          <div className="lg:col-span-4 space-y-3">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-neutral-900 dark:bg-neutral-50 border-neutral-900 dark:border-neutral-50 text-neutral-50 dark:text-neutral-950 shadow-md'
                    : 'bg-white dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 hover:border-amber-500/40'
                }`}
                aria-label={`Read ${ch.title[lang]}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Calendar className="h-3.5 w-3.5 text-amber-500" />
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-amber-500">
                    {ch.period}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold tracking-wide leading-snug">
                  {ch.title[lang]}
                </h3>
              </button>
            ))}
          </div>

          {/* Active Chapter Reader Panel */}
          <div className="lg:col-span-8 bg-white dark:bg-neutral-950/40 rounded-xl border border-amber-500/10 p-8 sm:p-10 shadow-sm relative">
            <div className="absolute top-8 right-8 text-neutral-200 dark:text-neutral-900 pointer-events-none hidden sm:block">
              <Feather className="h-16 w-16" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-neutral-200/50 dark:border-neutral-850/50 pb-6 mb-6">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase font-semibold text-amber-600 dark:text-amber-500 block mb-1">
                  {chapters[activeChapter].period}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {chapters[activeChapter].title[lang]}
                </h3>
                <span className="font-serif text-xs italic text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 mt-2">
                  <MapPin className="h-3 w-3 text-amber-500" />
                  {chapters[activeChapter].location[lang]}
                </span>
              </div>
            </div>

            <h4 className="font-sans text-xs tracking-widest uppercase text-amber-600 dark:text-amber-400 font-semibold mb-4 italic">
              {chapters[activeChapter].subtitle[lang]}
            </h4>

            <p className="font-serif text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
              {chapters[activeChapter].content[lang]}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
