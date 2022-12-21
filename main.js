document.getElementById("bolita").addEventListener("click", sumarPuntos);

let puntos = 0;
let num1, num2;
let tiempo = 60;
function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;
    num1 = Math.round(Math.random() * 450);
    num2 = Math.round(Math.random() * 450);

    document.getElementById("bolita").style.marginTop = num1 + "px";
    document.getElementById("bolita").style.marginLeft = num2 + "px";

};

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
    if (tiempo == 0) {
        clearInterval(tiempoInterval);
        clearInterval(puntosInterval);
        alert("Perdiste");
    }
};