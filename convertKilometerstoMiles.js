// example solution
// Take a variable with distance in **km** as input and an output of the same distance *converted* to **miles**

function convertKilometerstoMiles(km){
    let miles = km/1.609
    return miles; 
}

export {convertKilometerstoMiles}

// export and call function name allows for its use in another file