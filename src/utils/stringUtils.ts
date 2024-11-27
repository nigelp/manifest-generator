export function generateSafeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    || 'pwa-manifest'; // Fallback if empty
}