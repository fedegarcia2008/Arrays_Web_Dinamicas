function splitEdades(texto) {
  return texto.split(",").map(e => Number(e));
}
function promedios(edades) {
  let suma = 0;
  for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
  }
  return suma / edades.length;
}
function turnoM() {
  let tm = document.getElementById("t1").value;
  let edades = splitEdades(tm);
  return promedios(edades);
}
function turnoT() {
  let tt = document.getElementById("t2").value;
  let edades = splitEdades(tt);
  return promedios(edades);
}
function turnoN() {
  let tn = document.getElementById("t3").value;
  let edades = splitEdades(tn);
  return promedios(edades);
}
function turnos() {
  let m = turnoM();
  let t = turnoT();
  let n = turnoN();
  let mensaje = "";
  mensaje += `<p>Promedio turno mañana: ${m.toFixed(2)}</p>`;
  mensaje += `<p>Promedio turno tarde: ${t.toFixed(2)}</p>`;
  mensaje += `<p>Promedio turno noche: ${n.toFixed(2)}</p>`;
  if (m > t && m > n) {
    mensaje += `<h3>El turno mañana tiene el promedio mayor</h3>`;
  } else if (t > m && t > n) {
    mensaje += `<h3>El turno tarde tiene el promedio mayor</h3>`;
  } else if (n > m && n > t) {
    mensaje += `<h3>El turno noche tiene el promedio mayor</h3>`;
  } else {
    mensaje += `<h3>Los tres turnos tienen el mismo promedio</h3>`;
  }
  document.getElementById("resultado").innerHTML = mensaje;
}