import { suggestClothing } from "../suggestClothingfromWeather.js";

describe("test suggestClothing", function() {
    it("tests humidity <=49% and temperature >=5ºC", function() {
      let humidity = 40;
      let temperature = 5;
      let sClothes = suggestClothing(humidity, temperature)
      expect(sClothes).toBe("Sweater");
    });

    it("tests humidity <=49% and temperature >=5ºC", function() {
        let humidity = 40;
        let temperature = 8;
        let sClothes = suggestClothing(humidity, temperature)
        expect(sClothes).toBe("Sweater");
      });

      it("tests humidity <=49% and temperature >=5ºC", function() {
        let humidity = 40;
        let temperature = 8;
        let sClothes = suggestClothing(humidity, temperature)
        expect(sClothes).toBe("Sweater");
      });

  });