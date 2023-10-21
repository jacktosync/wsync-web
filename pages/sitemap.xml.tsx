import { getAllPosts } from '@/library/blogApi';
import { getAllRepo } from '@/library/repoApi';
import { GetServerSideProps } from 'next';

type PostType = {
  slug: string;
};

type RepoType = {
  slug: string;
};

type Props = {
  posts: PostType[];
  repos: RepoType[];
};


function generateSiteMap({ posts, repos }: Props): string {
  const currentDate = new Date();
  const today = currentDate.toISOString();
  const baseUrl = 'https://www.wsync.xyz';
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }));
  const repoUrls = repos.map((repo) => ({
    url: `${baseUrl}/portfolio/${repo.slug}`,
  }));

  const allUrls = [...blogUrls, ...repoUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
           <loc>https://www.wsync.xyz/</loc>
           <lastmod>${today}</lastmod>
       </url>
     ${allUrls.map((entry) => `
       <url>
           <loc>${entry.url}</loc>
           <lastmod>${today}</lastmod>
       </url>
     `).join('')}
   </urlset>
 `;
}

function SiteMap() {
  // The component for generating the sitemap
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const blogItems = getAllPosts(['slug']); 
  const posts: PostType[] = blogItems.map((item) => ({
    slug: item.slug,
  }));

  const repoItems = getAllRepo(['slug']); 
  const repos: RepoType[] = repoItems.map((item) => ({
    slug: item.slug,
  }));

  const sitemap = generateSiteMap({ posts, repos });

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;