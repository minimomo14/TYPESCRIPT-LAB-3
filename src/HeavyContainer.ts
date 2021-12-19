import ShippingContainer from "./ShippingContainer";

class HeavyContainer implements ShippingContainer {
    tareWeight!: number;
    destination!: string;
    cargoWeight!: number = 0;
    constructor(tareWeight:number, destination:string, cargoWeight: number)
    getGrossWeight(): number {
        return new HeavyContainer(`${this.tareWeight} + ${this.cargoWeight}`);
    }
}