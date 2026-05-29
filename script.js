function vector() {
  let vect = document.getElementById("numeros").value;
  vect = vect.split(",");
  let suma = 0;
  let suma36 = 0;
  let contador = 0;
  if (vect.length !== 8) {
    alert(`Debe ingresar 8 (ocho) números`);
    return;
  }
  for(let i = 0; i < 8; i++) {
    let num = Number(vect[i]);
    if (!isNaN(num)) {
      suma += num;
      if (num > 36) {
        suma36 += num;
      }
      if (num > 50) {
        contador++;
      }
    }
  }
  console.log(`Suma total: ${suma}`);
  console.log(`Suma mayores a 36: ${suma36}`);
  console.log(`Cantidad mayores a 50: ${contador}`);
  document.getElementById("salida").innerHTML =
    `<p>Suma total: ${suma}</p>
    <p>Suma mayores a 36: ${suma36}</p>
    <p>Cantidad mayores a 50: ${contador}</p>`;
}