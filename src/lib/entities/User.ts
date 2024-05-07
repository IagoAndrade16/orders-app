import { Engine } from "$lib/core/Engine";
import { userStore } from "$lib/stores/user.store";

export class User {
    token: string;
    id: string;
    name: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    isOwner: boolean;

    constructor(data: User) {
      this.id = data.id;
      this.name = data.name;
      this.password = data.password;
      this.email = data.email;
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;
      this.token = data.token;
      this.isOwner = data.isOwner;
    }

    static logout() {
      userStore.set(null);
      Engine.navigateTo("/")
    }

    static validateOwnerPermissions(user: User | null) {
      if (!user || !user.isOwner) {
        return false;
      }

      return true;
    }
  }