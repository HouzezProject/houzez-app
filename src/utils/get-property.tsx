import axiosClient from "./axios";
import { propertyValueFormat } from "./property-value-formatter";

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

export const getPropertyData = async (targetUrl: string, size: string, filterValue: PropertyFilter, bounds: any) => {
  const url = propertyValueFormat(targetUrl, size, filterValue, bounds);

  const res = await axiosClient.get(url);
  return res.data.propertyGetDtoList;
};
