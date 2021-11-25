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

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
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
