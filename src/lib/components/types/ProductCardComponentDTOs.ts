export type ProductCardComponentInput = {
  imgSrc: string | null;
  title: string;
  text: string;
  price: number;
  productId: string;
  buttonColor: ButtonClass;
  id: string;
  buttonAdditionalClasses?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ButtonClass = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';