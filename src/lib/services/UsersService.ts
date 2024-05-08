import { OrdersApi } from "../providers/orders-api/OrdersApi";

type UserDataAuth = {
    result: {
        auth: {
            token: string;
            expInSecs: number;
        };
        user: {
            createdAt: string;
            email: string;
            id: string;
            name: string;
        };
    }  
}

type UserServiceInput = {
    name: string,
    password: string,
    email: string,
}

type UsersServiceOutput = {
    status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
}

type UserAuthOutput<T> = {
    status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
    data: T
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
            status: 'UNKNOWN',
        }        
    }

    static async authUser(input: AuthUserServiceInput): Promise<UserAuthOutput<UserDataAuth>> {
        const res = await OrdersApi.get(`/users/auth`, {
            email: input.email,
            password: input.password,      
        })      

        if (res.statusCode === 200) {
			return {
                status: 'SUCCESS',
                data: res.data
            }
		}

        if (res.statusCode === 416) {
			return {
                status: 'UNAUTHORIZED',
                data: res.data
            }
		}

        return {
            status: 'UNKNOWN',
            data: res.data
        }     
    }
}