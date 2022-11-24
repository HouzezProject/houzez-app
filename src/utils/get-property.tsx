import axiosClient from "./axios";

interface PropertyFilter {
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

export const getPropertyData = async (filterValue: PropertyFilter, bounds: any) => {
  const size = 20;
  let url = "/properties?size=" + size;
  url = `${url}"&ne_lat="${bounds?.ne.lat}"&ne_lng="${bounds?.ne.lng}"&sw_lat="${bounds?.sw.lat}"&sw_lng="${bounds?.sw.lng}`;

  Object.keys(filterValue).forEach((k) => {
    const key = k as keyof PropertyFilter;
    const value = filterValue[key];
    if (value !== "any") {
      if (key === "propertyType") {
        url = `${url}&filter_${camelToSnakeCase(key)}=${value}`;
      } else if (key !== "minPrice" && key !== "maxPrice") {
        url = `${url}&filter_${camelToSnakeCase(key)}=${value.substring(0, 1)}`;
      } else {
        url = `${url}&filter_${camelToSnakeCase(key)}=${priceFormatter(value)}`;
      }
    }
  });

  // filterValue.propertyType === "any" ? "" : (url = url + "&filter_property_type=" + filterValue.propertyType);
  // filterValue.minPrice === "any" ? "" : (url = url + "&filter_min_price=" + priceToString(filterValue.minPrice));
  // filterValue.maxPrice === "any" ? "" : (url = url + "&filter_max_price=" + priceToString(filterValue.maxPrice));
  // filterValue.bedroom === "any" ? "" : (url = url + "&filter_bedroom=" + filterValue.bedroom.substring(0, 1));
  // filterValue.livingroom === "any" ? "" : (url = url + "&filter_livingroom=" + filterValue.livingroom.substring(0, 1));
  // filterValue.bathroom === "any" ? "" : (url = url + "&filter_bathroom=" + filterValue.bathroom.substring(0, 1));
  // filterValue.garage === "any" ? "" : (url = url + "&filter_garage=" + filterValue.garage.substring(0, 1));

  const res = await axiosClient.get(url);
  return res.data.propertyGetDtoList;
};