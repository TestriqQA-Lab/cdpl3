import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { generateSEO, generateFAQSchema } from "@/lib/seo";

// ============================================================================
// ENHANCED SEO METADATA - Home Page
// ============================================================================
export const metadata: Metadata = generateSEO({
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
    "IT training India"
  ],
  url: '/',
  type: 'website',
});

// Import home page components with proper naming
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

/**
 * CDPL Home Page - Modern, SEO-Optimized, Lead Generation Focused
 * 
 * @returns {React.ReactElement} Complete home page
 */
export default function HomePage(): React.ReactElement {
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
    {
      question: 'Is prior experience required?',
      answer: 'No prior experience is required for most of our beginner-level courses. We start from fundamentals and gradually move to advanced topics. Our trainers ensure everyone understands the concepts before moving forward.',
    },
    {
      question: 'What certifications will I receive?',
      answer: 'You will receive a course completion certificate from CDPL. Additionally, we prepare you for globally recognized certifications like ISTQB (for testing courses), AWS (for cloud courses), and other industry-standard certifications relevant to your course.',
    },
    {
      question: 'How experienced are the trainers?',
      answer: 'All our trainers are industry professionals with 10+ years of hands-on experience at top companies like Google, Microsoft, Amazon, and leading Indian IT firms. They bring real-world expertise and practical insights to every session.',
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention and better learning outcomes. This allows our trainers to focus on each student\'s progress and provide individual guidance.',
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CDPL - Cinute Digital",
    "url": "https://www.cinutedigital.com",
    "logo": "https://www.cinutedigital.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/cinutedigital",
      "https://twitter.com/cinutedigital",
      "https://www.linkedin.com/company/cinutedigital",
      "https://www.youtube.com/@cinutedigital"
    ]
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        key="organization-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        key="faq-schema"
      />
      <main className="relative bg-white">
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
