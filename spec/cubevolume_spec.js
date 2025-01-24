import { length2Volume } from "../length2CubeVolume.js";

describe("test length2Volume", function() {
    it("tests 2 cm", function() {
      let length = 2;
      let volume = length2Volume(length)
      expect(volume.toFixed(2)).toBe("8.00");
    });

    it("tests 6 cm", function() {
        let length = 6;
        let volume = length2Volume(length)
        expect(volume.toFixed(2)).toBe("216.00");
    
    });

    it("tests 10 cm", function() {
        let length = 10;
        let volume = length2Volume(length)
        expect(volume.toFixed(2)).toBe("1000.00");
    });
  });