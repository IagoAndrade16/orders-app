export class Shipping {
    id: string;
    city: string;
    value: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Shipping){
        this.id = data.id;
        this.city = data.city;
        this.value = data.value;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}