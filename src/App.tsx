

   const persona =  {
      name: 'oepe',
      age : 30,
    }
    
    console.log(persona);
  

    function saludar(){
      persona.name.toLocaleLowerCase()
      console.log(`hola ${persona.name}`)
    }

    saludar()




    

//const c:string = "<img src="https://imgs.search.brave.com/rk63Z9bkwyOpZrPaSYJjfO7dVIN-Q5PPm6odd6OwFTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9zaWducy1h/bmQtc3ltYm9scy9j/YXV0aW9uLWljb24u/c3Zn" onerror="javascript:alert('yo')" />";


/*
function suma (a:string,b:number){
  
     return a + b
}

  
  console.log(suma(("hola"),3))
  */
/*
  const nombre: string ='Miguel'
   console.log("nombre")

 

   const sumar = (a:number, b:number):string => {
    return a+b
   }

   console.log(sumar(4,"bork bork"))  */

   type heroID  = `${string}-${string}-${string}-${string}-${string}`


   type Hero = {
    readonly id?: heroID,
    name: string
    age: number
    isActive ?: boolean
   }

   let hero: Hero = {
    name: "thorin",
    age: 1500,
 
   };

  // function createHero(name: string, age: number): Hero{
  function createHero(hero: Hero): Hero{
    const {name, age} = hero
     return {id:crypto.randomUUID(), name, age,isActive: false}
   }

   //const thor = createHero('thor', 1500)
const thorr = createHero({name: "Thor", age: 1500})

thorr.id?.toString()
//thorr.id = 23029313414
    console.log(thorr)



       //const thor = createHero('thor', 1500)
const thorr = createHero({name: "Thor", age: 1500})

thorr.id?.toString()
//thorr.id = 23029313414

const addressingHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Manhattan'
    }




thorr.powerscale = "nerfed"
    console.log(thorr)
        console.log(addressingHero)

        const address = {
            planet: 'Earth',
            city: 'Manhattan'
        }

        type Address = typeof address

        const addressFootSoldier: Address = {
            planet: 'Mars',
            city: 'Pyromids'
        }

        console.log(addressFootSoldier)


        function createFunctionAddress(){
            return {
                planet: 'Terra',
                city: 'Gothica'
            }
        }
        
        type AddressFunction = ReturnType <typeof createFunctionAddress>

    

        // ARREGLOS.---- Arrays
        // MAL
//const languages: string[] | number  = []
const languages: (string| number) []  = []

        languages.push('javascript')
          languages.push('javascript')
            languages.push('javascript')
              languages.push('javascript')
                languages.push('javascript')
//languages.push(true)
languages.push(2)
console.log(languages)

/*
[
['x', '0', 'x'],    //string[]
['0', 'x', '0'],      //string[]
['x', ' ', '0']        //string[]
]      
*/

type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [CellValue, CellValue, CellValue], 
    [CellValue, CellValue, CellValue],      
    [CellValue, CellValue, CellValue]        
]

// eso es una tupla

//const gameBoard: string [][] = {
const gameBoard: GameBoard = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'],      
    ['X', '', 'O']        
]
gameBoard[0][1]
   console.log(gameBoard)


   type RGB =[number, number, number] // 0-255
const rbg :RGB = [2, 5 ,6 ]

console.log(rbg)
