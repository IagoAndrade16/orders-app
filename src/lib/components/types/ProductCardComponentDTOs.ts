export type ProductCardComponentInput = {
  imgSrc: string | null;
  title: string;
  text: string;
  productId: string;
  buttonColor: ButtonClass;
  buttonAdditionalClasses?: string;
};

export type ButtonClass = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';