export default function formatSlug(slug) {
    return slug
      // Lowercase the entire string
      .toLowerCase()
      // Normalize the string to remove accents
      .normalize("NFD")
      // Remove diacritics
      .replace(/[\u0300-\u036f]/g, "")
      // Replace spaces with hyphens
      .replace(/\s+/g, "-")
      // Remove any characters that are not alphanumeric or hyphens
      .replace(/[^a-z0-9-]/g, "");
  }
  
  export function extractPostId(slug) {
    const regex = /-(\d+)$/;
    const match = slug.match(regex);
    
    return match ? match[1] : null;
  }
  