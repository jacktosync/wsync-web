import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const repoDirectory = join(process.cwd(), 'repopost');

export function getRepoSlugs() {
    return fs.readdirSync(repoDirectory);
}

export function getRepoBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(repoDirectory, `${realSlug}.md`);
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
            items[field] = data.tags || []; // Extract the "tags" field from front matter
        }

        if (field === 'author') {
            items[field] = data.author.handle || ''; // Extract the "author" field from front matter
        }

        // Include other dynamic metadata fields as needed
        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllRepo(fields: string[] = [], tags: string[] = [], author?: string) {
    const slugs = getRepoSlugs();
    const repos = slugs
        .map((slug) => getRepoBySlug(slug, fields))
        .filter((repo) => {
            // Filter posts by tags if tags are provided
            if (tags.length > 0 && (!repo.tags || !repo.tags.some((tag: string) => tags.includes(tag)))) {
                return false;
            }

            // Filter posts by author if author is provided
            if (author && repo.author.handle !== author) {
                return false;
            }

            return true; // Include the post if it passes all filters
        })
        // Sort repos by date in descending order
        .sort((repo1, repo2) => (repo1.date > repo2.date ? -1 : 1));
    return repos;
}

export function getAllTags() {
    const allRepo = getAllRepo(['tags']);
    const uniqueTags = new Set<string>();

    // Collect unique tags from all repo
    allRepo.forEach((repo) => {
        if (repo.tags && Array.isArray(repo.tags)) {
            repo.tags.forEach((tag: string) => {
                uniqueTags.add(tag);
            });
        }
    });

    // Convert the Set to an array and return it
    return Array.from(uniqueTags);
}