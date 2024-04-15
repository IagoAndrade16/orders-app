import { Product } from "../entities/Product";
import { OrdersApi } from "../providers/orders-api/OrdersApi";

type ProductsServiceBaseOutput<T> = {
  status: 'SUCESS' | 'ERROR' | 'UNAUTHORIZED';
  data: T;
}

export class ProductsService {
  static async list(input: ListProductsInput): Promise<ProductsServiceBaseOutput<Product[]>> {

    const res = await OrdersApi.get(`/product?page=${input.page}&pageSize=${input.pageSize}`);

    console.log('res', res.data);

    return {
      status: 'SUCESS',
      data: res.data.products.map((product: Product) => new Product(product)),
    }
    
  }
}

export type ListProductsInput = {
  page: number;
  pageSize: number;
}