const { resolve } = require("path");

const productos = [ //id nombre del producto precio stok
    {id: 1, nombre: "papel de baño", precio:12, stok:5},
    {id: 2, nombre: "chocolate", precio:20, stok:3},
    {id: 3, nombre: "aceite", precio:34, stok:2},
    {id: 4, nombre: "jabon", precio:20, stok:15},
    {id: 5, nombre: "coca", precio:32, stok:21},
]
function existencia(id, stok){
    return new Promise((resolve, reject) =>{
        const produc = productos.find((eti) => eti.id ===id && stok>0);
        if(produc){
            resolve("Adelante, puede llevarse"+produc);
        }
        else{
            reject("El id del producto no existe")
        }
    })
}
async function verProducto(id, nombre, precio, stok){
    try{
        const produc = await verProducto(id, nombre, stok);
        console.log("Producto encontrado exitosamente")
    }catch(error){
        console.log("Error encontrando el producto que encontrabas"+ error)
    }
}
verProducto("1", "chocolate", "1");