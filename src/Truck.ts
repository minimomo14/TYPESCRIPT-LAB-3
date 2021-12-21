import ShippingContainer from "./ShippingContainer";

class Truck implements Transporter {
    maxWeight: number;
    container!: null | ShippingContainer;
    //container!: ShippingContainer;
    constructor(maxWeight:number) {
        this.maxWeight = maxWeight;
    };
    addContainer(container:ShippingContainer): void {};
    getTotalWeight(): number {
        return 0;
    };
    isOverweight(): boolean {
        if(container.getTotalWeight >= this.maxWeight){
            return true;
        } else {
            return false;
        };
    };
};
export default Truck;