import ShippingContainer from "./ShippingContainer";

class Ship implements Transporter {
    maxWeight: number;
    containers: [];
    constructor(maxWeight:number){
        this.maxWeight = maxWeight
    }
    addContainer(container:ShippingContainer): void {};
    getTotalWeight():{
        return 
    }

}