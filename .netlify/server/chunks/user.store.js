import { S as Store } from "./Store.js";
const userStore = Store.createStore("user", null);
export {
  userStore as u
};
