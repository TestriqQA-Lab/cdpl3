/**
 * ============================================================================
 * HOME PAGE - ENHANCED SEO & SCHEMA MARKUP
 * ============================================================================
 * 
 * This file implements the comprehensive SEO strategy for the home page,
 * including multiple rich schema types for maximum search visibility.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import {
  generateLocalBusinessSchema,
  generateItemListSchema,
  generateFAQSchema,
  generateVideoSchema,
} from "@/lib/schema-generators";
import { FEATURED_COURSES } from "@/lib/seo-config";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// DYNAMIC IMPORTS (for performance)
// ============================================================================

const HomeHeroSection = dynamic(() => import('@/components/home/HomeHeroSection'), { ssr: true });
const HomeTrustBarSection = dynamic(() => import('@/components/home/HomeTrustBarSection'), { ssr: true });
const HomeFeaturedCoursesSection = dynamic(() => import('@/components/home/HomeFeaturedCoursesSection'), { ssr: true });
const HomeLearningExperienceSection = dynamic(() => import('@/components/home/HomeLearningExperienceSection'), { ssr: true });
const HomePlacementSupportSection = dynamic(() => import('@/components/home/HomePlacementSupportSection'), { ssr: true });
const PlacementsCompanyWallSection = dynamic(() => import("@/components/sections/PlacementsCompanyWallSection"),{ ssr: true});
const HomeWhyChooseSection = dynamic(() => import('@/components/home/HomeWhyChooseSection'), { ssr: true });
const HomeLatestBlogSection = dynamic(() => import('@/components/home/HomeLatestBlogSection'), { ssr: true });
const HomeFAQSection = dynamic(() => import('@/components/home/HomeFAQSection'), { ssr: true });
const HomeFinalCTASection = dynamic(() => import('@/components/home/HomeFinalCTASection'), { ssr: true });

// ============================================================================
// HOME PAGE METADATA
// ============================================================================

export const metadata: Metadata = generateMetadata({
  title: "CDPL - Best Software Testing, Data Science & AI/ML Courses in India",
  description: "Join CDPL for industry-led training in Software Testing, Data Science, and AI/ML. Get 100% placement support, expert mentorship, and hands-on projects. Start your high-paying tech career today!",
  keywords: [
    "software testing course",
    "data science course",
    "AI ML course",
    "CDPL",
    "Cinute Digital",
    "best tech training institute",
    "100% placement support",
    "career change",
    "IT training India",
    "online courses",
    "job guarantee",
  ],
  url: '/',
});

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================

export default function HomePage(): React.ReactElement {
  // ========================================
  // SCHEMA DATA
  // ========================================

  // Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema();

  // ItemList Schema for Featured Courses
  const featuredCoursesForSchema = FEATURED_COURSES.map(course => ({
    name: course.name,
    url: `/${course.slug}`,
    description: course.description,
  }));
  const itemListSchema = generateItemListSchema(featuredCoursesForSchema, 'Featured Courses');

  // FAQ Schema
  const faqs = [
    {
      question: 'What courses does CDPL offer?',
      answer: 'We offer comprehensive training in Software Testing (Manual & Automation), Data Science & AI/ML, API Testing, Performance Testing, Mobile Testing, and Full Stack Development. All courses include hands-on projects, industry certifications, and 100% placement support.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We provide 100% placement support including resume building, mock interviews, interview preparation, and guaranteed interview opportunities with our 50+ hiring partners. Our dedicated placement cell works with you until you land your dream job.',
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'Course duration varies from 8 to 24 weeks depending on the program. We offer flexible batch timings including weekday, weekend, and fast-track options to fit your schedule. You also get lifetime access to all course materials.',
    },
    {
      question: 'Are the classes online or offline?',
      answer: 'We offer both online and offline training options. Our live online classes are interactive with real-time doubt resolution, just like classroom training. You can also attend our classroom sessions at our Pune center.',
    },
  ];
  const faqSchema = generateFAQSchema(faqs);

  // Video Schema (assuming a video exists on the page)
  const videoSchema = generateVideoSchema({
    name: 'Why Choose CDPL for Your Tech Career?',
    description: 'Discover how CDPL can transform your career with industry-ready skills, expert mentorship, and 100% placement support.',
    thumbnailUrl: '/video-thumbnail.jpg', // TODO: Update with actual thumbnail
    uploadDate: '2025-10-20T08:00:00+05:30',
    duration: 'PT2M30S', // 2 minutes 30 seconds
    embedUrl: 'https://www.youtube.com/embed/your-video-id', // TODO: Update with actual video ID
  });

  return (
    <>
      {/* ========================================
          JSON-LD SCHEMA INJECTION
          ======================================== */}
      <JsonLd id="local-business-schema" schema={localBusinessSchema} />
      <JsonLd id="item-list-schema" schema={itemListSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />
      <JsonLd id="video-schema" schema={videoSchema} />

      <main className="relative bg-white">
        {/* ========================================
            PAGE CONTENT
            ======================================== */}
        <HomeHeroSection />
        <HomeTrustBarSection />
        <HomeFeaturedCoursesSection />
        <HomeLearningExperienceSection />
        <HomePlacementSupportSection />
        <section
          className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
          data-scroll-target="placements-partners"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PlacementsCompanyWallSection />
          </div>
        </section>
        <HomeWhyChooseSection />
        <HomeLatestBlogSection />
        <HomeFAQSection />
        <HomeFinalCTASection />
      </main>
    </>
  );
}
