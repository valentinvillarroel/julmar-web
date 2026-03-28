export const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')              // descompone caracteres con tilde
        .replace(/[\u0300-\u036f]/g, '') // elimina los diacríticos (tildes, ñ→n, etc.)
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};
