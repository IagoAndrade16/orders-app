import { O as OrdersApi } from "./OrdersApi.js";
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["PREPARE_LIST"] = "Em preparação";
  OrderStatus2["DELIVERY_ROUTE"] = "Rota de entrega";
  OrderStatus2["FINISHED"] = "Entregue";
  return OrderStatus2;
})(OrderStatus || {});
class OrdersService {
  static async create(input) {
    const res = await OrdersApi.post(`/orders`, {
      userName: `${input.firstName} ${input.lastName}`,
      userPhone: input.phone,
      userEmail: input.email,
      products: input.products,
      paymentMethod: input.paymentMethod,
      userAddress: `${input.city} - ${input.zipCode}, ${input.neighborhood}, ${input.street}, ${input.number}, ${input.complement}`
    });
    return res.data;
  }
  static async get(orderId) {
    const res = await OrdersApi.get(`/orders/${orderId}`);
    if (res.statusCode === 404) {
      return {
        status: "NOT_FOUND"
      };
    }
    if (res.statusCode === 416) {
      return {
        status: "UNAUTHORIZED"
      };
    }
    return {
      status: "SUCCESS",
      data: res.data
    };
  }
  static async fetch(input) {
    const res = await OrdersApi.post(`/orders/fetch?page=${input.page}&pageSize=${input.pageSize}`, {
      email: input.email
    });
    return {
      status: "SUCCESS",
      data: res.data
    };
  }
  static async updateStatus(input, token) {
    const res = await OrdersApi.patch(`/orders/${input.orderId}/status`, {
      newStatus: input.status
    }, { token });
    if (res.statusCode === 416) {
      return {
        status: "UNAUTHORIZED"
      };
    }
    if (res.statusCode === 204) {
      return {
        status: "SUCCESS"
      };
    }
    return {
      status: "UNKNOWN"
    };
  }
}
class Masks {
  static braziliamPhoneNumber(value) {
    if (value.length > 15)
      return value.slice(0, 15);
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(\d{4})(\d)/, "$1$2");
  }
  static zipCode(value) {
    if (value.length > 9)
      return value.slice(0, 9);
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").replace(/(\d{3})(\d)/, "$1$2");
  }
}
export {
  Masks as M,
  OrderStatus as O,
  OrdersService as a
};
