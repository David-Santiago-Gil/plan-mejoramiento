// fs_ejercicio8.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio8.js)

const fs = require('fs');

// Primero, leemos el archivo
fs.readFile('producto.json', 'utf8', (err, data) => {
  if (err) throw err;

  const producto = JSON.parse(data);

  // Modificamos el precio
  producto.precio = 1350;

  // Convertimos el objeto de nuevo a JSON
  const productoActualizadoJSON = JSON.stringify(producto, null, 2);

  // Escribimos el archivo con la nueva información
  fs.writeFile('producto.json', productoActualizadoJSON, (err) => {
    if (err) throw err;
    console.log('¡El precio del producto ha sido actualizado!');
  });
});
