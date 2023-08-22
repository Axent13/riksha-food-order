export type ProductProperties = {
  isSpicy?: boolean;
  isBaked?: boolean;
  isTempura?: boolean;
  isBranded?: boolean;
  isGrill?: boolean;
};

export type ProductFeatures = {
  isTop?: boolean;
  isNew?: boolean;
};

export type Product = {
  _id?: string;
  price: number;
  image?: string;
  properties?: ProductProperties;
  features?: ProductFeatures;
  weight?: number;
  kkals?: number;
  title: string;
  components?: string;
  oldPrice?: number;
  categories: string[];
};
