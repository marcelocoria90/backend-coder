

// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.

const randomNumbers = []

for (let i = 0; i < 10000; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1)
}

console.log(randomNumbers)


/* Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave
será la cantidad de veces que salió dicho número. Representar por consola los
resultados.
*/

const objCountNumbers = {}

for (let i = 0; i < randomNumbers.length; i++) {
    const number = randomNumbers[i]
    // console.log(`Number dentro del bucle: ${number}`)
    if (objCountNumbers[number]) {
        objCountNumbers[number]++
    } else {
        objCountNumbers[number] = 1
    }
}

console.log(objCountNumbers)