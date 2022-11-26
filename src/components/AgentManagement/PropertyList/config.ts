export interface Image {
  id: number;
  url: string;
  tag: string;
}
export interface Property {
  id: number;
  propertyType: string;
  title: string;
  price: number;
  livingRoom: number;
  bedroom: number;
  bathroom: number;
  garage: number;
  landSize: number;
  description: string;
  state: string;
  street: string;
  suburd: string;
  postcode: string;
  latitude: number;
  longitude: number;
  indoor: string;
  outdoor: string;
  status: string;
  createdTime: string;
  updatedTime: string;
  agent: {
    id: number;
    name: string;
    email: string;
    deleted: boolean;
    activated: boolean;
    createdTime: string;
    updatedTime: string;
    icon: string;
  };
  image: Image[];
}

// export interface NewProperty extends Property {
//   image: string;
//   totalPageNumber: number;
// }
