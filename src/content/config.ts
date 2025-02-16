import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()),
		clients: z.string(),
		contexte: z.string(),
		objectifs: z.array(z.object({gras: z.string(), light: z.string()})),
		livrables: z.array(z.object({title: z.string(), description: z.string()})),
	}),
});

export const collections = { blog };
