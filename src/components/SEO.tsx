import { useEffect } from 'react';
import { Language } from '../types';
import { ZWEIG_BOOKS, ZWEIG_ARTICLES, ZWEIG_FAQS } from '../data/stefan_zweig_data';

interface SEOProps {
  lang: Language;
  currentSection: string;
}

export default function SEO({ lang, currentSection }: SEOProps) {
  useEffect(() => {
    // 1. Dynamic document title and basic meta tags
    const titleSuffix = " | Stefan Zweig European Legacy";
    let titleText = "Stefan Zweig Official Digital Tribute" + titleSuffix;
    let descriptionText = "Explore the life, popular works, psychological novellas, legacy, and pacifist vision of Stefan Zweig (1881-1942). Dedicated to European humanism.";

    if (lang === 'DE') {
      titleText = "Stefan Zweig Offizielles Digitales Erbe" + titleSuffix;
      descriptionText = "Erkunden Sie das Leben, die bekannten Werke, die psychologischen Novellen und die pazifistische Vision von Stefan Zweig (1881-1942).";
    } else if (lang === 'ID') {
      titleText = "Situs Penghormatan Resmi Stefan Zweig" + titleSuffix;
      descriptionText = "Jelajahi kehidupan, karya populer, novel psikologis, warisan, dan visi pasifis Stefan Zweig (1881-1942). Melestarikan humanisme Eropa.";
    }

    if (currentSection !== 'home') {
      const sectionCapitalized = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
      titleText = `${sectionCapitalized} ${titleSuffix}`;
    }

    document.title = titleText;

    // Update meta tags
    const updateMetaTag = (name: string, value: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    updateMetaTag('description', descriptionText);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('theme-color', '#121212');

    // Open Graph
    updateMetaTag('og:title', titleText, true);
    updateMetaTag('og:description', descriptionText, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'Stefan Zweig Legacy', true);
    updateMetaTag('og:locale', lang === 'DE' ? 'de_DE' : lang === 'ID' ? 'id_ID' : 'en_US', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', titleText);
    updateMetaTag('twitter:description', descriptionText);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href);

    // 2. Structured Data (JSON-LD)
    // We will build dynamic schemas for Person, Organization, Website, Breadcrumbs, Books, Articles, and FAQs!
    const jsonLdData: Record<string, any>[] = [];

    // A. Person Schema (Stefan Zweig)
    jsonLdData.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://stefanzweig.eu/#person",
      "name": "Stefan Zweig",
      "birthDate": "1881-11-28",
      "birthPlace": {
        "@type": "Place",
        "name": "Vienna, Austria-Hungary"
      },
      "deathDate": "1942-02-22",
      "deathPlace": {
        "@type": "Place",
        "name": "Petrópolis, Rio de Janeiro, Brazil"
      },
      "nationality": ["Austrian", "British"],
      "occupation": ["Novelist", "Playwright", "Biographer", "Journalist"],
      "knowsAbout": ["Humanism", "Pacifism", "Psychological realism", "European unity"],
      "sameAs": [
        "https://en.wikipedia.org/wiki/Stefan_Zweig",
        "https://de.wikipedia.org/wiki/Stefan_Zweig",
        "https://www.wikidata.org/wiki/Q78491"
      ]
    });

    // B. Organization Schema (Stefan Zweig Society / Association)
    jsonLdData.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://stefanzweig.eu/#organization",
      "name": "Stefan Zweig European Association",
      "url": "https://stefanzweig.eu",
      "logo": "https://stefanzweig.eu/logo.png",
      "description": "An academic and cultural preservation effort dedicated to the humanist legacy of Stefan Zweig."
    });

    // C. Website & SearchAction Schema
    jsonLdData.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Stefan Zweig European Legacy",
      "url": "https://stefanzweig.eu",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://stefanzweig.eu/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    });

    // D. Breadcrumb Schema
    jsonLdData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": lang === 'DE' ? 'Startseite' : lang === 'ID' ? 'Beranda' : 'Home',
          "item": "https://stefanzweig.eu"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentSection,
          "item": `https://stefanzweig.eu/#${currentSection}`
        }
      ]
    });

    // E. Book Schema (For popular books list)
    ZWEIG_BOOKS.forEach((book) => {
      jsonLdData.push({
        "@context": "https://schema.org",
        "@type": "Book",
        "@id": `https://stefanzweig.eu/#book-${book.id}`,
        "name": book.title[lang],
        "alternativeHeadline": book.originalTitle,
        "author": {
          "@type": "Person",
          "name": "Stefan Zweig"
        },
        "datePublished": book.year.toString(),
        "genre": book.genres,
        "description": book.description[lang],
        "image": `https://stefanzweig.eu${book.coverUrl}`
      });
    });

    // F. Article Schema (For latest essays)
    ZWEIG_ARTICLES.forEach((art) => {
      jsonLdData.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://stefanzweig.eu/#article-${art.id}`,
        "headline": art.title[lang],
        "description": art.excerpt[lang],
        "datePublished": art.publishedDate,
        "author": {
          "@type": "Person",
          "name": art.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Stefan Zweig European Association",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stefanzweig.eu/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://stefanzweig.eu/#essays`
        }
      });
    });

    // G. FAQ Schema
    const faqQuestions = ZWEIG_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question[lang],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer[lang]
      }
    }));
    jsonLdData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqQuestions
    });

    // Inject JSON-LD Script
    let jsonLdScript = document.getElementById('json-ld-schemas') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'json-ld-schemas';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(jsonLdData, null, 2);

    return () => {
      // Clean up dynamic meta tags and scripts on unmount or updates
      // This ensures no schema leakage or stale SEO properties
    };
  }, [lang, currentSection]);

  return null;
}
