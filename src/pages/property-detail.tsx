import axios from "axios";
import { NextPage, NextPageContext } from "next";
import PropertyDetailPage from "../components/PropertyDetail/PropertyDetailPage";

interface PropertyImage {
  id: number;
  url: string;
  tag: string;
}

interface Agent {
  id: number;
  name: string;
  icon: string;
  email: string;
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
  suburb: string;
  postcode: number;
  latitude: number;
  longitude: number;
  indoor: string;
  outdoor: string;
  preowned: boolean;
  status: string;
  agent: Agent;
  image: PropertyImage[];
}

const propertyDetail: NextPage<{ property: Property }> = ({ property }) => <PropertyDetailPage property={property} />;
export default propertyDetail;

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const { id } = query;
  const { data: property } = await axios.get<Property>(`${process.env.NEXT_PUBLIC_SERVICE_HOST}/properties/${id}`);
  return {
    props: {
      property
    }
  };
};
