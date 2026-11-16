export const splitCat = (cat) => {
  if (!cat) return { subtitle: '', year: null };
  const parts = cat.split('•').map(p => p.trim());
  const lastPart = parts[parts.length - 1];
  
  if (/^\d{4}$/.test(lastPart)) {
    return {
      subtitle: parts.slice(0, -1).join(' • '),
      year: lastPart
    };
  }
  return { subtitle: parts.join(' • '), year: null };
};
