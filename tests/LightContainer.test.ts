import LightContainer from "../src/LightContainer";

describe("LightContainer", () => {
    test("The destination and cargoWeight properties are set from constructor", ()=> {
        let potato:LightContainer = new LightContainer("Canada",1000);
    expect(potato.destination).toBe("Canada");
    expect(potato.cargoWeight).toBe(1000);
    });
    
    test("carWeight defaults to 0, when the second constrctor parameter is omitted", ()=>{
        let potato:LightContainer = new LightContainer("USA", 0);
    expect(potato.cargoWeight).toBe(0); 
    });
    test("getGrossWeight return the cargoWeight test 1", () =>{
        let potato:LightContainer = new LightContainer("USA", 200);
        potato.getGrossWeight();
        expect(potato.cargoWeight).toBe(200);  
    });
       
    test("getGrossWeight return the cargoWeight test 2", () =>{
        let potato:LightContainer = new LightContainer("China", 99);
        potato.getGrossWeight();
        expect(potato.cargoWeight).toBe(99);  
    });

});