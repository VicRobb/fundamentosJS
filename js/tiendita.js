const productos = [
    { id: 1, nombre: "papel de baño", precio: 12, stock: 5 },
    { id: 2, nombre: "chocolate", precio: 20, stock: 3 },
    { id: 3, nombre: "aceite", precio: 34, stock: 2 },
    { id: 4, nombre: "jabon", precio: 20, stock: 15 },
    { id: 5, nombre: "coca", precio: 32, stock: 21 },
];

    // Función para consultar la disponibilidad de un producto por su ID
    function consultarDisponibilidad(id) {
    return new Promise((resolve, reject) => {
    const producto = productos.find((p) => p.id === id);
    if (producto && producto.stock > 0) {
    resolve(producto);
    } else {
    reject(`El producto con ID ${id} no está disponible.`);
    }
    });
    }
    // Función para calcular el precio total de una compra
    async function calcularPrecioTotal(ids) {
    let total = 0;
    for (const id of ids) {
    try {
    const producto = await consultarDisponibilidad(id);
    total += producto.precio;
    } catch (error) {
    console.log(error);
    }
    }
    
    
    return total;
    }
    // Ejemplo de uso
    const productosAComprar = [1, 4, 3]; // IDs de los productos que se quieren comprar
    calcularPrecioTotal(productosAComprar)
    .then((total) => {
    console.log(`El precio total de la compra es: $${total}`);
    })
    .catch((error) => {
    console.log(error);
    });