export class User {
    id: string;
    name: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: User) {
      this.id = data.id;
      this.name = data.name;
      this.password = data.password;
      this.email = data.email;
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;

    }
  }