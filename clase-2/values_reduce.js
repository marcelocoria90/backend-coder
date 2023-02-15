let impuestos = {
    impuesto1: 2341,
    impuesto2: 341,
    impusto3: 4611,
    impuesto4: 111
}

let soloValores = Object.values(impuestos)

console.log(soloValores)

let impuestosTotaltes = soloValores.reduce((valorInicial, valorAcumulado) => valorInicial + valorAcumulado)

console.log(impuestosTotaltes)