export type ProductType = {
  _id: string;
  id: string;
  mainImage: string;
  images: { id: string; image: string }[];
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
