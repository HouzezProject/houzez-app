const createData = (
  id: number,
  img: string,
  name: string,
  state: string,
  suburd: string,
  street: string,
  post: string,
  price: string,
  beds: number,
  baths: number,
  garages: number,
  landSize: number,
  type: string,
  status: string,
  inspectionDate: string,
  inspectionTime: string
) => ({
  id,
  img,
  name,
  state,
  suburd,
  street,
  post,
  price,
  beds,
  baths,
  garages,
  landSize,
  type,
  status,
  inspectionDate,
  inspectionTime
});
export interface createData {
  id: number;
  img: string;
  name: string;
  state: string;
  suburd: string;
  street: string;
  post: string;
  price: string;
  beds: number;
  baths: number;
  garages: number;
  landSize: number;
  type: string;
  status: string;
  inspectionDate: string;
  inspectionTime: string;
}
const creatMockDate = (count: number, rowsPerPage: number, page: number) => ({
  count,
  rowsPerPage,
  page
});
export const PropertyDatarows = [
  createData(
    1,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    2,
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    4,
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for rent",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    5,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    6,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    7,
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for rent",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    8,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Luxury Family Home",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    9,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    10,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  ),
  createData(
    11,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    "Gorgeous Villa Bay View",
    "CA 90015",
    "Los Angeles",
    "San Pdro Street",
    "1421",
    "$13,000",
    3,
    2,
    2,
    1440,
    "Apartment",
    "for sale",
    "5 Apr",
    "PM 5:00"
  )
];

