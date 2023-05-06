export interface IImage {
  id: number;
  url: string;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  images: IImage[];
  price: number;
  category_id: number;
  created_at: string;
  updated_at: string;
}
