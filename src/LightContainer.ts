import ShippingContainer from "./ShippingContainer";

class LightContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number = 0;
    constructor (destination:string,cargoWeight: number) {
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }

    getGrossWeight(): number {
        console.log(`${this.cargoWeight}`)
    }
}
export default LightContainer;