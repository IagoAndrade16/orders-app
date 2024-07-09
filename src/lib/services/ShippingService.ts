import type { Shipping } from "$lib/entities/Shipping";
import { OrdersApi } from "../providers/orders-api/OrdersApi";

export type ShippingServiceInput = {
    city: string;
    value: number;
    token: string;
}

export type ShippingServiceOutput = {
    status: string;
}

export type ShippingServiceGetAllOutput = {
    status: string;
    data: {
        result: Shipping[]
    };
}

export type UpdateShippingInput = {
    id: string;
    city: string;
    value: number;
    token: string;
}

export type DeleteShippingInput = {
    token: string;
    id: string;
}

export class ShippingService {
    static async post(input: ShippingServiceInput): Promise<ShippingServiceOutput> {
        const res = await OrdersApi.post('/shipping/', {
            city: input.city,
            value: input.value,
        }, { token: input.token })

        if (res.statusCode === 200) {
            return {
                status: 'SUCCESS'
            }
        }

        return {
            status: 'UNKNOWN'
        }
    }

    static async getAll(): Promise<ShippingServiceGetAllOutput> {
        const res = await OrdersApi.get('/shipping'); 
        
        return {
            status: 'SUCCESS',
            data: res.data
        }    
    }

    static async update(input: UpdateShippingInput): Promise<ShippingServiceOutput> {
        const res = await OrdersApi.patch(`/shipping/${input.id}`, {
            city: input.city,
            value: input.value
        }, { token: input.token })

        if (res.statusCode === 200) {
            return {
                status: 'SUCCESS'
            }
        }

        return {
            status: 'UNKNOWN'
        }
    }

    static async delete(input: DeleteShippingInput): Promise<ShippingServiceOutput> {
        const res = await OrdersApi.delete(`/shipping/${input.id}`, {}, { token: input.token })

        if (res.statusCode === 200) {
            return {
                status: 'SUCCESS'
            }
        }

        return {
            status: 'UNKNOWN'
        }
    }
}