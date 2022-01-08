export type CardItemT = {
  name: string;
  description?: string;
  images: any;
  price: number;
  sizes: Array<string>;
  deliveryTime?: string;
  hasActions?: boolean;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type ProfilePreferencesT = {
  id: number;
  itemPriceRange: Array<number>;
  sustainabilityPreference: Array<number>;
  sizesPreference?: Array<string>;
};

export type ProfileAccountDetailsT = {
  id: number;
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
};

export type ProfileCreditCardInfoT = {
  id: number;
  cardNumber?: number;
  expirationDate?: Date;
  cvv?: number;
};

export type ProfileShippingAddressT = {
  id: number;
  country: string;
  city: string;
  postalCode: number;
  streetName: string;
  streetNumber: number;
};

export type OrdersT = {

};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

// Item information
export type ItemT = {
  id: number;
  name: string;
  description: string;
  images: any;
  price: number;
  sizes: Array<string>;
  deliveryTime?: string;
};
