// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx(), 
        sitemap(), 
        tailwind(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        })
    ],
    site: 'https://maathildeetu.github.io',
});