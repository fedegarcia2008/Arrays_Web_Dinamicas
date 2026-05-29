let vect = [];
let salida = "";
function arrayVector() {
    let v = document.getElementById("nros").value;
    vect = v.split(",");
    if (vect.length !== 6) {
        alert(`Debe ingresar 6 (seis) números`);
        return;
    } else {
        console.log(`Array ingresado: [ ${vect.join(' , ')} ]`);
        salida += `<p>Array ingresado: [ ${vect.join(' , ')} ]</p>`;
    }
    function arrayOrdenado() {
        vect.sort((a, b) => a - b);
        console.log(`Array ordenado: [ ${vect.join(' , ')} ]`);
        salida += `<p>Array ordenado: [ ${vect.join(' , ')} ]</p>`;
    }
    arrayOrdenado();
    function cantidadElementos() {
        console.log(`Cantidad de elementos: ${vect.length}`);
        salida += `<p>Cantidad de elementos: ${vect.length}</p>`;
    }
    cantidadElementos();
    document.getElementById("resultado").innerHTML = salida;
    document.getElementById("nuevaSeccion").style.display = "block";
}
function buscarNro() {
    buscar = document.getElementById('b').value;
    let estaIncluido = vect.includes(buscar);
    if (estaIncluido) {
        let indice = vect.indexOf(buscar);
        console.log(`El número ${buscar} se encuentra en el índice ${indice}`);
        salida += `<p>El número ${buscar} se encuentra en el índice ${indice}</p>`;
    } else {
        console.log(`El número ${buscar} no se encuentra en el array ingresado`);
        salida += `<p>El número ${buscar} no se encuentra en el array ingresado</p>`;
    }
    document.getElementById("resultado").innerHTML = salida;
}