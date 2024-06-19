import { S as Store } from "./Store.js";
const cartStore = Store.createStore("cart", []);
export {
  cartStore as c
};
