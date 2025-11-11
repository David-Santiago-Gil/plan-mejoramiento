// fs_ejercicio7.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio7.js)

const fs = require('fs');

const nuevoContenido = "\n- Azúcar";

fs.appendFile('lista_compras.txt', nuevoContenido, (err) => {
  if (err) throw err;
  console.log('¡La lista de compras ha sido actualizada!');
});
