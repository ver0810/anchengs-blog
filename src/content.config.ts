import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const NOTES_PATH = "src/data/notes";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.union([z.date(), z.string().pipe(z.coerce.date())]),
      modDatetime: z.union([z.date(), z.string().pipe(z.coerce.date())])
        .optional()
        .nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${NOTES_PATH}` }),
  schema: z.object({
    title: z.string(),
    pubDatetime: z.union([z.date(), z.string().pipe(z.coerce.date())]).optional(),
    tags: z.array(z.string()).default(["note"]),
    pinned: z.boolean().optional(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, notes };
