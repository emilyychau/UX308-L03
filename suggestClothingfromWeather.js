// 2) Take a variable with the temperature and another variable with the relative humidity and output a clothing suggestion
// > greater than
// < less than

function suggestClothing(humidity, temperature){
    let sClothes; 
    if(humidity >= 50 && temperature >= 5){
        sClothes = "A light rain jacket and an umbrella";
    }
    else if (humidity >= 50 && temperature <= 4){
        sClothes = "A warm winter jacket and a toque";
    }
    else if (humidity <= 49 && temperature >= 5){
        sClothes = "A light sweater";
    }
    else if (humidity <= 49 && temperature <= 4){
        sClothes = "A warm fall jacket";
    }
}
export {suggestClothing}