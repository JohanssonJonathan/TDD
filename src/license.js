function canGetLicense(license, age){

  let inputLicense;

  if(typeof license === "string"){
     inputLicense = license.toUpperCase();
  }else if(typeof license === "number"){
         inputLicense = "number".toUpperCase()
  }
  console.log(typeof age);

  let inputAge = Number(age);
  // console.log(inputAge);

 if(inputAge !== undefined){
  inputAge = inputAge.toFixed(0)

 }

console.log(inputLicense)
console.log(inputAge)
  switch (inputLicense) {
    case "A":

      if(inputAge >= 24 && inputAge <= 120 ){
        return true;
      }
      else{
              console.log(age)

         throw new Error('Not allowed to take license A')
      }
      break;
    case "B":
      if(inputAge >= 18 && inputAge <= 120){
      return true;
      }
      else{
         throw new Error('Not allowed to take license B')
      }
      break;
    case "BE":
      if(inputAge >= 18 && inputAge <= 120){
       return true;
      }
      else{
         throw new Error('Not allowed to take license BE')
      }
      break;
    case "C":
      if(inputAge >= 21 && inputAge <= 120){
      return true;
      }
      else{
         throw new Error('Not allowed to take license C')
      }
      break;
    case "D":
      if(inputAge >= 24 && inputAge <= 120){
      return true;
      }
      else{
         throw new Error('Not allowed to take license D')
      }
      break;
    case "NUMBER":
        throw new Error('Not allowed to take license A')

      break;
    default:
    // console.log("Something went wrong")
      // return false
      throw new Error('You made a mistake filling out the function, pleb')
    break;

  }
}

export { canGetLicense };
