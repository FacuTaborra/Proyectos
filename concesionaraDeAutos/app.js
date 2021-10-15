const { REPL_MODE_SLOPPY } = require("repl");

function auto(marca,modelo,color,anioDeFabricacion,kmRecorridos,precioFinal,cantidadCuotas,patente,vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anioDeFabricacion = anioDeFabricacion;
    this.kmRecorridos = kmRecorridos;
    this.precioFinal = precioFinal;
    this.cantidadCuotas = cantidadCuotas;
    this.patente = patente;
    this.vendido = vendido;
}

let unAuto = new auto("ford","fiesta", "blanco", "2015", "97", 45000, 3, "ABC 123", true);
console.log(unAuto);