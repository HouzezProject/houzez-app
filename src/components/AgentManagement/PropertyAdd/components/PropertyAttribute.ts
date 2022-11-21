export interface PropertyAttribute {
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
    suburb: string;
    street: string;
    postcode: number;
    preowned: boolean;
    latitude: number;
    longitude: number;
    indoor: Map<String, boolean>;
    outdoor: Map<String, boolean>;
}