import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
  }),
});

export const collections = { productos };
