import { convertKilometerstoMiles } from "../convertKilometerstoMiles.js";

describe("test convertKilometerstoMiles", function() {
    it("tests 150km", function() {
        let km = 150;
        let miles = convertKilometerstoMiles(km);
      expect(miles.toFixed(2)).toBe("93.23");
    });

    it("tests 70km", function() {
        let km = 70;
        let miles = convertKilometerstoMiles(km);
      expect(miles.toFixed(2)).toBe("43.51");
    });
    it("tests 25km", function(){
      let km = 25;
      let miles = convertKilometerstoMiles(km);
    expect(miles.toFixed(2)).toBe("15.54")
    })
  });