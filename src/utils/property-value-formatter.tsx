interface PropertyFilter {
  suburb: string;
  postcode: string;
  state: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedroom: string;
  livingroom: string;
  bathroom: string;
  garage: string;
}

const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
const priceFormatter = (price: string) => price.substring(1, price.length).replaceAll(",", "");

export const propertyValueFormat = (targetUrl: string, sizeValue: string, filterValue: PropertyFilter, bounds: any) => {
  let url = targetUrl;
  const size = sizeValue;
  url = `${url}?size=${size}`;
  if (bounds) {
    url = `${url}&ne_lat=${bounds?.ne.lat}&ne_lng=${bounds?.ne.lng}&sw_lat=${bounds?.sw.lat}&sw_lng=${bounds?.sw.lng}`;
  }

  Object.keys(filterValue).forEach((k) => {
    const key = k as keyof PropertyFilter;
    const value = filterValue[key];
    if (value !== "any") {
      if (key === "suburb" || key === "postcode" || key === "state" || key === "propertyType") {
        url = `${url}&filter_${camelToSnakeCase(key)}=${value}`;
      } else if (key !== "minPrice" && key !== "maxPrice") {
        url = `${url}&filter_${camelToSnakeCase(key)}=${value.substring(0, 1)}`;
      } else {
        url = `${url}&filter_${camelToSnakeCase(key)}=${priceFormatter(value)}`;
      }
    }
  });
  return url;
};
