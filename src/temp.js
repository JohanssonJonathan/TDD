function toFahrenheit(degrees) {
  let deg;
   if(typeof degrees !== "object"){
   deg= Number(degrees)

   }

  if (deg >= -273.15 && deg < 99999999999999999999999999999999999999999999999999999) {
    // F = degrees * 9/5 + 32
    let farenheit = (deg * 9 / 5 + 32)
    return +(Math.round(farenheit + "e+2")  + "e-2");
  } else {
    return "faileru"
    //isNaN(123) /false
    //isNaN("hello") / true
  }
}
export {
  toFahrenheit
};
