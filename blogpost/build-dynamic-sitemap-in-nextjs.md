---
title: 'How to Build Dynamic Sitemap in NextJS for SEO'
excerpt: 'A sitemap is an essential element for improving your website search engine optimization aka SEO and it can help search engines like Google to index your website pages more efficiently.'
tags: 
 - javascript
 - next-js
 - seo
coverImage: '/assets/blog/how-to-build-dynamic-sitemap-in-nextjs.png'
date: '2023-10-21T05:35:07.322Z'
author:
  name: 'Jack Sync'
  handle: 'jacksync'
  bio: 'Experienced Web Developer Specializing In Creating Dynamic And User-Friendly Websites And Applications. Proficient In React, NextJS And More.'
  picture: '/assets/authors/jacksync.jpg'
  wallet: '0xbc4958e7d4986E08A3370AD3Ee4977cc001Ad55d'
ogImage: '/assets/blog/how-to-build-dynamic-sitemap-in-nextjs.png'
---

In this tutorial, we will walk you through how to create a dynamic sitemap in Next.js using an example code snippet.

### Prerequisites

Before we begin, make sure you have the following set up:

1. Node.js and npm (Node Package Manager) installed on your computer.
2. A Next.js project with blog content and running.

### Import Necessary Modules and Define Data Types

First, you need to import the required modules and define the data types you'll use in your sitemap. We use my markdown blog as example and we have two types: PostType and RepoType.

```JS
import { getAllPosts } from '@/library/blogApi';
import { getAllRepo } from '@/library/repoApi';
import { GetServerSideProps } from 'next';

type PostType = {
  slug: string;
  date: string;
};

type RepoType = {
  slug: string;
  date: string;
};

type Props = {
  posts: PostType[];
  repos: RepoType[];
};

```

### Create a Function to Generate the Sitemap

Next, create a function named generateSiteMap that generates the sitemap XML based on your data. This function will map over your blog posts and portfolio items and format them as URLs within the sitemap.

```JS
function generateSiteMap({ posts, repos }: Props): string {
  const baseUrl = 'https://www.yourwebsite.com'; // Replace with your website URL
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    date: post.date,
  }));
  const repoUrls = repos.map((repo) => ({
    url: `${baseUrl}/portfolio/${repo.slug}`,
    date: repo.date,
  }));

  const allUrls = [...blogUrls, ...repoUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allUrls.map((entry) => `
       <url>
           <loc>${entry.url}</loc>
           <lastmod>${entry.date}</lastmod>
       </url>
     `).join('')}
   </urlset>
 `;
}

```

### Create the SiteMap Component

You can create a Next.js component to handle the generation of the sitemap. In this example, we name it SiteMap. The component itself doesn't have any visible content since it generates the XML sitemap on the server.

```JS
function SiteMap() {
  // The component for generating the sitemap
}

```

### Implement `getServerSideProps` for Sitemap Generation

To generate the sitemap dynamically, implement the `getServerSideProps` function. This function fetches the necessary data, generates the sitemap, and sets the appropriate headers for the response.

```JS
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogItems = getAllPosts(['slug', 'date']); // Add 'date' to the list if needed
  const posts: PostType[] = blogItems.map((item) => ({
    slug: item.slug,
    date: item.date,
  }));

  const repoItems = getAllRepo(['slug', 'date']); // Add 'date' to the list if needed
  const repos: RepoType[] = repoItems.map((item) => ({
    slug: item.slug,
    date: item.date,
  }));

  const sitemap = generateSiteMap({ posts, repos });

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

```

### Export the SiteMap Component

Finally, export the SiteMap component as the default export of your module.

```JS
export default SiteMap;

```

## Conclusion

With these steps, you have successfully created a dynamic sitemap in your Next.js application. This sitemap will help search engines crawl and index your website effectively, ultimately improving your website's SEO.

Make sure to replace the example URLs and data types with your own content and customize the sitemap generation as needed for your specific use case.

