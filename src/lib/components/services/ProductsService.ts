import { Product } from "../entities/Product";
import { OrdersApi } from "../providers/orders-api/OrdersApi";

type ProductsServiceBaseOutput<T> = {
  status: 'SUCESS' | 'ERROR' | 'UNAUTHORIZED';
  data: T;
}

type ListProductsResponse = {
  products: Product[];
  total: number;
}

export class ProductsService {
  static async list(input: ListProductsInput): Promise<ProductsServiceBaseOutput<ListProductsResponse>> {

    const res = await OrdersApi.post(`/product/list?page=${input.page}&pageSize=${input.pageSize}`, {
      name: input.name
    });

    // console.log('res', res.data);

    return {
      status: 'SUCESS',
      data: {
        products: res.data.products.map((product: Product) => new Product(product)),
        total: res.data.quantity
      },
    }
    
  }
}

export type ListProductsInput = {
  page: number;
  pageSize: number;
  name?: string;
}