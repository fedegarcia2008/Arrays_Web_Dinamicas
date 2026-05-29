function altura() {
    let alt = [];
    for (let i = 0; i < 5; i++) {
        alt[i] = parseFloat(document.getElementById('a' + i).value);
    }
    return alt;
}
function promedio() {
    let suma = 0;
    alturas = altura();
    alturas.forEach(item => {
        suma += item;
    });
    let prom = suma / 5;
    let promMayor = 0, promMenor = 0;
    alturas.forEach(item => {
        if (item > prom) {
            promMayor++;
        } else if (item < prom) {
            promMenor++;
        }
    });
    console.log(`Promedio de altura: ${prom.toFixed(2)}`);
    console.log(`Personas mayores al promedio: ${promMayor}`);
    console.log(`Personas menores al promedio: ${promMenor}`);
    document.getElementById("salida").innerHTML =
        `<p>Promedio de altura: ${prom.toFixed(2)}</p>
        <p>Personas mayores al promedio: ${promMayor}</p>
        <p>Personas menores al promedio: ${promMenor}</p>`;
}