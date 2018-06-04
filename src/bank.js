

/*
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };
// exempel på användning:

deposit(kalle, 200);
withdraw(kalle, 150);
transfer(kalle, greta, 400);*/

//Kollar om objectet är korrekt med properties och sina värden.
function checkIfAccountIsCorrect(account){

     if(account === undefined){
          throw new Error('account must be an object with two properties named name and balance!');
    }
       //Om account är en array så går den in här och kastar ett error.
  if(Array.isArray(account) === true || account === null){

    throw new Error('Account must be an object not an array or null!');

  }else{

// Om account inte är ett object så går den in här och kastar ett error.
    if(typeof account !== "object"){

          throw new Error('Account must be stored as an object');

    }else{

// Om account är ett object så går den in här.

//När båda är false så betyder det att varje propertie har fel namn.
      let arrayBoolPropertie = [false,false];

//När båda har false så betyder det att varje properties innehåll har fel datatyp.
      let arrayBoolContent = [false,false]

//Loopar igenom objectet för att se om varje propertie har rätt namn.
      for(let x in account){

        //Om objectet har en propertie som heter name så blir de true.
        if(x === "name"){

        //Ändrar arrayBoolPropertie[0] till true för att visa att name propertien finns i objectet.
          arrayBoolPropertie[0] = true;

        //Om name propertien innehåller en string så går den in här.
          if(typeof account[x] === "string"){

            //Om det är en string så innehåller name rätt datatyp och arrayBoolContent[0] uppdateras till true.
            arrayBoolContent[0] = true
          }
        }

        //Om objectet har en propertie som heter balance så blir de true.
        if(x === "balance"){

         //Ändrar arrayBoolPropertie[0] till true för att visa att name propertien finns i objectet.
          arrayBoolPropertie[1] = true


          let nr = NaN;
        // Om innehållet i propertien balance inte är en array eller null så går den in här. Tom array blir noll och det vill vi inte ha med. Vi vill inte heller att null ska kunna komma in.
          if(Array.isArray(account[x]) !== true && account[x]!== null){
          //Här kollar vi om balance inn ehåller en tom sträng. Tomma strängar blir noll när man omvandlar dem med Number()

            let riktigtNummer = Number(account[x])


          if(isNaN(riktigtNummer)){


            if(account[x].charAt(0) !== "" && account[x].charAt(0) !== " "){

                          //Ingen tom sträng eller array. Talet är korrekt.
                          nr = Number(account[x])
                }
          }else{
              account[x] = riktigtNummer
              if(Number(account[x]) < 0){
                throw new Error("Account balance must be a positive number")
              }
              nr = Number(account[x])

          }


          }

        //Om det inte är NaN eller är ett tal som är Infinity så går den in här.
          if(isNaN(nr) === false && nr !== Infinity ){

        //uppdaterar innehållet till balance propertien till true.
            arrayBoolContent[1] = true
          }
        }
      }


      //Kollar arrayBoolContent arrayen och arrayBoolPropertie arrayen.
      //Om någon av dem innehåller false så kommer det kasta ett error.
      //Det betyder antingen att de inte har rätt propertie namn som name och balance.
      //Det kan också kasta ett error om inte name och balance har rätt datatyper.

      // Här kollar den propertien name och balance.
      if(arrayBoolPropertie[0] === false || arrayBoolPropertie[1] === false){
         throw new Error('Account must contain a name and a balance propertie');
      }
      //Här kollar den om innehållet i name och balance har rätt datatyp.
      else if(arrayBoolContent[0] === false || arrayBoolContent[1] ===false){
          throw new Error('The account properties must contain a string and a number');
      }else{
        return account
      }
    }

  }


}

function checkIfAmountIsCorrect(amount){

    if(amount === undefined){
          throw new Error('Amount must be a number!');
    }
    //Vi utgår ifrån att amount inte är ett nummer från början.
  //Genom att sätta nrAmount till NaN.
  let nrAmount = NaN

  //Om amount är ett object så kommer den inte komma in här och nr ammount kommer att fortsätta vara NaN.

  if(typeof amount === "number"){

    if(isNaN(amount)=== false && amount !== Infinity){
      if(Number(amount < 0)){
          throw new Error('Amount must be a positive number!');

      }
      nrAmount = (Number(amount))

    }

  }else if(typeof amount !== "object" && amount.charAt(0) !== "" && amount.charAt(0) !== " "){



    //Amount är inget object så vi uppdaterar talet till ett nummer.
    nrAmount = (Number(amount))

    //Om talet inte är NaN eller har värdet Infinity så kommer den att gå in här och uppdatera nrAmount till sitt riktiga värde.
    if(isNaN(nrAmount) === false && nrAmount !== Infinity){
      if(Number(amount)< 0){
        throw new Error('Amount must be a positive number!');
      }
      nrAmount = Number(amount);
    }else{

    //Om talet är antingen NaN eller infinity så förblir nrAmount NaN
      nrAmount = NaN
    }
  }

//Om nrAmount fortfarande är NaN här nere så kommer det att kasta ett error.
  if(isNaN(nrAmount)){
    throw new Error('Amount must be a number!');
  }else{
    return nrAmount
  }

}

let x =0;
//För att sätta in pengar på sitt egna konto.
function deposit(account, amount) {

  // 1: Först kollar vi account parametern.
  ///////////////////////////////////////

  //Det kollar vi med funktionen som hanterar objektet.
  checkIfAccountIsCorrect(account)

  // 2: Sen kollar vi amount parametern
  ///////////////////////////////////////

	checkIfAmountIsCorrect(amount);



//Om erroret inte kastas så ökar vi account.balane med nrAmount för då vet vi att värdet är ett korrekt nr.

    if(amount === 0){
      throw new Error("You can not put in 0")
    }

account.balance += checkIfAmountIsCorrect(amount);

  console.log(amount)


}


//Ta ut pengar från sitt egna konto.
function withdraw(account, amount) {

  checkIfAccountIsCorrect(account)
  checkIfAmountIsCorrect(amount)


  if(amount > account.balance){
    		throw new Error('You do not have enough money!');

  }
	if( amount <= 0 )
		throw new Error('Amount must be a positive number!');
	account.balance -= amount;
}


function transfer(accountSender, accountReceiver, amount) {
    checkIfAccountIsCorrect(accountSender);
    checkIfAccountIsCorrect(accountReceiver)
    checkIfAmountIsCorrect(amount)

    //Om accountSender inte har tillräckligt med pengar så skickas ett throw.

    if(amount === 0){
            throw new Error('You can not send 0')

    }
    if(accountSender.balance < amount){

      throw new Error('You do not have enough money to send ' + amount)

    }else{
      accountSender.balance -= amount;
      accountReceiver.balance += amount;
    }

}
let jonte = { name: "ij", balance:10 }
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };

export {transfer, deposit, withdraw, x, checkIfAmountIsCorrect, checkIfAccountIsCorrect}
