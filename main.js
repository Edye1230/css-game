document.getElementById("bolita").addEventListener("click", sumarPuntos);

let puntos = 0;
let num1, num2, num3, num4;

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;
    num1 = Math.round(Math.random() * 450);
    num2 = Math.round(Math.random() * 450);
    num3 = Math.round(Math.random() * 450);
    num4 = Math.round(Math.random() * 450);

    document.getElementById("bolita").style.marginTop = num1 + "px";
    document.getElementById("bolita").style.marginLeft = num2 + "px";



  let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "minas");
    newDiv.style.marginTop = num3 + "px";
    newDiv.style.marginLeft = num4 + "px";

    document.getElementById('contenedor_xx').appendChild(newDiv);  
};

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
    if (tiempo == 0) {
        clearInterval(tiempoInterval);
        clearInterval(puntosInterval);
        alert("Perdiste");
    };
};

document.getElementById("bolita").addEventListener("mouseleave", movimiento);

function restablecer() {
    document.getElementById("bolita").style.backgroundColor = "red";
}

function movimiento() {

    if (puntos > 0 ) document.getElementById("minas").addEventListener("click", perdida);

    function perdida(){
        alert("Perdiste");
        location.reload();
    }

    if (puntos === 100 ) alert("Ganaste");

}