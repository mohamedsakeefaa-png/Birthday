export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.replace(/^\//, '');
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
