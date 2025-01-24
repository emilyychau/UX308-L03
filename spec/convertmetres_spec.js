import { convertMetres2Yards } from "../convertMetres2Yards.js";

describe("test convertMetres2Yards", function() {
    it("tests 150 m", function() {
        let metres = 150;
        let yards = convertMetres2Yards(metres);
      expect(yards.toFixed(2)).toBe("164.04");
    });

    it("tests 5 m", function() {
        let metres = 5;
        let yards = convertMetres2Yards(metres);
      expect(yards.toFixed(2)).toBe("5.47");
    });

    it("tests 20 m", function() {
        let metres = 20;
        let yards = convertMetres2Yards(metres);
      expect(yards.toFixed(2)).toBe("21.87");
    });
  });