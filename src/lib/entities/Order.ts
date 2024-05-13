import type { GetOrderData, OrderProductDTO } from "$lib/services/OrdersService";

export class Order {
  // id: string;
  // userName: string;
  // userPhone: string;
  // userAddress: string;
  // userEmail: string;
  // products: OrderProductDTO[];
  // createdAt: Date;
  // updatedAt: Date;
  // paymentMethod: OrderPaymentMethod;

  // constructor(input: Order){
  //   this.id = input.id;
  //   this.userName = input.userName;
  //   this.userPhone = input.userPhone;
  //   this.userAddress = input.userAddress;
  //   this.userEmail = input.userEmail;
  //   this.products = input.products;
  //   this.createdAt = input.createdAt;
  //   this.updatedAt = input.updatedAt;
  //   this.paymentMethod = input.paymentMethod;
  // }

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
    return order.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }
}

export type OrderPaymentMethod = "cash" | "credit-card" | "pix" | "debit-card";