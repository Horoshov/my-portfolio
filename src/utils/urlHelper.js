/**
 * Нормализует путь, добавляя слеш в конце, если его нет
 * @param {string} path 
 * @returns {string}
 */
export const normalizePath = (path) => {
  if (path === '/' || path.includes('#') || path.includes('?')) return path;
  return path.endsWith('/') ? path : `${path}/`;
};
