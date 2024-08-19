//1.

const numeros = [1, 2, 3, 4];

// let multiplyNumbers = []

// for(let i = 0; i < numeros.length; i++) {
//   const numberMultiply = numeros[i] * 2
//   multiplyNumbers.push(numberMultiply)
// }

// console.log("nuevo array", multiplyNumbers)


const multiplyNumber = numeros.map(elemento => elemento * 2)

console.log(multiplyNumber)


// Function VS arrow

// siempre la inicialización debe ir antes de la invocación
const suma = () => 2 + 3
console.log("esto es suma", suma())

// La inicialización puede ir antes de la invocación
console.log("esto es sumatorio", sumatorio())
function sumatorio() {
  return 5 + 5
}

//2.

const palabras = ["manzana", "pera", "uva", "plátano", "kiwi"];

const letraA = palabras.filter(fruta => fruta.includes("a"))

console.log("frutas A", letraA)

// const palabraA = []
// for(let i = 0; i < palabras.length; i++) {
//   if(palabras[i].includes("a")) {
//     palabraA.push(palabras[i])
//   }
// }

// console.log("frutas con push", palabraA)

//3.

const sumaNumeros = numeros.reduce((acc, num) => acc + num, 0)
console.log(sumaNumeros)

//4.

const personas = [
  {nombre: "Juan", edad: 20}, 
  {nombre: "Ana", edad: 17}, 
  {nombre: "Luis", edad: 22}
];


// const value = Object.values(personas[0])

const mayorEdad = personas.filter(persona => persona.edad > 18).map(persona => persona.nombre)
// const resultado = mayorEdad.map(elemento => elemento.nombre)

console.log(mayorEdad)

//5

const persona = {
  nombre: "Carlos",
  direccion: {
      ciudad: "Madrid",
      calle: "Gran Vía"
  }
};

const newPersona = () => {
  const {nombre, direccion: {ciudad, calle}} = persona
  return `${nombre} ${ciudad} ${calle}`
}

console.log(newPersona())

//6


// const getPokemon = () => {
//   return fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => response.json())
//     .then(data => data)
// }

// getPokemon().then(pepito => console.log(pepito))


const getPokemon = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("este es el error, error")
  }
}

getPokemon("ditto").then(pokemon => console.log(pokemon))
getPokemon("pikachu").then(pokemon => console.log(pokemon.species.name))

//7

const getRick = async () => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character")
    const data = response.data
    return data 
  } catch (error) {
    console.error("este es el error", error)
  }
}

getRick().then(character => console.log(character))

//8

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2]
console.log("resultado", array3)

//9

function result (number) {
  console.log(number % 2 === 0 ? "Es par" : "es impar")
}

result(5)

//10

const elevar = numeros.map(numero => numero ** 2)

console.log("elevar", elevar)

//11
const objeto = {
  nombre: "Ana",
  activo: true,
  edad: 25,
  miembro: false
};

const keys = Object.keys(objeto).filter(key => typeof objeto[key] === 'boolean')

console.log("valores boolean", keys)

//12

const mayorque = numeros.filter(num => num > 2)
console.log("mayorque", mayorque)






















