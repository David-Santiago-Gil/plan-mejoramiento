// fs_ejercicio3.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio3.js)

const fs = require('fs');

const producto = {
  nombre: "Laptop",
  precio: 1200,
  disponible: true
};

const productoJSON = JSON.stringify(producto, null, 2);

fs.writeFile('producto.json', productoJSON, (err) => {
  if (err) throw err;
  console.log('¡El archivo producto.json ha sido creado!');
});
