import axiosClient from "../../utils/axios";

interface PropertyFilter {
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedroom: string;
  livingroom: string;
  bathroom: string;
  garage: string;
}

export const getPropertyData = async (filterValue: PropertyFilter, bounds: null) => {
  const size = 20;
  let url = `/properties?sizee=` + size;
  url =
    url +
    "&ne_lat=" +
    bounds?.ne.lat +
    "&ne_lng=" +
    bounds?.ne.lng +
    "&sw_lat=" +
    bounds?.sw.lat +
    "&sw_lng=" +
    bounds?.sw.lng;
  filterValue.propertyType === "any" ? "" : (url = url + "&filter_property_type=" + filterValue.propertyType);
  filterValue.minPrice === "any"
    ? ""
    : (url =
        url +
        "&filter_min_price=" +
        filterValue.minPrice.substring(1, filterValue.minPrice.length).replaceAll(",", ""));
  filterValue.maxPrice === "any"
    ? ""
    : (url =
        url +
        "&filter_max_price=" +
        filterValue.maxPrice.substring(1, filterValue.maxPrice.length).replaceAll(",", ""));
  filterValue.bedroom === "any" ? "" : (url = url + "&filter_bedroom=" + filterValue.bedroom.substring(0, 1));
  filterValue.livingroom === "any" ? "" : (url = url + "&filter_livingroom=" + filterValue.livingroom.substring(0, 1));
  filterValue.bathroom === "any" ? "" : (url = url + "&filter_bathroom=" + filterValue.bathroom.substring(0, 1));
  filterValue.garage === "any" ? "" : (url = url + "&filter_garage=" + filterValue.garage.substring(0, 1));

  try {
    const res = await axiosClient.get(url);
    return res.data.propertyGetDtoList;
  } catch (error) {
    console.log(`Fetch data Error: ${error}`);
  }
};
