export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'camiseta';
  isNew?: boolean;
  colors: string[];
  sizes: string[];
  description: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface CheckoutData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: 'pix' | 'card';
}