import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'blogpost');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | any;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'tags') {
      items[field] = data.tags || []; 
    }

    if (field === 'author') {
      items[field] = data.author.handle || '';
    }

    // Include other dynamic metadata fields as needed
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], tags: string[] = [], author?: string) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => {
      // Filter posts by tags if tags are provided
      if (tags.length > 0 && (!post.tags || !post.tags.some((tag: string) => tags.includes(tag)))) {
        return false;
      }

      // Filter posts by author if author is provided
      if (author && post.author.handle !== author) {
        return false;
      }

      return true; // Include the post if it passes all filters
    })
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTags() {
  const allPosts = getAllPosts(['tags']);
  const uniqueTags = new Set<string>();

  // Collect unique tags from all posts
  allPosts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => {
        uniqueTags.add(tag);
      });
    }
  });

  // Convert the Set to an array and return it
  return Array.from(uniqueTags);
}