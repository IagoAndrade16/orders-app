import type { GetOrderData, OrderProductDTO } from "$lib/services/OrdersService";

export class Order {

  constructor(
    private id: string,
    private userName: string,
    private userPhone: string,
    private userAddress: string,
    private userEmail: string,
    private products: OrderProductDTO[],
    private createdAt: Date,
    private updatedAt: Date,
    private paymentMethod: OrderPaymentMethod
    
  ){}

  static calcTotalPrice(order: GetOrderData): number {
    return order.shippingPrice + order.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }
}

export type OrderPaymentMethod = "cash" | "credit-card" | "pix" | "debit-card";
export enum OrderPaymentMethodEnum {
  cash = "Em dinheiro",
  'credit-card' = "Cartão de crédito",
  pix = "Pix",
  'debit-card' = "Cartão de débito"
}