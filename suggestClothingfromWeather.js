// 2) Take a variable with the temperature and another variable with the relative humidity and output a clothing suggestion

function suggestClothing(temperature, humidity){
    let clothes; 
    if(humidity >= 50 && temperature >=5){
        clothes ="A light rain jacket and an umbrella";
    }
    else if (humidity >= 50 && temperature <=4){
        clothes ="A warm winter jacket and a toque";
    }
    else if (humidity <= 49 && temperature <=4){
        clothes = "A warm fall jacket";
    }
    else if (humidity <=49 && temperature >=5){
        clothes = "A sweater"
    }
}
export {suggestClothing}