import { g as goto } from "./client.js";
class Engine {
  static back() {
    window.history.back();
  }
  static async navigateTo(page) {
    await goto(page, { replaceState: true });
  }
  static reload() {
    window.location.reload();
  }
}
export {
  Engine as E
};
