import { OrdersApi } from "../providers/orders-api/OrdersApi";

type UserServiceInput = {
    name: string,
    password: string,
    email: string,
}

type UsersServiceOutput = {
    status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
}

type AuthUserServiceInput = {
    email: string,
    password: string,
}


export class UsersService {
    static async post(input: UserServiceInput): Promise<UsersServiceOutput> {
        const res = await OrdersApi.post(`/users/`, {
            name: input.name,
            password: input.password,
            email: input.email,
        });

        
        if (res.statusCode === 201) {
			return {
                status: 'SUCCESS',
            }
		}

        if (res.statusCode === 416) {
			return {
                status: 'UNAUTHORIZED',
            }
		}

        return {
            status: 'UNKNOWN'
        }        
    }

    static async authUser(input: AuthUserServiceInput): Promise<UsersServiceOutput> {
        const res = await OrdersApi.get(`/users/auth`, {
            email: input.email,
            password: input.password,      
        })

        if (res.statusCode === 200) {
			return {
                status: 'SUCCESS',
            }
		}

        if (res.statusCode === 416) {
			return {
                status: 'UNAUTHORIZED',
            }
		}

        return {
            status: 'UNKNOWN'
        }     
    }
}