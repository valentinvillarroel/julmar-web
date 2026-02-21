import fs from 'fs';
import { machines } from '../src/data/machines.js';

// Utility for slug matching (copied from stringUtils to avoid import issues in pure node script if not using modules)
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

const DOMAIN = 'https://julmar.cl';

const generateSitemap = () => {
    const staticPages = [
        '',
        '/#flota',
        '/#servicios',
        '/#nosotros',
        '/#contacto'
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static Pages
    staticPages.forEach(page => {
        sitemap += `
    <url>
        <loc>${DOMAIN}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`;
    });

    // Dynamic Machine Pages
    machines.forEach(machine => {
        sitemap += `
    <url>
        <loc>${DOMAIN}/flota/${slugify(machine.name)}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>`;
    });

    sitemap += `
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log('✅ Sitemap generado en public/sitemap.xml');
};

generateSitemap();
