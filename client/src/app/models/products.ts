export interface Product {
  id: number;
  name: string;
  description: string;
  handle: string;
  category: string;
  price: number;
  pictureUrl: string;
  type?: string;
  brand: string;
  quantityInStock?: number;
}
