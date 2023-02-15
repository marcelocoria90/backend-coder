const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

const newList = objetos.reduce((acumulador, objeto) => {
    Object.keys(objeto).forEach(key => {
        if (!acumulador.includes(key)) {
            acumulador.push(key)
        }
    })
    return acumulador
}, [])

console.log(newList)

const totalVendido = Object.values(objetos).reduce((total, value) => total + value, 0)

console.log(totalVendido)