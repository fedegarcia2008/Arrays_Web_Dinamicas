let numeros = [];
let resultado = document.getElementById('resultado');
function ingresarNum() {
    let nro = parseFloat(document.getElementById("numero").value);
    if (!isNaN(nro)) {
        numeros.push(nro);
        resultado.innerHTML = `Array: [ ${numeros.join(' , ')} ]`;
    } else {
        alert(`Ingrese un número válido`);
    }
}
function buscarNum() {
    let nro = parseFloat(document.getElementById("numero").value);
    let posicion = numeros.indexOf(nro);
    if (posicion != -1) {
        resultado.innerHTML = `El número está en la posición ${posicion}`;
    } else {
        alert(`Número no encontrado`);
    }
}
function modificarNum() {
    let viejo = parseFloat(prompt("Ingrese el número a modificar"));
    let posicion = numeros.indexOf(viejo);
    if (posicion != -1) {
        let nuevo = parseFloat(prompt("Ingrese el nuevo número"));
        numeros[posicion] = nuevo;
        resultado.innerHTML = `Array: [ ${numeros.join(' , ')} ]`;
    } else {
        alert(`Número no encontrado`);
    }
}
function eliminarNum() {
    let nro = parseFloat(prompt("Ingrese el número a eliminar"));
    let posicion = numeros.indexOf(nro);
    if (posicion != -1) {
        numeros.splice(posicion, 1);
        resultado.innerHTML = `Array: [ ${numeros.join(' , ')} ]`;
    } else {
        alert(`Número no encontrado`);
    }
}
function insertarNum() {
    let nro = parseFloat(prompt("Ingrese el número a insertar"));
    let posicion = parseInt(prompt("Ingrese la posición"));
    numeros.splice(posicion, 0, nro);
    resultado.innerHTML = `Array: [ ${numeros.join(' , ')} ]`;
}
function vectores() {
    let opcion = document.getElementById("seleccion").value;
    switch (opcion) {
        case '1':
            ingresarNum();
            break;
        case '2':
            buscarNum();
            break;
        case '3':
            modificarNum();
            break;
        case '4':
            eliminarNum();
            break;
        case '5':
            insertarNum();
            break;
    }
}