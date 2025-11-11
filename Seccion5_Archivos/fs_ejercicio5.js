// fs_ejercicio5.js
// Este ejercicio debe ejecutarse con Node.js (node fs_ejercicio5.js)

const fs = require('fs');

fs.readFile('lista_compras.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contenido de la lista de compras:');
  console.log(data);
});
