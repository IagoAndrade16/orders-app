import { Buffer } from 'buffer';

import {
	type ApiResponse, type ApiHeaders, apiProvider,
} from '../api/ApiProvider';
import { jsonReader } from '../json-reader/JsonReader';

export class OrdersApi {
	private static _cachedBaseUrl: string | null = null;

	private static async _baseUrl(): Promise<string> {
		if (!this._cachedBaseUrl) {
			const config = await jsonReader.read('/config.json');
			this._cachedBaseUrl = config.apiBaseUrl;
		}

		// console.log('this._cachedBaseUrl', this._cachedBaseUrl);

		return this._cachedBaseUrl!;
	}

	static async get(route: string, auth?: AuthData): Promise<ApiResponse> {
		return apiProvider.get(await OrdersApi._path(route), OrdersApi.getHeaders(auth));
	}

	static async patch(route: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return apiProvider.patch(await OrdersApi._path(route), params, OrdersApi.getHeaders(auth));
	}

	static async put(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return apiProvider.put(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
	}

	static async post(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return apiProvider.post(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
	}

	static async delete(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return apiProvider.delete(await OrdersApi._path(url), params, OrdersApi.getHeaders(auth));
	}

	private static getHeaders(auth?: AuthData): ApiHeaders {
		const headers: ApiHeaders = {
			'Content-Type': 'application/json; charset=UTF-8',
			Accept: 'application/json',
		};

		if (auth) {
			if ('token' in auth) {
				const bearerAuthData = auth as BearerAuthData;
				headers.Authorization = `Bearer ${bearerAuthData.token}`;
			} else {
				const basicAuthData = auth as BasicAuthData;
				const base64 = Buffer.from(`${basicAuthData.document}:${basicAuthData.password}`, 'utf8').toString('base64');
				headers.Authorization = `Basic ${base64}`;
			}
		}

		return headers;
	}

	private static async _path(route: string): Promise<string> {
		return apiProvider.resolve(await this._baseUrl(), route);
	}
}

export type AuthData = BasicAuthData | BearerAuthData;

export type BasicAuthData = {
	document: string;
	password: string;
}

export type BearerAuthData = {
	token: string;
}
