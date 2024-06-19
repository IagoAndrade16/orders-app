import { O as OrdersApi } from "./OrdersApi.js";
class Product {
  id;
  name;
  description;
  price;
  imageUrl;
  createdAt;
  updatedAt;
  deletedAt;
  deleted;
  userId;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.imageUrl = data.imageUrl;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
    this.deleted = data.deleted;
    this.userId = data.userId;
  }
}
class ProductsService {
  static async create(input, token) {
    const res = await OrdersApi.post(`/product`, {
      ...input
    }, { token });
    if (res.statusCode === 416) {
      return {
        status: "UNAUTHORIZED",
        data: void 0
      };
    }
    return {
      status: "SUCCESS",
      data: void 0
    };
  }
  static async list(input) {
    const res = await OrdersApi.post(`/product/list?page=${input.page}&pageSize=${input.pageSize}`, {
      name: input.name
    });
    return {
      status: "SUCCESS",
      data: {
        products: res.data.products.map((product) => new Product(product)),
        total: res.data.quantity
      }
    };
  }
  static async get(id) {
    const res = await OrdersApi.get(`/product/${id}`);
    return {
      status: "SUCCESS",
      data: new Product(res.data.product)
    };
  }
  static async fetchReport(input, token) {
    const res = await OrdersApi.post(`/product/report`, input, { token });
    return {
      status: "SUCCESS",
      data: res.data
    };
  }
  static async updateProduct(data, id, token) {
    const res = await OrdersApi.patch(`/product/${id}`, {
      ...data
    }, { token });
    if (res.statusCode === 204) {
      return {
        status: "SUCCESS",
        data: void 0
      };
    }
    if (res.statusCode === 401) {
      return {
        status: "UNAUTHORIZED",
        data: void 0
      };
    } else {
      return {
        status: "ERROR",
        data: void 0
      };
    }
  }
  static async deleteProduct(data, token) {
    const res = await OrdersApi.delete(`/product/${data.productId}`, {}, { token });
    if (res.statusCode === 204) {
      return {
        status: "SUCCESS",
        data: void 0
      };
    } else {
      return {
        status: "ERROR",
        data: void 0
      };
    }
  }
}
export {
  ProductsService as P
};
