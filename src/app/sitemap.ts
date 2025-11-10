import { MetadataRoute } from 'next';

/**
 * Dynamic XML Sitemap for CDPL
 * Next.js 15 App Router format
 * 
 * Optimized for:
 * - Search engines (Google, Bing, Yahoo)
 * - AI crawlers (GPTBot, Claude, Gemini)
 * - Generative Engine Optimization (GEO)
 * 
 * Features:
 * - Dynamic URL generation
 * - Priority and change frequency optimization
 * - Last modified timestamps
 * - Multi-language support ready
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';
  const currentDate = new Date().toISOString();

  // ========================================
  // STATIC PAGES
  // ========================================
  const staticPages: MetadataRoute.Sitemap = [
    // Home Page - Highest Priority
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Main Pages - High Priority
    {
      url: `${siteUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mentors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/locations-we-serve`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Services Pages
    {
      url: `${siteUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Events Pages
    {
      url: `${siteUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/events/past-events`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Jobs & Careers Pages
    {
      url: `${siteUrl}/jobs/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/jobs/job-openings`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/live-jobs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/placements`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Blog Pages
    {
      url: `${siteUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/all-posts`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Program Pages
    {
      url: `${siteUrl}/cdpl-affiliate-program`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/cdpl-certificate-validation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // Legal Pages - Lower Priority
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cookies-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cancellation-refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ========================================
  // COURSE PAGES - High Priority
  // ========================================
  const coursePages: MetadataRoute.Sitemap = [
    // Software Testing Courses
    'manual-testing-course',
    'automation-testing-course',
    'advance-manual-automation-testing',
    'advance-software-testing',
    'api-testing',
    'etl-testing',
    'aaa-certification-course',
    'actd-certification-training',

    // Data & Analytics Courses
    'data-science-course',
    'data-analytics',
    'data-engineering-course',
    'dbms-course',

    // AI & ML Courses
    'ai-course',
    'machine-learning-course',
    'generative-ai-course',
    'prompt-engineering-course',

    // Programming Courses
    'python-course',
    'java-course',

    // Digital Marketing
    'digital-marketing-course',
  ].map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ========================================
  // COMBINE ALL PAGES
  // ========================================
  return [
    ...staticPages,
    ...coursePages,
  ];
}

/**
 * NOTES FOR DYNAMIC CONTENT:
 * 
 * If you have dynamic blog posts, events, or city pages, fetch them here:
 * 
 * // Example: Fetch blog posts
 * const blogPosts = await fetch(`${siteUrl}/api/blog/posts`).then(r => r.json());
 * const blogPages = blogPosts.map(post => ({
 *   url: `${siteUrl}/blog/${post.slug}`,
 *   lastModified: post.updatedAt,
 *   changeFrequency: 'monthly',
 *   priority: 0.7,
 * }));
 * 
 * // Example: Fetch city pages
 * const cities = await fetch(`${siteUrl}/api/cities`).then(r => r.json());
 * const cityPages = cities.map(city => ({
 *   url: `${siteUrl}/${city.slug}`,
 *   lastModified: currentDate,
 *   changeFrequency: 'monthly',
 *   priority: 0.6,
 * }));
 * 
 * Then add them to the return array:
 * return [...staticPages, ...coursePages, ...blogPages, ...cityPages];
 */
