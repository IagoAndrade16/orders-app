import { Product } from "$lib/entities/Product";
import { OrdersApi } from "$lib/providers/orders-api/OrdersApi";

type ProductsServiceBaseOutput<T> = {
  status: 'SUCCESS' | 'ERROR' | 'UNAUTHORIZED';
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
      status: 'SUCCESS',
      data: {
        products: res.data.products.map((product: Product) => new Product(product)),
        total: res.data.quantity
      },
    }
    
  }

  static async get(id: string): Promise<ProductsServiceBaseOutput<Product>> {
    const res = await OrdersApi.get(`/product/${id}`);

    return {
      status: 'SUCCESS',
      data: new Product(res.data.product),
    }
  }
}

export type ListProductsInput = {
  page: number;
  pageSize: number;
  name?: string;
}