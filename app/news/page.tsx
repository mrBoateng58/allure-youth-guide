import Link from "next/link";
import React from "react";

// The array of articles
const newsArticles = [
  {
    id: "pitch-competition-2024",
    category: "Entrepreneurship",
    date: "August 12, 2024",
    title: "First Annual Pitch Competition Announced",
    excerpt: "Allure Youth Guide is proud to announce our first startup incubation pitch event, providing funding guidance and feedback for young entrepreneurs.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
    link: "/news/pitch-competition-2024"
  },
  {
    id: "stem-access-high-school",
    category: "Students Guide",
    date: "July 28, 2024",
    title: "Expanding STEM Access for High Schoolers",
    excerpt: "Encouraging students in science, technology, engineering, and mathematics through our new hands-on weekend workshops.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    link: "/news/stem-access-high-school"
  },
  {
    id: "financial-empowerment",
    category: "Work Guide",
    date: "July 10, 2024",
    title: "Financial Empowerment Seminar a Success",
    excerpt: "Our latest seminar focused on building multiple income sources beyond pension, equipping workers with robust financial literacy.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    link: "/news/financial-empowerment"
  }
];

export default function NewsImpact() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center bg-text-main">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-secondary">
            News & Impact
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Read the latest updates, success stories, and see the measurable impact we are making across Ghana.
          </p>
        </div>
      </section>

      {/* 2. IMPACT METRICS BANNER */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-secondary/30">
            <div className="py-4 md:py-0">
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-brand-secondary font-semibold uppercase tracking-wider text-sm">Core Pillars</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-brand-secondary font-semibold uppercase tracking-wider text-sm">Youth Reached</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-brand-secondary font-semibold uppercase tracking-wider text-sm">Workshops Hosted</div>
            </div>
            <div className="py-4 md:py-0">
              <div className="text-5xl font-bold mb-2">2024</div>
              <div className="text-brand-secondary font-semibold uppercase tracking-wider text-sm">Year Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS GRID (Mapped from Array) */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-4xl font-bold text-text-main">Latest Updates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-brand-primary font-bold text-xs uppercase tracking-wider">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm">
                    {article.excerpt}
                  </p>
                  
                  <Link href={article.link} className="inline-block text-brand-primary font-bold hover:underline">
                    Read Full Story &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}