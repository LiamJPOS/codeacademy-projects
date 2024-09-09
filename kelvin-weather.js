//Today's forcast
const kelvin = 0;
console.log(kelvin);

//Celsius is 273 degrees less than Kelvin
var celsius = kelvin - 273;
console.log(celsius);

//Formula for converting Celsius to Farenheit 
var farenheit = celsius * (9/5) + 32;
//Removes decimals when converted;
farenheit = Math.floor(farenheit)
console.log(farenheit);


console.log(`The temperature is ${farenheit} degrees Fahrenheit.`)

