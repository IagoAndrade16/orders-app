import Store from "$lib/core/Store";
import type { User } from "$lib/entities/User";

type UserStore = User;

export const userStore = Store.createStore<UserStore | null>('user', null);
