import { TimelineEvent, Book, Quote, Article, GalleryItem, FAQItem } from '../types';

export const ZWEIG_TIMELINE: TimelineEvent[] = [
  {
    year: '1881',
    category: 'life',
    title: {
      EN: 'Birth in Vienna',
      DE: 'Geburt in Wien',
      ID: 'Kelahiran di Wina'
    },
    description: {
      EN: 'Born on November 28 in Vienna, Austria-Hungary, into a wealthy secular Jewish family. His father, Moritz Zweig, was a prosperous textile manufacturer, and his mother, Ida Brettauer, came from a noble banking family.',
      DE: 'Geboren am 28. November in Wien, Österreich-Ungarn, in eine wohlhabende säkulare jüdische Familie. Sein Vater, Moritz Zweig, war ein wohlhabender Textilfabrikant, und seine Mutter, Ida Brettauer, stammte aus einer angesehenen Bankiersfamilie.',
      ID: 'Lahir pada tanggal 28 November di Wina, Austria-Hongaria, dari keluarga Yahudi sekuler yang kaya raya. Ayahnya, Moritz Zweig, adalah seorang pengusaha tekstil yang makmur, dan ibunya, Ida Brettauer, berasal dari keluarga perbankan yang terpandang.'
    }
  },
  {
    year: '1901',
    category: 'work',
    title: {
      EN: 'First Literary Publications',
      DE: 'Erste literarische Veröffentlichungen',
      ID: 'Publikasi Sastra Pertama'
    },
    description: {
      EN: 'Published his first collection of poetry, "Silberne Saiten" (Silver Strings), influenced by Hugo von Hofmannsthal and Rainer Maria Rilke, while studying philosophy at the University of Vienna.',
      DE: 'Veröffentlichte seine erste Gedichtsammlung "Silberne Saiten", beeinflusst von Hugo von Hofmannsthal und Rainer Maria Rilke, während seines Philosophiestudiums an der Universität Wien.',
      ID: 'Menerbitkan kumpulan puisi pertamanya, "Silberne Saiten" (Dawai Perak), yang dipengaruhi oleh Hugo von Hofmannsthal dan Rainer Maria Rilke, saat belajar filsafat di Universitas Wina.'
    }
  },
  {
    year: '1904',
    category: 'life',
    title: {
      EN: 'Doctorate and Wanderlust',
      DE: 'Promotion und Reiselust',
      ID: 'Gelar Doktor dan Gairah Berkelana'
    },
    description: {
      EN: 'Earned his Doctor of Philosophy degree from the University of Vienna with a doctoral thesis on the philosophy of Hippolyte Taine. Began extensive travels across Europe, India, North Africa, and the Americas.',
      DE: 'Promovierte zum Doktor der Philosophie an der Universität Wien mit einer Dissertation über die Philosophie von Hippolyte Taine. Begann ausgedehnte Reisen durch Europa, Indien, Nordafrika und Amerika.',
      ID: 'Meraih gelar Doktor Filsafat dari Universitas Wina dengan disertasi tentang filsafat Hippolyte Taine. Mulai melakukan perjalanan luas ke seluruh Eropa, India, Afrika Utara, dan Amerika.'
    }
  },
  {
    year: '1914',
    category: 'history',
    title: {
      EN: 'The Outbreak of World War I',
      DE: 'Ausbruch des Ersten Weltkriegs',
      ID: 'Pecahnya Perang Dunia I'
    },
    description: {
      EN: 'As patriotic fervor swept Europe, Zweig initially served in the War Archives. He soon became disillusioned by the tragedy, joining Romain Rolland in advocating for pacifism and international cooperation.',
      DE: 'Als der patriotische Aufschrei Europa erfasste, diente Zweig zunächst im Kriegsarchiv. Bald desillusioniert von der Tragödie, schloss er sich Romain Rolland an, um für Pazifismus und internationale Zusammenarbeit einzutreten.',
      ID: 'Ketika semangat patriotik melanda Eropa, Zweig awalnya bertugas di Arsip Perang. Ia segera kecewa oleh tragedi tersebut, bergabung dengan Romain Rolland dalam mengampanyekan pasifisme dan kerja sama internasional.'
    }
  },
  {
    year: '1917',
    category: 'work',
    title: {
      EN: 'Jeremiah: The Pacifist Cry',
      DE: 'Jeremias: Der pazifistische Aufschrei',
      ID: 'Jeremiah: Jeritan Pasifisme'
    },
    description: {
      EN: 'Wrote the anti-war drama "Jeremias" while on leave in Switzerland. The play, set in biblical times, was a direct allegory for the senseless destruction of World War I.',
      DE: 'Schrieb das Antikriegsdrama "Jeremias" während eines Urlaubs in der Schweiz. Das in biblischen Zeiten angesiedelte Stück war eine direkte Allegorie auf die sinnlose Zerstörung des Ersten Weltkriegs.',
      ID: 'Menulis drama anti-perang "Jeremias" saat cuti di Swiss. Drama yang berlatar zaman alkitabiah ini merupakan alegori langsung atas kehancuran tanpa akhir dari Perang Dunia I.'
    }
  },
  {
    year: '1919',
    category: 'life',
    title: {
      EN: 'Salzburg Years & International Fame',
      DE: 'Salzburger Jahre & Internationaler Ruhm',
      ID: 'Tahun-Tahun di Salzburg & Ketenaran Internasional'
    },
    description: {
      EN: 'Moved to the "Paschinger Schlössl" villa on the Kapuzinerberg in Salzburg. Over the next fifteen years, this house became a vibrant cultural hub, hosting intellectual luminaries like Thomas Mann, Albert Einstein, and Sigmund Freud.',
      DE: 'Zog in das "Paschinger Schlössl" auf dem Kapuzinerberg in Salzburg. In den folgenden fünfzehn Jahren wurde dieses Haus zu einem lebendigen Kulturzentrum, in dem intellektuelle Größen wie Thomas Mann, Albert Einstein und Sigmund Freud zu Gast waren.',
      ID: 'Pindah ke vila "Paschinger Schlössl" di Kapuzinerberg, Salzburg. Selama lima belas tahun berikutnya, rumah ini menjadi pusat budaya yang dinamis, menjamu tokoh-tokoh intelektual terkemuka seperti Thomas Mann, Albert Einstein, dan Sigmund Freud.'
    }
  },
  {
    year: '1927',
    category: 'work',
    title: {
      EN: 'Decisive Moments in History',
      DE: 'Sternstunden der Menschheit',
      ID: 'Momen-Momen Penentu Sejarah'
    },
    description: {
      EN: 'Published "Sternstunden der Menschheit" (Decisive Moments in History), a collection of historical miniatures describing critical turning points in human civilization. It remains one of his most beloved and translated books worldwide.',
      DE: 'Veröffentlichte "Sternstunden der Menschheit", eine Sammlung historischer Miniaturen, die entscheidende Wendepunkte der menschlichen Zivilisation beschreiben. Bis heute eines seiner beliebtesten Werke.',
      ID: 'Menerbitkan "Sternstunden der Menschheit" (Momen-Momen Penentu Sejarah), sebuah koleksi miniatur sejarah yang menggambarkan titik balik krusial dalam peradaban manusia. Karya ini tetap menjadi salah satu bukunya yang paling dicintai dan diterjemahkan di seluruh dunia.'
    }
  },
  {
    year: '1934',
    category: 'history',
    title: {
      EN: 'Exile Begins: Flight to London',
      DE: 'Beginn des Exils: Flucht nach London',
      ID: 'Awal Pengasingan: Melarikan Diri ke London'
    },
    description: {
      EN: 'With the rise of National Socialism in Germany, Zweig\'s home was searched by Austrian police. Realizing the impending danger for Jewish intellectuals, he packed his bags and emigrated to London, leaving his beloved Austria.',
      DE: 'Mit dem Aufstieg des Nationalsozialismus in Deutschland wurde Zweigs Haus von der österreichischen Polizei durchsucht. Er erkannte die Gefahr für jüdische Intellektuelle und emigrierte nach London.',
      ID: 'Dengan bangkitnya Nasional Sosialisme di Jerman, rumah Zweig digeledah oleh polisi Austria. Menyadari bahaya yang mengancam para intelektual Yahudi, ia mengemas barang-barangnya dan beremigrasi ke London, meninggalkan Austria yang dicintainya.'
    }
  },
  {
    year: '1940',
    category: 'life',
    title: {
      EN: 'Crossing the Atlantic',
      DE: 'Überquerung des Atlantiks',
      ID: 'Menyeberangi Samudra Atlantik'
    },
    description: {
      EN: 'As Nazi Germany invaded France and advanced across Western Europe, Zweig and his second wife, Lotte Altmann, took British citizenship, then sailed to New York, before finding a temporary haven in Petrópolis, Brazil.',
      DE: 'Als Nazi-Deutschland Frankreich überfiel, nahmen Zweig und seine zweite Frau, Lotte Altmann, die britische Staatsbürgerschaft an, reisten nach New York und fanden schließlich Zuflucht in Petrópolis, Brasilien.',
      ID: 'Ketika Jerman Nazi menginvasi Prancis dan bergerak maju di Eropa Barat, Zweig dan istri keduanya, Lotte Altmann, mengambil kewarganegaraan Inggris, kemudian berlayar ke New York, sebelum akhirnya menemukan tempat perlindungan sementara di Petrópolis, Brasil.'
    }
  },
  {
    year: '1942',
    category: 'work',
    title: {
      EN: 'The Ultimate Masterpieces and Tragic End',
      DE: 'Die letzten Meisterwerke und tragisches Ende',
      ID: 'Karya Agung Terakhir dan Akhir yang Tragis'
    },
    description: {
      EN: 'Completed his legendary autobiography "The World of Yesterday" and his final novella "Chess Story". Overwhelmed by despair over the perceived destruction of European culture, he and Lotte took their own lives in Petrópolis on February 22.',
      DE: 'Vollendete seine Autobiographie "Die Welt von Gestern" und seine letzte Novelle "Schachnovelle". Aus Verzweiflung über die Zerstörung der europäischen Kultur nahmen er und Lotte sich am 22. Februar das Leben.',
      ID: 'Menyelesaikan otobiografi legendarisnya "Dunia Kemarin" dan novella terakhirnya "Chess Story". Dipenuhi keputusasaan atas kehancuran budaya Eropa yang mereka saksikan, ia dan Lotte mengakhiri hidup mereka di Petrópolis pada tanggal 22 Februari.'
    }
  }
];

