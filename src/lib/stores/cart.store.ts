import Store from "$lib/core/Store";
import type { Product } from "$lib/entities/Product";

type CartStore = Product & {
  quantity: number;
};

export const cartStore = Store.createStore<CartStore[]>('cart', []);
