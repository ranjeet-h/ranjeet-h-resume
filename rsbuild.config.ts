import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import resume from './src/data/resume.json';

const siteUrl = 'https://ranjeet-h-resume.vercel.app/';
const siteName = `${resume.personalInfo.name} Portfolio`;
const pageTitle = `${resume.personalInfo.name} | ${resume.personalInfo.title}`;
const metaDescription = `${resume.personalInfo.title} ${resume.personalInfo.name} builds healthcare products, developer tools, and open-source software across frontend, backend, and automation.`;
const profileImageUrl = new URL(resume.personalInfo.image, siteUrl).toString();
const personId = `${siteUrl}#person`;

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: resume.personalInfo.name,
      url: siteUrl,
      image: profileImageUrl,
      jobTitle: resume.personalInfo.title,
      worksFor: {
        '@type': 'Organization',
        name: resume.experience[0].company,
      },
      sameAs: [resume.personalInfo.github],
      email: resume.personalInfo.email,
      description: metaDescription,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: siteName,
      alternateName: resume.personalInfo.name,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
  ],
});

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './src/index.ejs',
    title: pageTitle,
    favicon: './public/favicon.svg',
    meta: {
      description: metaDescription,
      author: resume.personalInfo.name,
      'og:title': { property: 'og:title', content: pageTitle },
      'og:description': { property: 'og:description', content: metaDescription },
      'og:type': { property: 'og:type', content: 'website' },
      'og:url': { property: 'og:url', content: siteUrl },
      'og:site_name': { property: 'og:site_name', content: siteName },
      'og:locale': { property: 'og:locale', content: 'en_IN' },
      'og:image': { property: 'og:image', content: profileImageUrl },
      'og:image:alt': { property: 'og:image:alt', content: `Portrait of ${resume.personalInfo.name}` },
      'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
      'twitter:title': { name: 'twitter:title', content: pageTitle },
      'twitter:description': { name: 'twitter:description', content: metaDescription },
      'twitter:image': { name: 'twitter:image', content: profileImageUrl },
      'twitter:image:alt': { name: 'twitter:image:alt', content: `Portrait of ${resume.personalInfo.name}` },
    },
    tags: [
      {
        tag: 'link',
        attrs: { rel: 'canonical', href: siteUrl },
        head: true,
      },
      {
        tag: 'link',
        attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        append: false,
        head: true,
      },
      {
        tag: 'link',
        attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        append: false,
        head: true,
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Libre+Bodoni:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700;800&display=swap',
        },
        append: false,
        head: true,
      },
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: jsonLd,
      },
    ],
  },
});