export const ZWEIG_BOOKS: Book[] = [
  {
    id: 'world-of-yesterday',
    title: {
      EN: 'The World of Yesterday',
      DE: 'Die Welt von Gestern',
      ID: 'Dunia Kemarin'
    },
    originalTitle: 'Die Welt von Gestern: Erinnerungen eines Europäers',
    year: 1942,
    genres: ['Autobiography', 'History', 'Memoir'],
    coverUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg', // we will use this high-quality antique desk cover for illustration!
    description: {
      EN: 'Stefan Zweig’s ultimate masterpiece, completed shortly before his death. This autobiography acts as an emotional, cultural, and political map of Europe from the late 19th-century Golden Age of Security in Vienna to the devastating abyss of two World Wars. It represents a poignant, timeless eulogy for a borderless, humanist continent that was consumed by nationalist fanaticism.',
      DE: 'Stefan Zweigs ultimatives Meisterwerk, kurz vor seinem Tod vollendet. Diese Autobiografie fungiert als emotionale, kulturelle und politische Landkarte Europas vom späten 19. Jahrhundert, der "Goldenen Epoche der Sicherheit" in Wien, bis hin zum verheerenden Abgrund zweier Weltkriege. Es ist ein ergreifender, zeitloser Nachruf auf einen grenzenlosen, humanistischen Kontinent.',
      ID: 'Karya agung terakhir Stefan Zweig, yang diselesaikan sesaat sebelum kematiannya. Otobiografi ini berfungsi sebagai peta emosional, budaya, dan politik Eropa dari akhir abad ke-19 Zaman Keemasan Keamanan di Wina hingga jurang kehancuran dari dua Perang Dunia. Ini adalah elegi pedih dan abadi untuk benua humanis tanpa batas yang hancur oleh fanatisme nasionalis.'
    },
    quotes: [
      {
        EN: 'Against my will, I have been witness to the most gigantic defeat of reason.',
        DE: 'Ich bin gegen meinen Willen Zeuge der furchtbarsten Niederlage der Vernunft geworden.',
        ID: 'Di luar kehendak saya, saya telah menjadi saksi dari kekalahan akal budi yang paling raksasa.'
      },
      {
        EN: 'Every shadow is, in the last analysis, also the child of light.',
        DE: 'Jeder Schatten ist im letzten Grunde doch auch Kind des Lichts.',
        ID: 'Setiap bayangan, pada analisis terakhir, adalah juga anak dari cahaya.'
      }
    ]
  },
  {
    id: 'chess-story',
    title: {
      EN: 'Chess Story / The Royal Game',
      DE: 'Schachnovelle',
      ID: 'Kisah Catur / Novel Catur'
    },
    originalTitle: 'Schachnovelle',
    year: 1942,
    genres: ['Novella', 'Psychological Fiction'],
    coverUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg',
    description: {
      EN: 'A chilling psychological novella that explores the devastating trauma of solitary confinement under Gestapo interrogation. Dr. B, a captive who kept his sanity by secretly stealing a chess manual and playing millions of mental matches against himself, faces the cold, calculating world champion Czentovic on an ocean liner. It serves as a brilliant allegory of human intellect battling the brutal, mechanized force of totalitarianism.',
      DE: 'Eine beklemmende psychologische Novelle, die das verheerende Trauma der Einzelhaft unter Gestapo-Verhör erforscht. Dr. B, ein Gefangener, der seinen Verstand bewahrte, indem er heimlich ein Schachlehrbuch stahl und Millionen von mentalen Partien gegen sich selbst spielte, tritt auf einem Ozeandampfer gegen den kalten, berechnenden Weltmeister Czentovic an. Eine brillante Allegorie des menschlichen Geistes im Kampf gegen den totalitären Stumpfsinn.',
      ID: 'Sebuah novella psikologis menegangkan yang mengeksplorasi trauma mengerikan dari sel isolasi di bawah interogasi Gestapo. Dr. B, seorang tahanan yang menjaga kewarasannya dengan mencuri buku panduan catur secara sembunyi-sembunyi dan memainkan jutaan pertandingan mental melawan dirinya sendiri, berhadapan dengan juara dunia yang dingin dan kalkulatif, Czentovic, di atas kapal samudra. Ini adalah alegori brilian tentang kecerdasan manusia melawan kekuatan brutal dan mekanis dari totalitarianisme.'
    },
    quotes: [
      {
        EN: 'We knew that any form of systematic thinking, even if it is only playing chess, can act as a lifesaver.',
        DE: 'Wir wußten, daß jede Art von systematischer Beschäftigung, und sei es auch nur das Schachspiel, dem Menschen zum Rettungsanker werden kann.',
        ID: 'Kami tahu bahwa segala bentuk pemikiran sistematis, bahkan jika itu hanya bermain catur, dapat bertindak sebagai penyelamat hidup.'
      }
    ]
  },
  {
    id: 'decisive-moments',
    title: {
      EN: 'Decisive Moments in History',
      DE: 'Sternstunden der Menschheit',
      ID: 'Momen-Momen Penentu Sejarah'
    },
    originalTitle: 'Sternstunden der Menschheit',
    year: 1927,
    genres: ['Historical Essays', 'Short Stories'],
    coverUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg',
    description: {
      EN: 'A brilliant collection of historical miniatures capturing highly dramatic, focal points in human history. From the fall of Constantinople and Rouget de Lisle composing "La Marseillaise" in a single night, to Waterloo, Goethe’s final love, and Lenin’s sealed train ride, Zweig illustrates how single moments, single decisions, or single hours can shape the destiny of centuries.',
      DE: 'Eine brillante Sammlung historischer Miniaturen, die hochdramatische Brennpunkte der Menschheitsgeschichte festhalten. Vom Fall Konstantinopels über Rouget de Lisles nächtliche Komposition der "Marseillaise" bis hin zu Waterloo, Goethes letzter Liebe und Lenins versiegeltem Zug zeigt Zweig, wie ein einziger Augenblick das Schicksal von Jahrhunderten formen kann.',
      ID: 'Koleksi miniatur sejarah yang brilian yang menangkap titik-titik fokus yang sangat dramatis dalam sejarah manusia. Dari jatuhnya Konstantinopel dan Rouget de Lisle yang menggubah lagu "La Marseillaise" dalam satu malam, hingga Waterloo, cinta terakhir Goethe, dan perjalanan kereta tertutup Lenin, Zweig menggambarkan bagaimana momen tunggal, keputusan tunggal, atau jam tunggal dapat membentuk takdir berabad-abad.'
    },
    quotes: [
      {
        EN: 'Such dramatic moments of destiny, where a single, irrevocable decision is compressed into a single day or hour, are rare in history.',
        DE: 'Solche dramatisch geballten, solche schicksalsträchtigen Stunden, in denen eine einzige unumstößliche Entscheidung auf ein einziges Datum zusammengedrängt ist, sind selten im Leben und selten im Lauf der Geschichte.',
        ID: 'Momen takdir yang dramatis seperti itu, di mana keputusan tunggal yang tidak dapat ditarik kembali dipadatkan menjadi satu hari atau satu jam saja, sangat langka dalam sejarah.'
      }
    ]
  },
  {
    id: 'beware-of-pity',
    title: {
      EN: 'Beware of Pity',
      DE: 'Ungeduld des Herzens',
      ID: 'Waspada Terhadap Rasa Kasihan'
    },
    originalTitle: 'Ungeduld des Herzens',
    year: 1939,
    genres: ['Novel', 'Psychological Realism'],
    coverUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg',
    description: {
      EN: 'Zweig\'s only completed full-length novel. Set on the eve of World War I, it tells the story of Anton Hofmiller, a young cavalry officer who is drawn into the life of Edith von Kekesfalva, a wealthy paralytic girl. Hofmiller is driven into a tragic engagement not by genuine affection, but by weak, sentimental sympathy—a destructive form of "impatience of the heart" that eventually leads to catastrophe.',
      DE: 'Zweigs einziger vollendeter Roman. Am Vorabend des Ersten Weltkriegs angesiedelt, erzählt er die Geschichte von Anton Hofmiller, einem jungen Offizier, der in das Leben von Edith von Kekesfalva gerät, einem gelähmten reichen Mädchen. Hofmiller wird nicht aus Liebe, sondern aus schwachem, sentimentalem Mitleid – der zerstörerischen "Ungeduld des Herzens" – in eine tragische Verlobung gedrängt.',
      ID: 'Satu-satunya novel panjang lengkap yang diselesaikan oleh Zweig. Berlatar di ambang Perang Dunia I, novel ini mengisahkan Anton Hofmiller, seorang perwira kavaleri muda yang terseret ke dalam kehidupan Edith von Kekesfalva, seorang gadis lumpuh yang kaya raya. Hofmiller terdorong ke dalam pertunangan yang tragis bukan karena kasih sayang yang tulus, melainkan karena rasa kasihan sentimental yang lemah—suatu bentuk "ketidaksabaran hati" yang merusak yang akhirnya berujung pada bencana.'
    },
    quotes: [
      {
        EN: 'There are two kinds of pity. One, the weak-minded and sentimental... and the other, which is the only one that counts, unsentimental but creative.',
        DE: 'Es gibt zwei Arten von Mitleid. Das eine, das schwachmütige und sentimentale... und das andere, das einzig zählt, das unentschlossene, aber schöpferische.',
        ID: 'Ada dua jenis rasa kasihan. Yang pertama, yang lemah pikiran dan sentimental... dan yang lainnya, yang merupakan satu-satunya yang berarti, tidak sentimental tetapi kreatif.'
      }
    ]
  }
];

