import HeavyContainer from "../src/HeavyContainer";

describe("HeavyContainer", () => {
    test("the tareWeight, destination and cargoWeight", () => {
        let potato:HeavyContainer = new HeavyContainer(200,"Bangkok",300);
        expect(potato.tareWeight).toBe(200);
        expect(potato.destination).toBe("Bangkok");
        expect(potato.cargoWeight).toBe(300);
    });

    test("cargoWeight default to 0 when the 3rd parameter is omitted", () => {
        let potato:HeavyContainer = new HeavyContainer(200,"Bangkok",0);
        expect(potato.cargoWeight).toBe(0);
    });
    test("test 1: getGrossWeight return the tareWeight + cargoWeight", () => {
        let potato:HeavyContainer = new HeavyContainer(200,"Bangkok",500);
        potato.getGrossWeight();
        expect(potato.getGrossWeight()).toBe(700);
    });
    test("test 2: getGrossWeight return the tareWeight + cargoWeight", () => {
        let potato:HeavyContainer = new HeavyContainer(900,"Bangkok",900);
        potato.getGrossWeight();
        expect(potato.getGrossWeight()).toBe(1800);
    });
});