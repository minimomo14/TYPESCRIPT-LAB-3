import Truck from "../src/Truck";
import HeavyContainer from "../src/HeavyContainer"
import LightContainer from "../src/LightContainer"

describe("Truck", () => {
    test("maxWeight property is set from constructor property", () => {
        let tomato:Truck = new Truck(5000);
        expect(tomato.maxWeight).toBe(5000);
    });
    test("container property is set to null in a new Truck instance", () => {
        let tomato:Truck = new Truck(1500);
        expect(tomato.container).toBe(null);
    });
    /*
    test("calling addContainer sets the container property", () => {
        let tomato:Truck = new Truck(2000);
        tomato.addContainer(2);
        expect(tomato.container).toBe(2);
    });
    
   test("test for getTotalWeight return the gross weight of the container is added", () => {
       let tomato:Truck = new Truck(10000);
       tomato.getTotalWeight();
       let lettuce:HeavyContainer = new HeavyContainer(200,"Michigan",300);
       let avocado:LightContainer = new LightContainer("California",100);
       expect(lettuce.getGrossWeight).toBe(300);
       expect(avocado.getGrossWeight).toBe(100);
   });
   
  test("getTotalWeight return 0 when container is null", () => {
      let tomato:Truck = new Truck(100);
      tomato.container = null
      expect(tomato.getTotalWeight).toBe(0);
  });
  test("isOverweight return true when the total is greater than maxWeight", () => {
      let tomato:Truck = new Truck();
  });
  */
});