export const ZWEIG_QUOTES: Quote[] = [
  {
    id: 'q1',
    text: {
      EN: 'No nation can be secure if it does not try to understand other nations.',
      DE: 'Kein Volk kann sicher sein, wenn es nicht versucht, die anderen Völker zu verstehen.',
      ID: 'Tidak ada bangsa yang dapat merasa aman jika tidak mencoba untuk memahami bangsa-bangsa lain.'
    },
    source: {
      EN: 'Address to the International PEN Club, 1932',
      DE: 'Ansprache vor dem Internationalen PEN-Club, 1932',
      ID: 'Pidato di International PEN Club, 1932'
    }
  },
  {
    id: 'q2',
    text: {
      EN: 'Only the person who has experienced light and darkness, war and peace, rise and fall, has truly lived.',
      DE: 'Erst wer Licht und Dunkel, Krieg und Frieden, Aufstieg und Niedergang erfahren hat, der hat wahrhaft gelebt.',
      ID: 'Hanya orang yang telah mengalami cahaya dan kegelapan, perang dan perdamaian, kebangkitan dan kejatuhan, yang benar-benar hidup.'
    },
    source: {
      EN: 'The World of Yesterday',
      DE: 'Die Welt von Gestern',
      ID: 'Dunia Kemarin'
    }
  },
  {
    id: 'q3',
    text: {
      EN: 'Even from the abyss of our despair, we can still hear the whisper of eternity.',
      DE: 'Selbst aus dem Abgrund unserer Verzweiflung können wir noch das Flüstern der Ewigkeit vernehmen.',
      ID: 'Bahkan dari jurang keputusasaan kita, kita masih bisa mendengar bisikan keabadian.'
    },
    source: {
      EN: 'Letter to Friderike Zweig, 1941',
      DE: 'Brief an Friderike Zweig, 1941',
      ID: 'Surat untuk Friderike Zweig, 1941'
    }
  },
  {
    id: 'q4',
    text: {
      EN: 'The greatest thing in the world is to know how to belong to oneself.',
      DE: 'Das Größte auf der Welt ist zu wissen, wie man sich selbst gehört.',
      ID: 'Hal terbesar di dunia adalah mengetahui bagaimana cara memiliki diri sendiri.'
    },
    source: {
      EN: 'Montaigne, 1942',
      DE: 'Montaigne, 1942',
      ID: 'Montaigne, 1942'
    }
  }
];

