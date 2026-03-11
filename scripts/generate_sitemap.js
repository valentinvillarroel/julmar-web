import fs from 'fs';
import { machines } from '../src/data/machines.js';
import { seoLocations, seoServices } from '../src/data/seoMatrix.js';

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

const DOMAIN = 'https://julmar.cl';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

const generateSitemap = () => {
    // Solo URLs reales — sin anchors (#)
    const staticPages = [
        { path: '',        priority: '1.0', changefreq: 'weekly'  },
        // { path: '/mixer',  priority: '0.8', changefreq: 'monthly' },
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Páginas estáticas
    staticPages.forEach(({ path, priority, changefreq }) => {
        sitemap += `
    <url>
        <loc>${DOMAIN}${path}</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
    });

    // Páginas dinámicas de flota
    machines.forEach(machine => {
        const slug = slugify(machine.name);
        sitemap += `
    <url>
        <loc>${DOMAIN}/flota/${slug}</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>`;
    });

    // Páginas Satélite (SEO Silo Local)
    let localPagesCount = 0;
    seoServices.forEach(service => {
        seoLocations.forEach(location => {
            localPagesCount++;
            sitemap += `
    <url>
        <loc>${DOMAIN}/arriendo/${service.slug}/en/${location.slug}</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
        });
    });

    sitemap += `
</urlset>`;

    fs.writeFileSync('./public/sitemap.xml', sitemap);
    console.log(`✅ Sitemap generado con ${staticPages.length + machines.length + localPagesCount} URLs en public/sitemap.xml`);
};

generateSitemap();
