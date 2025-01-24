// > greater than
// < less than

import { suggestClothing } from "../suggestClothingfromWeather.js";

describe("test suggestClothing", function() {
    it("tests if humidity is 49% or below and temperature is 4ºC or below", function() {
      let humidity = 40;
      let temperature = 0;
      let sClothes = suggestClothing(humidity, temperature)
      expect(sClothes).toBe("A warm fall jacket");
    });

    it("tests humidity is 50% or above and temperature is 5ºC or above", function() {
        let humidity = 52;
        let temperature = 8;
        let sClothes = suggestClothing(humidity, temperature)
        expect(sClothes).toBe("A light rain jacket and an umbrella");
    });

      it("tests humidity is 49% or below and temperature is 5ºC or above", function() {
        let humidity = 45;
        let temperature = 10;
        let sClothes = suggestClothing(humidity, temperature)
        expect(sClothes).toBe("A light sweater");
    });

  });