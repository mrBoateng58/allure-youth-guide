import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// The expanded array
const newsArticles = [
  {
    id: "pitch-competition-2024",
    category: "Entrepreneurship",
    date: "August 12, 2024",
    title: "First Annual Pitch Competition Announced",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop",
    content: `
      Allure Youth Guide is incredibly proud to announce our first-ever startup incubation pitch event. 
      
      This flagship event is designed specifically for young entrepreneurs in Ghana who have bold ideas but lack the capital and strategic guidance to scale. Participants will have the opportunity to present their business plans to a panel of seasoned industry leaders, investors, and mentors.
      
      Beyond the potential for seed funding, every participant will receive constructive feedback, networking opportunities, and a roadmap for refining their brand promotion and growth strategies.
    `
  },
  {
    id: "stem-access-high-school",
    category: "Students Guide",
    date: "July 28, 2024",
    title: "Expanding STEM Access for High Schoolers",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    content: `
      As part of our commitment to the Students Guide pillar, we are launching a series of weekend workshops dedicated entirely to STEM (Science, Technology, Engineering, and Mathematics).
      
      These hands-on sessions will cover coding basics, robotics, and environmental engineering, aiming to bridge the gap between theoretical schooling and practical, modern-world application. By giving students early access to these tools, we hope to ignite a passion that will guide their future career paths and academic choices.
    `
  },
  {
    id: "financial-empowerment",
    category: "Work Guide",
    date: "July 10, 2024",
    title: "Financial Empowerment Seminar a Success",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    content: `
      Our recent Financial Empowerment Seminar saw over 100 active professionals gather to discuss the realities of wealth generation in today's economy.
      
      A key focus of the seminar was breaking the reliance on traditional pensions. Expert speakers guided attendees through strategies for building multiple income streams, investing safely, and managing personal finances. We believe that empowering workers financially is the cornerstone of sustainable career success and overall life wellness.
    `
  }
];

// Next.js 15 requires params to be a Promise
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // We must await the params before using them
  const resolvedParams = await params;
  
  // Find the specific article that matches the URL slug
  const article = newsArticles.find((a) => a.id === resolvedParams.slug);

  // If the user types a random URL that doesn't exist, show the Next.js 404 page
  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-background-light min-h-screen pb-24">
      
      {/* 1. ARTICLE HERO SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
              {article.category}
            </span>
            <span className="text-gray-300 text-sm font-medium">
              {article.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="max-w-3xl mx-auto px-6 pt-16 w-full">
        <Link href="/news" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent transition-colors mb-10">
          &larr; Back to News
        </Link>
        
        <div className="prose prose-lg max-w-none text-text-main">
          {article.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            return (
              <p key={index} className="mb-6 leading-relaxed text-gray-700">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>

        {/* 3. SHARE / CTA SECTION */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-text-main mb-4">Inspired by this update?</h3>
          <p className="text-gray-600 mb-6">Join the movement and help us unlock potential across Ghana.</p>
          <Link href="/get-involved" className="inline-block bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
            Get Involved
          </Link>
        </div>
      </section>

    </div>
  );
}