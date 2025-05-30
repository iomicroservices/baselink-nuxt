export function makeFirstCharUpper(val: string) {
  if (val === '')
    return val
  const firstChar = val.at(0)?.toLocaleUpperCase() || ''
  const otherChar = val.slice(1)
  return firstChar + otherChar
}

export function getPathExtension(city: string | string[], region: string | string[], area: string | string[]) {
  if (!city) {
    return '';
  } else if (city && !region && !area) {
    return `/local-city/${city}`;
  } else if (city && region) {
    return `/local-region/${city}/${region}`;
  } else if (city && area) {
    return `/local-area/${city}/${area}`;
  }
  return ''; // Default case, if needed
}

// currency formatter
export function useFormatPrice(price: number) {
  return `£${price.toFixed(2)}`;
}

// short date formatter
export function formatShortDate(dateString: string): string {
  if (!dateString) return '';

  const date = new Date(dateString);

  return date.toLocaleDateString('en-GB', {
    weekday: 'short', // "Wed"
    day: '2-digit',   // "30"
    month: 'short'    // "Apr"
  }).replace(',', ''); // remove the comma if needed
}

// utils/format-word.ts
export function formatPlural(count: number, singular: string, plural?: string): string {
  if (count === 1) return singular;
  return plural || singular + 's';
}