export const ZWEIG_ARTICLES: Article[] = [
  {
    id: 'tragedy-of-europe',
    category: 'Analysis',
    publishedDate: 'July 10, 2026',
    readTime: '12 min read',
    author: 'Prof. Dr. Helena von Radowitz',
    coverUrl: '/src/assets/images/vienna_golden_age_1784080746981.jpg',
    title: {
      EN: 'The Tragedy of Europe: Stefan Zweig\'s Undying Vision of Unity',
      DE: 'Die Tragödie Europas: Stefan Zweigs unsterbliche Vision der Einheit',
      ID: 'Tragedi Eropa: Visi Persatuan Stefan Zweig yang Abadi'
    },
    excerpt: {
      EN: 'An in-depth scholarly examination of how Stefan Zweig championed a borderless, culturally integrated Europe and why his warning against extreme nationalism remains crucial in our contemporary multipolar world.',
      DE: 'Eine tiefgehende wissenschaftliche Untersuchung darüber, wie sich Stefan Zweig für ein grenzenloses, kulturell integriertes Europa einsetzte und warum seine Warnung vor extremem Nationalismus heute wichtiger ist denn je.',
      ID: 'Sebuah tinjauan akademis mendalam tentang bagaimana Stefan Zweig memperjuangkan Eropa tanpa batas yang terintegrasi secara budaya, dan mengapa peringatannya terhadap nasionalisme ekstrem tetap krusial di dunia kontemporer kita.'
    },
    content: {
      EN: `Stefan Zweig was, above all things, a passionate citizen of the world and a tireless champion of European unity. Born in the vibrant, multinational hub of late-nineteenth-century Vienna, he experienced first-hand a civilization that prioritized art, philosophy, music, and borderless exchange. The Austro-Hungarian Empire, despite its institutional flaws, served as a micro-laboratory of diverse ethnicities, languages, and cultures living under one unified framework. For Zweig, this environment forged a deep humanist conviction: that the boundaries dividing human beings are artificial constructs, and that spiritual and cultural kinship transcends any passport or geographical line.\n\n### The Golden Age of Security and Its Sudden Shattering\nIn his posthumously published memoir, *The World of Yesterday*, Zweig refers to the pre-1914 era as the "Golden Age of Security" (*Goldene Zeitalter der Sicherheit*). It was a world where progress seemed linear, science was solving ancient ills, and currency could be exchanged anywhere without restrictions. To travel across borders required no passports or visas; the continent felt like a shared home. \n\nHowever, this optimistic structure rested on a fragile crust. In 1914, the volcano of national chauvinism erupted, dragging the entire continent into the industrial slaughter of World War I. For Zweig, this was not merely a military conflict; it was a devastating civilizational bankruptcy. Overnight, friends turned into enemies, and the European intellectual community split along battlefront lines. Zweig’s response was a resolute refusal to participate in the patriotic hatred. He relocated to Switzerland, collaborating with French pacifist writer Romain Rolland and creating *Jeremiah*, a sweeping biblical tragedy that served as an explicit warning against patriotic mass hysteria.\n\n### The Interwar Years: Building a Spiritual Academy\nThroughout the 1920s, from his home in Salzburg, Zweig attempted to reconstruct the shattered bridges of Europe. He believed that political treaties (like the League of Nations) were insufficient on their own; they required a corresponding "spiritual confederation." He envisioned a European academy of intellectuals, writers, and artists who would translate, lecture, and travel constantly, creating a rich tapestry of mutual cultural appreciation.\n\nHis Salzburg villa, the "Paschinger Schlössl", became a physical embodiment of this ideal. It was dubbed the "Villa of Europe," welcoming international guests like Thomas Mann, H.G. Wells, Sigmund Freud, Arthur Schnitzler, and James Joyce. Zweig argued that by translating each other's works, Europeans would realize that their local differences were minor variations of a single, majestic human chord.\n\n### The Rise of Barbarism and the Bitter Exile\nThe tragedy of Zweig's vision lies in its collision with the brutal realities of the 1930s. The economic collapse of the Great Depression fueled the fires of National Socialism in Germany. For a refined humanist who believed in the inevitable triumph of reason, the sudden return of medieval book burnings, racial persecution, and state-sponsored violence was a paralyzing shock. When the Salzburg police searched his house under political pretenses in 1934, Zweig realized that the old Europe was dead. He packed his suitcases and embarked on a painful exile that would take him from London to New York, and finally to South America.\n\nIn Brazil, although warmly welcomed by the government and public, Zweig could not escape the ghosts of his dying homeland. To him, the destruction of European culture was absolute, a final eclipse of human reason. His suicide in 1942 was the tragic, ultimate protest of an intellectual who refused to live in a world where hatred had triumphed over humanity.\n\n### Relevance in the 21st Century\nToday, as the modern world faces a resurgence of populist isolationism, border walls, and cultural tribalism, Zweig’s warnings ring louder than ever. He teaches us that peace is not a passive, permanent state, but an active, creative endeavor that requires constant vigilance, empathy, and intellectual solidarity. The "World of Yesterday" is not just a nostalgic relic; it is a vital, living prophecy.`,
      DE: `Stefan Zweig war vor allem ein leidenschaftlicher Weltbürger und ein unermüdlicher Verfechter der europäischen Einheit. Geboren in der pulsierenden, multinationalen Metropole des späten 19. Jahrhunderts in Wien, erlebte er aus erster Hand eine Zivilisation, die Kunst, Philosophie, Musik und grenzenlosen Austausch priorisierte. Das österreichisch-ungarische Reich diente trotz seiner institutionellen Mängel als Mikrolaboratorium verschiedenster Ethnien, Sprachen und Kulturen. Für Zweig prägte dieses Umfeld eine tiefe humanistische Überzeugung: dass die Grenzen, die Menschen trennen, künstliche Konstrukte sind.\n\n### Das goldene Zeitalter der Sicherheit und seine Zerschlagung\nIn seinen posthum veröffentlichten Memoiren *Die Welt von Gestern* bezeichnet Zweig die Ära vor 1914 als das "Goldene Zeitalter der Sicherheit". Es war eine Welt, in der der Fortschritt linear schien und man ohne Reisepässe reisen konnte. Doch 1914 brach der Vulkan des nationalen Chauvinismus aus und zog den gesamten Kontinent in das industrielle Schlachten des Ersten Weltkriegs. Zweig weigerte sich, am patriotischen Hass teilzunehmen, zog in die Schweiz und schuf mit *Jeremias* ein pazifistisches Mahnmal.\n\n### Die Salzburger Jahre: Eine geistige Akademie\nIn den 1920er Jahren versuchte Zweig von Salzburg aus, die zerstörten Brücken Europas wieder aufzubauen. Er war überzeugt, dass politische Verträge allein nicht ausreichten; es bedurfte einer "geistigen Konföderation". Seine Salzburger Villa wurde zum lebendigen "Haus Europas", in dem internationale Geister wie Thomas Mann, Albert Einstein und Sigmund Freud verkehrten.\n\n### Der Aufstieg des Barbarismus und das bittere Exil\nDie Tragödie von Zweigs Vision liegt in der Kollision mit der brutalen Realität der 1930er Jahre. Als die Salzburger Polizei 1934 sein Haus durchsuchte, erkannte Zweig, dass das alte Europa verloren war. Es folgte ein schmerzhaftes Exil, das ihn schließlich nach Brasilien führte, wo er sich 1942 das Leben nahm – ein tragischer Protest eines Humanisten, der die Zerstörung seiner geistigen Heimat nicht verwinden konnte.`,
      ID: `Stefan Zweig, di atas segalanya, adalah seorang warga dunia yang bersemangat dan pembela persatuan Eropa yang tak kenal lelah. Lahir di pusat multinasional yang dinamis di Wina pada akhir abad ke-19, ia mengalami langsung sebuah peradaban yang memprioritaskan seni, filsafat, musik, dan pertukaran tanpa batas. Kekaisaran Austria-Hongaria, terlepas dari kelemahan institusionalnya, berfungsi sebagai laboratorium mikro dari berbagai etnis, bahasa, dan budaya yang hidup di bawah satu kerangka kerja yang bersatu. Bagi Zweig, lingkungan ini membentuk keyakinan humanis yang mendalam: bahwa batas-batas yang membagi manusia adalah konstruksi buatan, dan bahwa kekerabatan spiritual serta budaya melampaui paspor atau garis geografis apa pun.\n\n### Zaman Keemasan Keamanan dan Kehancurannya yang Tiba-Tiba\nDalam otobiografinya yang diterbitkan secara anumerta, *Dunia Kemarin*, Zweig menyebut era sebelum 1914 sebagai "Zaman Keemasan Keamanan" (*Goldene Zeitalter der Sicherheit*). Itu adalah dunia di mana kemajuan tampak linier, ilmu pengetahuan memecahkan penyakit-penyakit kuno, dan mata uang dapat ditukarkan di mana saja tanpa batasan. Untuk bepergian melintasi perbatasan tidak memerlukan paspor atau visa; benua itu terasa seperti rumah bersama.\n\nNamun, struktur optimis ini bertumpu pada kerak yang rapuh. Pada tahun 1914, gunung berapi chauvinisme nasional meletus, menyeret seluruh benua ke dalam pembantaian industri Perang Dunia I. Bagi Zweig, ini bukan sekadar konflik militer; ini adalah kebangkrutan peradaban yang menghancurkan. Semalam, teman-teman berubah menjadi musuh, dan komunitas intelektual Eropa terpecah di sepanjang garis medan perang. Tanggapan Zweig adalah penolakan tegas untuk berpartisipasi dalam kebencian patriotik. Ia pindah ke Swiss, berkolaborasi dengan penulis pasifis Prancis Romain Rolland dan menciptakan *Jeremiah*, sebuah tragedi alkitabiah yang berfungsi sebagai peringatan eksplisit terhadap histeria massa patriotik.\n\n### Relevansi di Abad ke-21\nHari ini, ketika dunia modern menghadapi kebangkitan isolasionisme populis, tembok perbatasan, dan kesukuan budaya, peringatan Zweig berbunyi lebih keras dari sebelumnya. Ia mengajarkan kita bahwa perdamaian bukanlah keadaan pasif yang permanen, melainkan upaya kreatif aktif yang membutuhkan kewaspadaan konstan, empati, dan solidaritas intelektual. "Dunia Kemarin" bukan sekadar peninggalan nostalgia; itu adalah ramalan yang hidup dan vital.`
    }
  },
  {
    id: 'deciphering-royal-game',
    category: 'Literary Criticism',
    publishedDate: 'June 18, 2026',
    readTime: '9 min read',
    author: 'Elena Brettauer-Zweig, MA',
    coverUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg',
    title: {
      EN: 'Mental Chess: Deciphering the Psychology of "The Royal Game"',
      DE: 'Mentales Schach: Die Psychologie der "Schachnovelle" entschlüsseln',
      ID: 'Catur Mental: Menguraikan Psikologi dari "Kisah Catur"'
    },
    excerpt: {
      EN: 'An analysis of Dr. B\'s psychological split-brain condition in Stefan Zweig’s final novella, examining the thin line between survival mechanism and descent into psychiatric madness.',
      DE: 'Eine Analyse von Dr. Bs psychologischer Spaltung in Stefan Zweigs letzter Novelle. Eine Untersuchung des schmalen Grats zwischen Überlebensmechanismus und Wahnsinn.',
      ID: 'Sebuah analisis tentang kondisi psikologis otak terbelah dari Dr. B dalam novella terakhir Stefan Zweig, menguji garis tipis antara mekanisme bertahan hidup dan kejatuhan ke dalam kegilaan psikiatris.'
    },
    content: {
      EN: `*Schachnovelle* (known in English as *Chess Story* or *The Royal Game*), written in exile in Brazil in 1941 and published posthumously, is Stefan Zweig\'s parting shot to the world. On its surface, the novella narrates an unlikely chess tournament on a luxury ocean liner traveling from New York to Buenos Aires. But beneath the surface lies a terrifying, razor-sharp psychological exploration of fascism, survival, and the fragmentation of the human mind under extreme trauma.\n\n### The Clash of Two Worlds\nAt the core of the novella is the dramatic confrontation between two vastly different chess players:\n\n1. **Mirko Czentovic**: The reigning world chess champion. He is illiterate, slow-witted, money-grubbing, and utterly incapable of abstract thought or imagination outside the 64 squares of the chessboard. He represents cold, mechanized, brutal force—an explicit literary personification of the rising totalitarian regimes of the 1930s.\n2. **Dr. B**: An aristocratic Austrian lawyer who has recently escaped from months of solitary confinement in a hotel room converted into a prison by the Gestapo. He is intellectual, refined, sensitive, and deeply traumatized. He represents the old, humanist European intelligentsia.\n\n### Solitary Confinement and the "Chess Poison"\nTo understand Dr. B's genius, one must understand the torture he endured. Unlike physical concentration camps, the Gestapo subjected Dr. B to absolute nothingness. He was confined to a room with nothing but a bed, a chair, and a window looking out onto a brick wall. No books, no pencil, no paper, no human voice. This total sensory deprivation was designed to slowly disintegrate the subject's mind until they willingly confessed their clients' financial secrets.\n\nIn a moment of desperate courage, while waiting for an interrogation, Dr. B manages to steal a book from a military coat pocket. It turns out to be a chess manual containing 150 master games. At first, this book is his savior. He constructs a chessboard out of breadcrumbs and uses his bedsheets to map the lines. He memorizes the games, filling the void of his cell with vibrant, systematic intellectual activity.\n\nBut once the 150 games are exhausted, Dr. B falls into a dangerous obsession. To keep his brain active, he begins to play against himself. He splits his mind into two distinct personas: White (the ego) and Black (the counter-ego). This mental division, which he calls "chess-poisoning" (*Schachfieber*), leads to a severe psychiatric split. The mind is locked in a civil war against itself. What began as a tool for mental survival transforms into a feverish, destructive madness.\n\n### The Board as a Battleground\nWhen Dr. B accidentally intervenes in a match on the steamer, preventing a group of wealthy amateurs from being crushed by Czentovic, his hidden genius is revealed. He can calculate moves ahead with lightning speed, seeing the board not as a physical object, but as a dynamic space of pure mathematical relations.\n\nHowever, when forced to play Czentovic in a real-world, face-to-face match, the old trauma resurfaces. Czentovic, realizing his opponent's unstable excitability, deliberately plays with agonizing slowness. This delay drives Dr. B back into his mental cell. His mind starts running a thousand parallel games at once, rapidly approaching the catastrophic "split-brain" state of his prison days.\n\nIn the end, Dr. B realizes the danger just in time. He forfeits the match, bows elegantly, and steps away from the board forever, leaving the brute Czentovic with a hollow victory. \n\n### The Ultimate Allegory\nZweig's novella is a masterclass in psychological realism. It warns us that the intellectual, humanistic spirit of Europe, while vastly superior in beauty and complexity to the brute strength of totalitarianism, is highly fragile. Under prolonged, systematic torture and isolation, even the most brilliant mind can be driven to destroy itself. It remains a sobering, beautifully written testament to the psychological scars left by the dark forces of the twentieth century.`,
      DE: `Die *Schachnovelle*, geschrieben 1941 im brasilianischen Exil, ist Stefan Zweigs literarisches Vermächtnis. Vordergründig erzählt sie von einem ungewöhnlichen Schachturnier auf einem Ozeandampfer. Doch darunter liegt eine furchterregende psychologische Erkundung des Faschismus und der Fragmentierung des menschlichen Geistes.\n\n### Der Zusammenprall zweier Welten\nIm Zentrum steht die Konfrontation zwischen:\n- **Mirko Czentovic**: Der amtierende Schachweltmeister. Er ist dumm, geldgierig und unfähig zu abstraktem Denken außerhalb des Bretts. Er verkörpert die kalte, mechanisierte Gewalt – den Totalitarismus.\n- **Dr. B.**: Ein feinsinniger Wiener Anwalt, der der Gestapo-Einzelhaft entkommen ist. Er repräsentiert die alte, humanistische europäische Intelligenz.\n\n### Die "Schachvergiftung"\nIn der Isolationshaft stahl Dr. B. ein Schachbuch mit 150 Meisterpartien, um dem geistigen Nichts zu entfliehen. Später begann er, im Kopf gegen sich selbst zu spielen, und spaltete sein Ich in "Weiß" und "Schwarz". Diese mentale Spaltung führte zu einem zerstörerischen "Schachfieber".\n\nAm Ende des Spiels gegen Czentovic auf dem Dampfer erkennt Dr. B. die drohende Gefahr eines erneuten Nervenzusammenbruchs. Er bricht die Partie ab und rettet sich selbst vor dem Wahnsinn. Eine zeitlose Parabel über die Fragilität des Geistes gegenüber der Barbarei.`,
      ID: `*Schachnovelle* (diterjemahkan sebagai *Kisah Catur*), ditulis dalam pengasingan di Brasil pada tahun 1941 dan diterbitkan secara anumerta, adalah karya sastra terakhir Stefan Zweig sebelum menutup usia. Di permukaannya, novella ini menceritakan turnamen catur yang tidak biasa di atas kapal pesiar mewah dari New York ke Buenos Aires. Namun di balik itu, terdapat eksplorasi psikologis yang mengerikan tentang fasisme, pertahanan hidup, dan fragmentasi pikiran manusia di bawah trauma ekstrem.\n\n### Benturan Dua Dunia\nInti dari novella ini adalah konfrontasi dramatis antara dua pemain catur yang sangat berbeda:\n1. **Mirko Czentovic**: Sang juara dunia catur saat ini. Ia buta huruf secara fungsional, lambat berpikir, dan tidak mampu berpikir abstrak di luar 64 kotak papan catur. Ia mewakili kekuatan mekanis yang dingin dan brutal—personifikasi sastra eksplisit dari rezim totalitarian yang bangkit pada tahun 1930-an.\n2. **Dr. B**: Seorang pengacara bangsawan Austria yang baru saja melarikan diri dari kurungan isolasi Gestapo di kamar hotel yang diubah menjadi penjara. Ia intelektual, halus, dan sangat trauma. Ia mewakili inteligensia Eropa lama yang humanis.\n\n### Kurungan Isolasi dan "Racun Catur"\nUntuk memahami kejeniusan Dr. B, kita harus memahami siksaan yang dialaminya. Gestapo menempatkan Dr. B dalam ketiadaan mutlak. Ia dikurung di ruangan tanpa buku, pensil, kertas, atau suara manusia. Deprivasi sensorik total ini dirancang untuk menghancurkan pikiran subjek secara perlahan sampai mereka bersedia membocorkan rahasia keuangan klien mereka.\n\nDalam keputusasaan, Dr. B berhasil mencuri sebuah buku panduan catur dari saku mantel militer saat menunggu interogasi. Buku ini berisi 150 pertandingan master. Buku ini menjadi penyelamatnya. Namun setelah 150 permainan habis dihafalkan, ia mulai bermain melawan dirinya sendiri. Ia membagi pikirannya menjadi dua persona: Putih (ego) dan Hitam (kontra-ego). Pembelahan mental ini memicu kegilaan psikiatris yang merusak.`
    }
  }
];

