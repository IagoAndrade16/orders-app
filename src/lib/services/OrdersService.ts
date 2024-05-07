import { OrdersApi } from "$lib/providers/orders-api/OrdersApi";

type CreateOrderInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
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

export type GetOrderData = {
  id: string;
  createdAt: Date,
  userName: string;
  userPhone: string;
  userAddress: string;
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
  }[];
}

export type GetOrderOutput = {
  status: 'SUCCESS' | 'NOT_FOUND' | 'UNAUTHORIZED';
  data?: GetOrderData;
}

export type FetchOrdersInput = {
  email?: string;
  page: number;
  pageSize: number;
}

export type FetchOrdersOutput = {
  status: 'SUCCESS' | 'UNAUTHORIZED';
  data?: GetOrderData[];
}

export enum OrderStatus {
  WAIT_PAYMENT = 'Aguardando pagamento',
  PREPARE_LIST = 'Em preparação',
  DELIVERY_ROUTE = 'Rota de entrega',
  FINISHED = 'Entregue'
}

export class OrdersService {
  static async create(input: CreateOrderInput): Promise<CreateOrderOutput> {

    const res = await OrdersApi.post(`/orders`, {
      userName: `${input.firstName} ${input.lastName}`,
      userPhone: input.phone,
      userEmail: input.email,
      products: input.products,
      userAddress: `${input.city} - ${input.zipCode}, ${input.neighborhood}, ${input.street}, ${input.number}, ${input.complement}`
    });

    return res.data as CreateOrderOutput;
  }

  static async get(orderId: string | null): Promise<GetOrderOutput> {
    const res = await OrdersApi.get(`/orders/${orderId}`);

    if(res.statusCode === 404) {
      return {
        status: 'NOT_FOUND',
      }
    }

    if(res.statusCode === 416) {
      return {
        status: 'UNAUTHORIZED',
      }
    }

    return {
      status: 'SUCCESS',
      data: res.data as GetOrderOutput['data']
    } 
  }

  static async fetch(input: FetchOrdersInput): Promise<FetchOrdersOutput> {
    const res = await OrdersApi.post(`/orders/fetch?page=${input.page}&pageSize=${input.pageSize}`, {
      email: input.email
    });

    // console.log('fetch orders', res.data)

    return {
      status: 'SUCCESS',
      data: res.data as GetOrderData[]
    } 
  }
}