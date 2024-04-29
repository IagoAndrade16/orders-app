import { OrdersApi } from "$lib/providers/orders-api/OrdersApi";

type CreateOrderInput = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  zipCode: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
  products: OrderProductDTO[];
}

type OrderProductDTO = {
  productId: string;
  quantityOfProduct: number;
}

type CreateOrderOutput = {
  userName: string;
  userPhone: string;
  userAddress: string;
  products: OrderProductDTO[];
  orderId: string;
}

export class OrdersService {
  static async create(input: CreateOrderInput): Promise<CreateOrderOutput> {

    const res = await OrdersApi.post(`/orders`, {
      userName: `${input.firstName} ${input.lastName}`,
      userPhone: input.phone,
      products: input.products,
      userAddress: `${input.city} - ${input.zipCode}, ${input.neighborhood}, ${input.street}, ${input.number}, ${input.complement}`
    });

    return res.data as CreateOrderOutput;
    
  }
}