export const ZWEIG_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    year: 'c. 1900',
    imageUrl: '/src/assets/images/stefan_zweig_portrait_1784080734252.jpg',
    title: {
      EN: 'Stefan Zweig in His Youth',
      DE: 'Stefan Zweig in seiner Jugend',
      ID: 'Stefan Zweig di Masa Mudanya'
    },
    description: {
      EN: 'An elegant portrait of the young writer in Vienna, embarking on his literary career surrounded by coffeehouse intellectuals.',
      DE: 'Ein elegantes Porträt des jungen Schriftstellers in Wien, am Beginn seiner literarischen Karriere im Kreis der Kaffeehaus-Intellektuellen.',
      ID: 'Potret elegan dari penulis muda di Wina, memulai karier sastranya di tengah-tengah intelektual kedai kopi.'
    }
  },
  {
    id: 'g2',
    year: '1925',
    imageUrl: '/src/assets/images/vienna_golden_age_1784080746981.jpg',
    title: {
      EN: 'The Salzburg Sanctuary',
      DE: 'Das Salzburger Refugium',
      ID: 'Tempat Perlindungan Salzburg'
    },
    description: {
      EN: 'Watercolor rendering of the cultural landscape of Salzburg, where Zweig hosted the intellectual elite of interwar Europe.',
      DE: 'Aquarellierte Darstellung der Salzburger Kulturlandschaft, wo Zweig die intellektuelle Elite des zwischenkriegszeitlichen Europas empfing.',
      ID: 'Lukisan cat air lanskap budaya Salzburg, tempat Zweig menjamu elit intelektual Eropa pasca-perang.'
    }
  },
  {
    id: 'g3',
    year: '1942',
    imageUrl: '/src/assets/images/antique_books_desk_1784080765389.jpg',
    title: {
      EN: 'The Desk in Petrópolis',
      DE: 'Der Schreibtisch in Petrópolis',
      ID: 'Meja Tulis di Petrópolis'
    },
    description: {
      EN: 'Representation of Zweig’s writing desk during his final days in Brazil, where he wrote "The World of Yesterday".',
      DE: 'Darstellung von Zweigs Schreibtisch während seiner letzten Tage in Brasilien, wo er "Die Welt von Gestern" verfasste.',
      ID: 'Representasi meja tulis Zweig selama hari-hari terakhirnya di Brasil, tempat ia menulis "Dunia Kemarin".'
    }
  }
];

