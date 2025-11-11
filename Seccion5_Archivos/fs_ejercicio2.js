// fs_ejercicio2.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio2.js)

const fs = require('fs');

const listaDeCompras = "Lista de compras:\n- Leche\n- Pan\n- Huevos";

fs.writeFile('lista_compras.txt', listaDeCompras, (err) => {
  if (err) throw err;
  console.log('¡La lista de compras ha sido guardada!');
});
