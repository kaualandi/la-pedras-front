export interface IImage {
  id: number;
  url: string;
  created_at: Date;
  updated_at: Date;
  product_id: number;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  images: IImage[];
  category_id: number;
  measure_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
}