export const ZWEIG_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      EN: 'Why did Stefan Zweig commit suicide in 1942?',
      DE: 'Warum beging Stefan Zweig 1942 Selbstmord?',
      ID: 'Mengapa Stefan Zweig melakukan bunuh diri pada tahun 1942?'
    },
    answer: {
      EN: 'Stefan Zweig, a passionate humanist and pacifist, became deeply despondent over what he perceived as the permanent destruction of European culture by Nazi totalitarianism. Having been forced into exile and seeing his books banned and burned in his homeland, he felt that his spiritual home was lost forever. Unable to bear the spiritual isolation and the collapse of his borderless European ideal, he and his wife Lotte chose to take their lives in Petrópolis, Brazil.',
      DE: 'Stefan Zweig, ein leidenschaftlicher Humanist und Pazifist, verfiel in tiefe Depressionen über die vermeintlich dauerhafte Zerstörung der europäischen Kultur durch den Nationalsozialismus. Im Exil und angesichts der Verbrennung seiner Bücher fühlte er, dass seine geistige Heimat verloren war. Da er die geistige Isolation und den Zusammenbruch des europäischen Ideals nicht ertragen konnte, nahm er sich gemeinsam mit seiner Frau Lotte das Leben.',
      ID: 'Stefan Zweig, seorang humanis dan pasifis yang bersemangat, mengalami keputusasaan mendalam atas apa yang ia anggap sebagai kehancuran permanen budaya Eropa oleh totalitarianisme Nazi. Setelah dipaksa mengasingkan diri dan menyaksikan buku-bukunya dilarang serta dibakar di tanah airnya, ia merasa rumah spiritualnya telah hilang selamanya. Karena tidak sanggup menanggung isolasi spiritual dan runtuhnya impian persatuan Eropa, ia dan istrinya Lotte memilih untuk mengakhiri hidup mereka di Petrópolis, Brasil.'
    }
  },
  {
    id: 'faq-2',
    question: {
      EN: 'What are Stefan Zweig\'s most popular and famous works?',
      DE: 'Was sind Stefan Zweigs bekannteste und berühmteste Werke?',
      ID: 'Apa saja karya Stefan Zweig yang paling populer dan terkenal?'
    },
    answer: {
      EN: 'His most famous works include his posthumously published autobiography "The World of Yesterday" (Die Welt von Gestern), the highly acclaimed psychological novella "Chess Story" (Schachnovelle), the historical miniatures "Decisive Moments in History" (Sternstunden der Menschheit), and his single completed novel "Beware of Pity" (Ungeduld des Herzens). Other popular novellas include "Letter from an Unknown Woman" and "Amok".',
      DE: 'Zu seinen bekanntesten Werken gehören seine postum veröffentlichte Autobiografie "Die Welt von Gestern", die hochgelobte "Schachnovelle", die historischen Miniaturen "Sternstunden der Menschheit" und sein einziger vollendeter Roman "Ungeduld des Herzens". Weitere berühmte Novellen sind "Brief einer Unbekannten" und "Amok".',
      ID: 'Karya-karyanya yang paling terkenal termasuk otobiografi yang diterbitkan secara anumerta "Dunia Kemarin" (Die Welt von Gestern), novella psikologis yang sangat diakui "Kisah Catur" (Schachnovelle), miniatur sejarah "Momen-Momen Penentu Sejarah" (Sternstunden der Menschheit), dan satu-satunya novel lengkapnya "Beware of Pity" (Ungeduld des Herzens). Novella populer lainnya termasuk "Surat dari Wanita Tak Dikenal" dan "Amok".'
    }
  },
  {
    id: 'faq-3',
    question: {
      EN: 'What is the "World of Yesterday" about?',
      DE: 'Wovon handelt "Die Welt von Gestern"?',
      ID: 'Tentang apa buku "Dunia Kemarin" itu?'
    },
    answer: {
      EN: '"The World of Yesterday" is Zweig\'s memoir. It is not just a personal record, but a cultural biography of Europe. It documents the period of stability and peace in Vienna before 1914, the shock and destruction of World War I, the short-lived cultural revival of the 1920s, and the sudden descent into the dark abyss of Nazism in the 1930s. It stands as a powerful defense of humanism and peace.',
      DE: '"Die Welt von Gestern" ist Zweigs Memoirenwerk. Es ist nicht nur ein persönlicher Bericht, sondern eine Kulturgeschichte Europas. Es dokumentiert die Epoche der Stabilität in Wien vor 1914, den Schock des Ersten Weltkriegs, die kulturelle Blütezeit der 1920er Jahre und den Absturz in den Nationalsozialismus der 1930er Jahre. Es ist ein glühendes Plädoyer für den Humanismus.',
      ID: '"Dunia Kemarin" adalah memoar Zweig. Ini bukan sekadar catatan pribadi, melainkan biografi budaya Eropa. Buku ini mendokumentasikan masa stabilitas dan perdamaian di Wina sebelum 1914, guncangan dan kehancuran Perang Dunia I, kebangkitan budaya berumur pendek di tahun 1920-an, dan kejatuhan mendadak ke dalam jurang kegelapan Nazisme di tahun 1930-an. Buku ini berdiri sebagai pembelaan yang kuat terhadap humanisme dan perdamaian.'
    }
  },
  {
    id: 'faq-4',
    question: {
      EN: 'Who were Stefan Zweig\'s intellectual friends?',
      DE: 'Wer waren Stefan Zweigs intellektuelle Freunde?',
      ID: 'Siapa saja teman-teman intelektual Stefan Zweig?'
    },
    answer: {
      EN: 'Zweig cultivated close friendships with many of the leading figures of his day. His closest intellectual ally was the French pacifist Romain Rolland. He also maintained deep correspondences and friendships with Sigmund Freud (for whom he delivered a eulogy in 1939), Thomas Mann, Richard Strauss (collaborating on the opera "Die schweigsame Frau"), Arthur Schnitzler, Albert Einstein, Joseph Roth, and H.G. Wells.',
      DE: 'Zweig pflegte enge Freundschaften mit den führenden Köpfen seiner Zeit. Sein engster intellektueller Verbündeter war der französische Pazifist Romain Rolland. Zudem stand er in engem Kontakt mit Sigmund Freud (dem er 1939 die Grabrede hielt), Thomas Mann, Richard Strauss (Oper "Die schweigsame Frau"), Albert Einstein, Joseph Roth und H.G. Wells.',
      ID: 'Zweig menjalin persahabatan erat dengan banyak tokoh terkemuka pada zamannya. Sekutu intelektual terdekatnya adalah penulis pasifis Prancis Romain Rolland. Ia juga menjaga korespondensi mendalam dan persahabatan dengan Sigmund Freud (di mana ia memberikan pidato pemakaman pada tahun 1939), Thomas Mann, Richard Strauss (berkolaborasi dalam opera "Die schweigsame Frau"), Arthur Schnitzler, Albert Einstein, Joseph Roth, dan H.G. Wells.'
    }
  }
];

