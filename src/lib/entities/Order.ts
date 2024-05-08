import type { GetOrderData } from "$lib/services/OrdersService";

export class Order {
  static calcTotalPrice(order: GetOrderData): number {
    return order.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }
}