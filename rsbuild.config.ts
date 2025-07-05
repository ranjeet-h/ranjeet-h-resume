import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import resume from './src/data/resume.json';

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: resume.personalInfo.name,
  url: 'https://ranjeet-h-resume.vercel.app/', // TODO: Replace with your actual domain
  image: resume.personalInfo.image,
  jobTitle: resume.personalInfo.title,
  worksFor: {
    '@type': 'Organization',
    name: resume.experience[0].company,
  },
  sameAs: [resume.personalInfo.github],
  email: resume.personalInfo.email,
  description: resume.summary,
});

const skills = [
  ...resume.skills.languages,
  ...resume.skills.frameworks,
  ...resume.skills.styling,
  ...resume.skills.tools,
  ...resume.skills.backend,
].join(', ');

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: `${resume.personalInfo.name} - ${resume.personalInfo.title}`,
    meta: {
      description: resume.summary,
      keywords: skills,
      author: resume.personalInfo.name,
      'og:title': `${resume.personalInfo.name} - ${resume.personalInfo.title}`,
      'og:description': resume.summary,
      'og:type': 'website',
      'og:url': 'https://ranjeet-h-resume.vercel.app/', // TODO: Replace with your actual domain
      'og:image': resume.personalInfo.image,
      'twitter:card': 'summary_large_image',
      'twitter:title': `${resume.personalInfo.name} - ${resume.personalInfo.title}`,
      'twitter:description': resume.summary,
      'twitter:image': resume.personalInfo.image,
    },
    tags: [
      {
        tag: 'script',
        attrs: {
          type: 'application/ld+json',
        },
        children: jsonLd,
      },
    ],
  },
});
