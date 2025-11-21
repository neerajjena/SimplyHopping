export interface Attraction {
  name: string;
  description: string;
  image: string;
  price?: string;
  details?: string[];
}

export interface Region {
  id: string;
  name: string;
  attractions: Attraction[];
}

export interface TransportOption {
  mode: string;
  description: string;
  costVND?: string;
  costINR?: string;
  details?: string;
}

export interface Dish {
  name: string;
  description: string;
  isVeg?: boolean;
}

export interface Accommodation {
  name: string;
  location: string;
  description: string;
  image: string;
}