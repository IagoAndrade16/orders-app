import { Buffer } from "buffer";
import axios from "axios";
class ApiProviderAxios {
  static defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  async get(url, headers) {
    const axiosRes = await axios.get(url, {
      headers: {
        ...ApiProviderAxios.defaultHeaders,
        ...headers
      }
    }).catch((err) => err.response);
    return {
      statusCode: axiosRes.status,
      data: axiosRes.data
    };
  }
  async patch(url, params, headers) {
    const axiosRes = await axios.patch(url, params, {
      headers: {
        ...ApiProviderAxios.defaultHeaders,
        ...headers
      }
    }).catch((err) => err.response);
    return {
      statusCode: axiosRes.status,
      data: axiosRes.data
    };
  }
  async put(url, params, headers) {
    const axiosRes = await axios.put(url, params, {
      headers: {
        ...ApiProviderAxios.defaultHeaders,
        ...headers
      }
    }).catch((err) => err.response);
    return {
      statusCode: axiosRes.status,
      data: axiosRes.data
    };
  }
  async post(url, params, headers) {
    const axiosRes = await axios.post(url, params, {
      headers: {
        ...ApiProviderAxios.defaultHeaders,
        ...headers
      }
    }).catch((err) => err.response);
    return {
      statusCode: axiosRes.status,
      data: axiosRes.data
    };
  }
  async delete(url, params, headers) {
    const axiosRes = await axios.delete(url, {
      data: params,
      headers: {
        ...ApiProviderAxios.defaultHeaders,
        ...headers
      }
    }).catch((err) => err.response);
    return {
      statusCode: axiosRes.status,
      data: axiosRes.data
    };
  }
  resolve(url, route) {
    const trimmedRoute = route.startsWith("/") ? route.substring(1) : route;
    if (url.endsWith("/")) {
      return url + trimmedRoute;
    }
    return `${url}/${trimmedRoute}`;
  }
}
const apiProvider = new ApiProviderAxios();
class OrdersApi {
  static _cachedBaseUrl = null;
  static async _baseUrl() {
    if (!this._cachedBaseUrl) {
      this._cachedBaseUrl = "http://localhost:3000";
    }
    return this._cachedBaseUrl;
  }
  static async get(route, auth) {
    return apiProvider.get(await OrdersApi._path(route), OrdersApi.getHeaders(auth));
  }
  static async patch(route, params, auth) {
    return apiProvider.patch(await OrdersApi._path(route), params, OrdersApi.getHeaders(auth));
  }
  static async put(url, params, auth) {
    return apiProvider.put(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
  }
  static async post(url, params, auth) {
    return apiProvider.post(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
  }
  static async delete(url, params, auth) {
    return apiProvider.delete(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
  }
  static getHeaders(auth) {
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json"
    };
    if (auth) {
      if ("token" in auth) {
        const bearerAuthData = auth;
        headers.Authorization = `Bearer ${bearerAuthData.token}`;
      } else {
        const basicAuthData = auth;
        const base64 = Buffer.from(`${basicAuthData.email}:${basicAuthData.password}`, "utf8").toString("base64");
        headers.Authorization = `Basic ${base64}`;
      }
    }
    return headers;
  }
  static async _path(route) {
    return apiProvider.resolve(await this._baseUrl(), route);
  }
}
export {
  OrdersApi as O
};
