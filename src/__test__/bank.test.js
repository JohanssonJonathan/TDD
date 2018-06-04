import {x, checkIfAmountIsCorrect, deposit, checkIfAccountIsCorrect, withdraw, transfer} from '../bank.js';



describe("Check in first parameter if its an correct object", () => {


  // Kollar så att det är ett objekt i första parametern
  test("Array", ()=>{
    expect(()=>{deposit([])}).toThrowError(Error)
  })

  test("Null", ()=>{
    expect(()=>{deposit(null)}).toThrowError(Error)
  })

  test("String", ()=>{
    expect(()=>{deposit("okoskdf")}).toThrowError(Error)
  })

  test("Number", ()=>{
    expect(()=>{deposit(1212)}).toThrowError(Error)
  })

  test("Infinity", ()=>{
    expect(()=>{deposit(Infinity)}).toThrowError(Error)
  })

  test("Symbol", ()=>{
    expect(()=>{deposit(Symbol)}).toThrowError(Error)
  })

  test("propertie check name", ()=>{
    expect(()=>{deposit({nils:"Jonte", balance:200})}).toThrowError(Error)

  })
  test("propertie check balance", ()=>{
    expect(()=>{deposit({name:"Jonte", pengar:200})}).toThrowError(Error)

  })

  test("propertie check balance and name", ()=>{
    expect(()=>{deposit({jonte:"Jonte", pengar:200})}).toThrowError(Error)

  })

  // Check content of the properties name
  test("Check content of the properties name with Null", ()=>{
    expect(()=>{deposit({name:null, balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array", ()=>{
    expect(()=>{deposit({name:[], balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with an object", ()=>{
    expect(()=>{deposit({name:{}, balance:200})}).toThrowError(Error)
  })

  test("Check content of the properties name with Number ", ()=>{
    expect(()=>{deposit({name:234234, balance:200})}).toThrowError(Error)

  })


    test("Check content of the properties name with Infinity ", ()=>{
      expect(()=>{deposit({name:Infinity, balance:200})}).toThrowError(Error)

    })


  let johan = {name:"johan", balance:200}
  deposit(johan, 20)
  test("Check content of the properties name with String ", ()=>{
      expect(johan).toEqual({name:"johan", balance:220})
  })


  //Check content of the properties balance
  test("Check content of the properties name with Null ", ()=>{
    expect(()=>{deposit({name:"johan", balance:null})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array ", ()=>{
    expect(()=>{deposit({name:"johan", balance:[]})}).toThrowError(Error)

  })

  test("Check content of the properties name with Object ", ()=>{
    expect(()=>{deposit({name:"johan", balance:{}})}).toThrowError(Error)

  })

  test("Check content of the properties name with String ", ()=>{
    expect(()=>{deposit({name:"johan", balance:"oksdofk"})}).toThrowError(Error)

  })

  let thatzita = {name:"thatzita", balance:1};
  deposit(thatzita,1)
  test("Check content of the properties name with Number ", ()=>{
    expect(thatzita).toEqual({name:"thatzita", balance:2})

  })

  let erik = {name:"erik", balance: "200"}
  deposit(erik,100)
  test("Check content of the properties name with Number ", ()=>{
    expect(erik).toEqual({name:"erik", balance:300})

  })

  ////////////
  //withdraw
  ///////////////

  // Kollar så att det är ett objekt i första parametern
  test("Array", ()=>{
    expect(()=>{withdraw([])}).toThrowError(Error)
  })

  test("Null", ()=>{
    expect(()=>{withdraw(null)}).toThrowError(Error)
  })

  test("String", ()=>{
    expect(()=>{withdraw("okoskdf")}).toThrowError(Error)
  })

  test("Number", ()=>{
    expect(()=>{withdraw(1212)}).toThrowError(Error)
  })

  test("Infinity", ()=>{
    expect(()=>{withdraw(Infinity)}).toThrowError(Error)
  })

  test("Symbol", ()=>{
    expect(()=>{withdraw(Symbol)}).toThrowError(Error)
  })

  test("propertie check name", ()=>{
    expect(()=>{withdraw({nils:"Jonte", balance:200})}).toThrowError(Error)

  })
  test("propertie check balance", ()=>{
    expect(()=>{withdraw({name:"Jonte", pengar:200})}).toThrowError(Error)

  })

  test("propertie check balance and name", ()=>{
    expect(()=>{withdraw({jonte:"Jonte", pengar:200})}).toThrowError(Error)

  })

  // Check content of the properties name
  test("Check content of the properties name with Null", ()=>{
    expect(()=>{withdraw({name:null, balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array", ()=>{
    expect(()=>{withdraw({name:[], balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with an object", ()=>{
    expect(()=>{withdraw({name:{}, balance:200})}).toThrowError(Error)
  })

  test("Check content of the properties name with Number ", ()=>{
    expect(()=>{withdraw({name:234234, balance:200})}).toThrowError(Error)

  })


    test("Check content of the properties name with Infinity ", ()=>{
      expect(()=>{withdraw({name:Infinity, balance:200})}).toThrowError(Error)

    })


  let kolle = {name:"kolle", balance:200}
  withdraw(kolle, 20)
  test("Check content of the properties name with String ", ()=>{
      expect(kolle).toEqual({name:"kolle", balance:180})
  })


  //Check content of the properties balance
  test("Check content of the properties name with Null ", ()=>{
    expect(()=>{withdraw({name:"johan", balance:null})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array ", ()=>{
    expect(()=>{withdraw({name:"johan", balance:[]})}).toThrowError(Error)

  })

  test("Check content of the properties name with Object ", ()=>{
    expect(()=>{withdraw({name:"johan", balance:{}})}).toThrowError(Error)

  })

  test("Check content of the properties name with String ", ()=>{
    expect(()=>{withdraw({name:"johan", balance:"oksdofk"})}).toThrowError(Error)

  })

  let fredriko = {name:"fredriko", balance:1};
  withdraw(fredriko,1)
  test("Check content of the properties name with Number ", ()=>{
    expect(fredriko).toEqual({name:"fredriko", balance:0})

  })

  let tunde = {name:"tunde", balance: "200"}
  withdraw(tunde,100)
  test("Check content of the properties name with Number ", ()=>{
    expect(tunde).toEqual({name:"tunde", balance:100})

  })


  //transfer
  /////////////

  // Kollar så att det är ett objekt i första parametern
  test("Array", ()=>{
    expect(()=>{transfer([],{},23)}).toThrowError(Error)
  })

  test("Null", ()=>{
    expect(()=>{transfer(null,"Göte",29)}).toThrowError(Error)
  })

  test("String", ()=>{
    expect(()=>{transfer("okoskdf",Infinity, 20)}).toThrowError(Error)
  })

  test("Number", ()=>{
    expect(()=>{transfer(1212,{name:"jonte"},10)}).toThrowError(Error)
  })

  test("Infinity", ()=>{
    expect(()=>{transfer(Infinity)}).toThrowError(Error)
  })

  test("Symbol", ()=>{
    expect(()=>{transfer(Symbol)}).toThrowError(Error)
  })

  test("propertie check name", ()=>{
    expect(()=>{transfer({nils:"Jonte", balance:200},{nils:"Jonte", balance:200})}).toThrowError(Error)

  })
  test("propertie check balance", ()=>{
    expect(()=>{transfer({name:"Jonte", pengar:200},{name:"Jonte", pengar:200})}).toThrowError(Error)

  })

  test("propertie check balance and name", ()=>{
    expect(()=>{transfer({jonte:"Jonte", pengar:200},{jonte:"Jonte", pengar:200})}).toThrowError(Error)

  })

  // Check content of the properties name
  test("Check content of the properties name with Null", ()=>{
    expect(()=>{transfer({name:null, balance:200},{name:null, balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array", ()=>{
    expect(()=>{transfer({name:[], balance:200},{name:[], balance:200})}).toThrowError(Error)

  })

  test("Check content of the properties name with an object", ()=>{
    expect(()=>{transfer({name:{}, balance:200},{name:{}, balance:200})}).toThrowError(Error)
  })

  test("Check content of the properties name with Number ", ()=>{
    expect(()=>{transfer({name:234234, balance:200},{name:234234, balance:200})}).toThrowError(Error)

  })


    test("Check content of the properties name with Infinity ", ()=>{
      expect(()=>{transfer({name:Infinity, balance:200})}).toThrowError(Error)

    })


  // let johan = {name:"johan", balance:200}
  // transfer(johan, 20)
  // test("Check content of the properties name with String ", ()=>{
  //     expect(johan).toEqual({name:"johan", balance:220})
  // })


  //Check content of the properties balance
  test("Check content of the properties name with Null ", ()=>{
    expect(()=>{transfer({name:"johan", balance:null})}).toThrowError(Error)

  })

  test("Check content of the properties name with Array ", ()=>{
    expect(()=>{transfer({name:"johan", balance:[]})}).toThrowError(Error)

  })

  test("Check content of the properties name with Object ", ()=>{
    expect(()=>{transfer({name:"johan", balance:{}})}).toThrowError(Error)

  })

  test("Check content of the properties name with String ", ()=>{
    expect(()=>{transfer({name:"johan", balance:"oksdofk"})}).toThrowError(Error)

  })

  let leif = {name:"leif", balance:100};
  let gris = {name:"gris", balance:2};
  transfer(leif,gris, 100)
  test("Check content of the properties name with Number ", ()=>{
    expect(gris).toEqual({name:"gris", balance:102})

  })


  test("Check content of the properties name with Number ", ()=>{
    expect(()=>{transfer({name:"gote", balance:50},{name:"greta", balance:0},200)}).toThrowError(Error)
  })

  test("Check content of the properties name with Number ", ()=>{
    expect(()=>{transfer({name:209323, balance:200},{name:"greta", balance:0},100)}).toThrowError(Error)
  })


  //check if it is a positive number

  test("Check if positive number in balance", ()=>{
      expect(()=>{deposit({name:"Jonte", balance:-200}, 10)}).toThrowError(Error)
  })

  test("Check if amount value is 0", ()=>{
      expect(()=>{deposit({name:"Jonte", balance:100}, 0)}).toThrowError(Error)
  })

  test("Check 0", ()=>{
      expect(()=>{transfer({name:"Jonte", balance:100}, {name:"thatzita", balance:100},0)}).toThrowError(Error)
  })

  test("Transfer 0", ()=>{
      expect(()=>{transfer({name:"Jonte", balance:0}, {name:"thatzita", balance:100},10)}).toThrowError(Error)
  })





})
