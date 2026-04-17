import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		excerpt: z.string().optional(),
		description: z.string().optional(),
		featuredImage: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { posts };

// Display labels for category/tag slugs (single source of truth for archive pages)
export const CATEGORY_LABELS: Record<string, string> = {
	"data-visualization-tools": "Data Visualization Tools",
};

export const TAG_LABELS: Record<string, string> = {
	"apache-superset": "Apache Superset",
	"power-bi": "Power BI",
	metabase: "Metabase",
	"open-source-bi": "Open Source BI",
	comparison: "Comparison",
};
