import { Product } from "$lib/entities/Product";
import { OrdersApi } from "$lib/providers/orders-api/OrdersApi";

type ProductsServiceBaseOutput<T> = {
  status: 'SUCCESS' | 'ERROR' | 'UNAUTHORIZED';
  data: T;
}

export type CreateProductDTO = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

type ListProductsResponse = {
  products: Product[];
  total: number;
}

type DeleteProduct = {
  userId: string;
  productId: string;
}

type FetchProductsReportInput ={
  from?: Date;
  to?: Date;
}

export type FetchProductsReportOutput ={
  productName: string;
	productId: string;
	totalQuantity: number;
}

export class ProductsService {
  static async create(input: CreateProductDTO, token: string): Promise<ProductsServiceBaseOutput<void>> {

    const res = await OrdersApi.post(`/product`, {
      ...input
    }, { token });

    // console.log('res', res.data);

    if(res.statusCode === 416) {
      return {
        status: 'UNAUTHORIZED',
        data: undefined,
      }
    }

    return {
      status: 'SUCCESS',
      data: undefined,
    }
  }

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

  static async fetchReport(input: FetchProductsReportInput, token: string): Promise<ProductsServiceBaseOutput<FetchProductsReportOutput[]>> {
    const res = await OrdersApi.post(`/product/report`, input, { token });

    return {
      status: 'SUCCESS',
      data: res.data as FetchProductsReportOutput[],
    }
  }

  static async updateProduct(data: CreateProductDTO, id: string, token: string): Promise<ProductsServiceBaseOutput<void>> {
    const res = await OrdersApi.patch(`/product/${id}`, {
      ...data
    }, { token }) 

    if (res.statusCode === 204) {
      return {
        status: 'SUCCESS',
        data: undefined
      }
    }
    
    if (res.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
        data: undefined
      }
    }

    else {
      return {
        status: 'ERROR',
        data: undefined
      }
    }
  }

  static async deleteProduct(data: DeleteProduct, token: string): Promise<ProductsServiceBaseOutput<void>> {
    const res = await OrdersApi.delete(`/product/${data.productId}`, {}, { token });
    
    if (res.statusCode === 204) {
      return {
        status: 'SUCCESS',
        data: undefined
      }
    } else {
      return {
        status: 'ERROR',
        data: undefined
      }
    }
  }
}

export type ListProductsInput = {
  page: number;
  pageSize: number;
  name?: string;
}