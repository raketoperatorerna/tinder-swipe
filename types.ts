export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  price: number;
  deliveryTime?: string;
  sizes: Array<string>;
  images: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
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

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  price: number;
  deliveryTime?: string;
  sizes: Array<string>;
  images: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};