export const TRANSLATIONS = {
  EN: {
    heroTitle: 'The Humanist of Yesterday',
    heroSubtitle: 'Preserving the literary elegance, pacific vision, and psychological deep-dives of Stefan Zweig (1881–1942).',
    exploreBtn: 'Explore Works',
    bioBtn: 'Read Biography',
    navHome: 'Home',
    navBio: 'Biography',
    navBooks: 'Works',
    navQuotes: 'Quotes',
    navTimeline: 'Timeline',
    navArticles: 'Essays',
    navGallery: 'Gallery',
    navAbout: 'Legacy',
    navFAQ: 'FAQ',
    navContact: 'Contact',
    searchPlaceholder: 'Search essays or books...',
    latestArticlesTitle: 'Latest Essays & Literary Criticism',
    latestArticlesSub: 'Read deeply researched academic essays and analyses on Zweig’s humanistic impact.',
    featuredBooksTitle: 'Famous Literary Masterpieces',
    featuredBooksSub: 'Explore the psychological intensity and deep historical scope of Stefan Zweig’s written legacy.',
    timelineTitle: 'Chronicle of a Wandering Humanist',
    timelineSub: 'A structured journey through the life of Stefan Zweig and the dramatic history of Europe.',
    quotesTitle: 'Words of a Secular Pacifist',
    quotesSub: 'Philosophical reflections on destiny, human connection, and the tragedy of division.',
    galleryTitle: 'Visual Memories',
    gallerySub: 'A curated historical gallery honoring the places, portraits, and milestones of his life.',
    aboutTitle: 'The Cultural Legacy of a Cosmopolitan',
    aboutSub: 'Zweig’s intellectual impact on international solidarity, literature, and the human psyche.',
    aboutP1: 'Stefan Zweig stands as one of the most widely translated and beloved European writers of the early 20th century. Writing in a highly elegant, psychological, and emotionally rich style, he captured the complex, fragile inner worlds of his characters while mapping the collective breakdown of European sanity during two World Wars.',
    aboutP2: 'His works championed a borderless, culturally unified continent. Through his deep friendships with Sigmund Freud, Romain Rolland, and Albert Einstein, Zweig sought to build a "spiritual academy" of intellectuals that could transcend political friction. Although he met a tragic end in exile, his message of global humanism and pacifism remains an urgent prophecy for our contemporary times.',
    faqTitle: 'Frequently Asked Questions',
    faqSub: 'Scholarly answers regarding the life, works, and legacy of Stefan Zweig.',
    contactTitle: 'Keep the Legacy Alive',
    contactSub: 'Get in touch for academic inquiries, literary collaborations, or subscribe to our historical newsletter.',
    contactName: 'Full Name',
    contactEmail: 'Email Address',
    contactSubject: 'Subject',
    contactMessage: 'Message',
    sendBtn: 'Send Inquiry',
    subscribeBtn: 'Subscribe',
    newsletterTitle: 'The Zweig Chronicle Newsletter',
    newsletterSub: 'Receive quarterly updates on historical research, newly translated essays, and academic reviews directly in your inbox.',
    newsletterPlaceholder: 'Enter your email address...',
    successInquiry: 'Your inquiry has been sent successfully. We will respond shortly.',
    successNewsletter: 'Thank you for subscribing to the Zweig Chronicle!',
    rightsReserved: 'All rights reserved. Dedicated to the preservation of European cultural humanism.',
    originalTitleLabel: 'Original Title',
    publishedLabel: 'Published',
    categoriesLabel: 'Categories'
  },
  DE: {
    heroTitle: 'Der Humanist von Gestern',
    heroSubtitle: 'Bewahrung der literarischen Eleganz, der pazifistischen Vision und der psychologischen Tiefe von Stefan Zweig (1881–1942).',
    exploreBtn: 'Werke Entdecken',
    bioBtn: 'Biografie Lesen',
    navHome: 'Startseite',
    navBio: 'Biografie',
    navBooks: 'Werke',
    navQuotes: 'Zitate',
    navTimeline: 'Chronologie',
    navArticles: 'Essays',
    navGallery: 'Galerie',
    navAbout: 'Vermächtnis',
    navFAQ: 'FAQ',
    navContact: 'Kontakt',
    searchPlaceholder: 'Essays oder Bücher suchen...',
    latestArticlesTitle: 'Neueste Essays & Kritiken',
    latestArticlesSub: 'Wissenschaftliche Untersuchungen und Analysen über Stefan Zweigs humanistischen Einfluss.',
    featuredBooksTitle: 'Literarische Meisterwerke',
    featuredBooksSub: 'Entdecken Sie die psychologische Intensität und den historischen Umfang seines Erbes.',
    timelineTitle: 'Chronik eines Weltbürgers',
    timelineSub: 'Ein strukturierter Lebensweg von Stefan Zweig inmitten der dramatischen Geschichte Europas.',
    quotesTitle: 'Worte eines Pazifisten',
    quotesSub: 'Philosophische Reflexionen über Schicksal, Mitgefühl und die Tragödie der Spaltung.',
    galleryTitle: 'Visuelle Erinnerungen',
    gallerySub: 'Eine kuratierte historische Galerie zu den Lebensstationen des Autors.',
    aboutTitle: 'Das Vermächtnis eines Kosmopoliten',
    aboutSub: 'Zweigs intellektueller Einfluss auf internationale Solidarität, Literatur und die menschliche Seele.',
    aboutP1: 'Stefan Zweig gilt als einer der am häufigsten übersetzten und meistgeliebten europäischen Schriftsteller des frühen 20. Jahrhunderts. Mit seinem eleganten Stil erfasste er die komplexe und zerbrechliche Innenwelt seiner Charaktere.',
    aboutP2: 'Seine Werke traten für ein grenzenloses, kulturell geeintes Europa ein. Durch enge Freundschaften mit Sigmund Freud und Romain Rolland suchte er ein "geistiges Reich" zu schaffen. Sein Vermächtnis bleibt eine zeitlose Mahnung.',
    faqTitle: 'Häufig gestellte Fragen',
    faqSub: 'Wissenschaftliche Antworten zum Leben, Werk und Vermächtnis von Stefan Zweig.',
    contactTitle: 'Das Erbe bewahren',
    contactSub: 'Kontaktieren Sie uns für akademische Anfragen oder abonnieren Sie unseren historischen Newsletter.',
    contactName: 'Vollständiger Name',
    contactEmail: 'E-Mail-Adresse',
    contactSubject: 'Betreff',
    contactMessage: 'Nachricht',
    sendBtn: 'Anfrage Senden',
    subscribeBtn: 'Abonnieren',
    newsletterTitle: 'Der Zweig-Chronik Newsletter',
    newsletterSub: 'Erhalten Sie vierteljährlich historische Forschungsberichte und neu übersetzte Essays direkt in Ihr Postfach.',
    newsletterPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein...',
    successInquiry: 'Ihre Anfrage wurde erfolgreich gesendet. Wir antworten in Kürze.',
    successNewsletter: 'Vielen Dank für Ihr Abonnement der Zweig-Chronik!',
    rightsReserved: 'Alle Rechte vorbehalten. Dem Erhalt des europäischen Kulturhumanismus gewidmet.',
    originalTitleLabel: 'Originaltitel',
    publishedLabel: 'Veröffentlicht',
    categoriesLabel: 'Kategorien'
  },
  ID: {
    heroTitle: 'Humanis dari Dunia Kemarin',
    heroSubtitle: 'Melestarikan keanggunan sastra, visi perdamaian, dan eksplorasi psikologis mendalam dari Stefan Zweig (1881–1942).',
    exploreBtn: 'Jelajahi Karya',
    bioBtn: 'Baca Biografi',
    navHome: 'Beranda',
    navBio: 'Biografi',
    navBooks: 'Karya',
    navQuotes: 'Kutipan',
    navTimeline: 'Garis Waktu',
    navArticles: 'Esai',
    navGallery: 'Galeri',
    navAbout: 'Warisan',
    navFAQ: 'FAQ',
    navContact: 'Kontak',
    searchPlaceholder: 'Cari esai atau buku...',
    latestArticlesTitle: 'Esai Terbaru & Kritik Sastra',
    latestArticlesSub: 'Baca esai akademis dan analisis mendalam tentang dampak kemanusiaan dari Stefan Zweig.',
    featuredBooksTitle: 'Karya Agung Sastra Terkenal',
    featuredBooksSub: 'Jelajahi intensitas psikologis dan cakupan sejarah yang mendalam dari warisan tulisan Stefan Zweig.',
    timelineTitle: 'Kronik Seorang Humanis Berkelana',
    timelineSub: 'Perjalanan terstruktur melalui kehidupan Stefan Zweig dan sejarah dramatis benua Eropa.',
    quotesTitle: 'Kata-kata dari Seorang Pasifis Sekuler',
    quotesSub: 'Refleksi filosofis tentang takdir, hubungan antar manusia, dan tragedi perpecahan.',
    galleryTitle: 'Kenangan Visual',
    gallerySub: 'Galeri sejarah yang dikurasi untuk menghormati tempat, potret, dan tonggak penting hidupnya.',
    aboutTitle: 'Warisan Budaya Seorang Kosmopolitan',
    aboutSub: 'Dampak intelektual Zweig pada solidaritas internasional, sastra, dan jiwa manusia.',
    aboutP1: 'Stefan Zweig berdiri sebagai salah satu penulis Eropa yang paling banyak diterjemahkan dan dicintai di awal abad ke-20. Menulis dengan gaya yang sangat elegan, psikologis, dan kaya emosi, ia menangkap dunia batin karakternya yang kompleks dan rapuh, sembari memetakan runtuhnya kewarasan Eropa secara kolektif selama dua Perang Dunia.',
    aboutP2: 'Karya-karyanya memperjuangkan benua tanpa batas yang bersatu secara budaya. Melalui persahabatan mendalam dengan Sigmund Freud, Romain Rolland, dan Albert Einstein, Zweig berusaha membangun "akademi spiritual" intelektual yang melampaui gesekan politik. Meskipun berakhir tragis di pengasingan, pesannya tentang humanisme global dan pasifisme tetap menjadi ramalan penting bagi zaman kontemporer kita.',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqSub: 'Jawaban akademis mengenai kehidupan, karya, dan warisan Stefan Zweig.',
    contactTitle: 'Jaga Warisan Tetap Hidup',
    contactSub: 'Hubungi kami untuk pertanyaan akademis, kolaborasi sastra, atau berlangganan buletin sejarah kami.',
    contactName: 'Nama Lengkap',
    contactEmail: 'Alamat Email',
    contactSubject: 'Subjek',
    contactMessage: 'Pesan',
    sendBtn: 'Kirim Pertanyaan',
    subscribeBtn: 'Berlangganan',
    newsletterTitle: 'Buletin Kronik Zweig',
    newsletterSub: 'Terima pembaruan triwulanan tentang penelitian sejarah, esai yang baru diterjemahkan, dan ulasan akademis langsung di kotak masuk Anda.',
    newsletterPlaceholder: 'Masukkan alamat email Anda...',
    successInquiry: 'Pertanyaan Anda berhasil dikirim. Kami akan segera merespons.',
    successNewsletter: 'Terima kasih telah berlangganan Buletin Kronik Zweig!',
    rightsReserved: 'Hak cipta dilindungi undang-undang. Didedikasikan untuk pelestarian humanisme budaya Eropa.',
    originalTitleLabel: 'Judul Asli',
    publishedLabel: 'Diterbitkan',
    categoriesLabel: 'Kategori'
  }
};
