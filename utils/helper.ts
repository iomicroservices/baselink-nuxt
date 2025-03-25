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