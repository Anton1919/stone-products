export type ProductType = {
  id: string;
  mainImage: string;
  images: string[];
  name: string;
  price: string;
  modelNumber: string;
  articleNumber: string;
  characteristics: {
    stoneType: string;
    productType: string;
    location: string;
    color: string;
  };
  description: string;
  rating: number;
};
