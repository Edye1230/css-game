var sound = new Audio();
sound.src = "./waza.mp3"

let puntos = 0;
let num1, num2, num3, num4;

//let emojis_minas = ["👻", "💀", "☠", "💩", "👹"];


document.getElementById("bolita").addEventListener("click", clickBolita);

function clickBolita() {
  //  let emoji_aletorio = emojis_minas[Math.floor(Math.random() * emojis_minas.length)];

    puntos++;
    document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;

    num1 = Math.round(Math.random() * 450);
    num2 = Math.round(Math.random() * 450);
    num3 = Math.round(Math.random() * 450);
    num4 = Math.round(Math.random() * 450);

    document.getElementById("bolita").style.marginTop = num1 + "px";
    document.getElementById("bolita").style.marginLeft = num2 + "px";

    let mina = document.createElement("div");
    mina.setAttribute("class", "minas");
    mina.setAttribute("id", "minas_id");
    //mina.setAttribute("src", "https://www.pngmart.com/files/7/Mine-Transparent-Background.png");
    mina.setAttribute("data-toggle", "modal");
    mina.setAttribute("data-target", "#exampleModal");
    

    let textNode = document.createTextNode("👻"); 
    mina.appendChild(textNode);


    mina.style.marginTop = num3 + "px";
    mina.style.marginLeft = num4 + "px";
    mina.addEventListener("click", clickMina);


    document.getElementById('minas_negras').appendChild(mina);  


    if(puntos === 100) {}

};


///////////////////////////////////////////////////////////////////////////////////////

function clickMina() {
    puntos--;
    document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;
    document.getElementById('mensaje_modal').innerHTML = `Puntaje final: ${puntos}`;
    sound.play();
}

document.getElementById("boton_reintentar").addEventListener("click", recargar);

function recargar() {

    puntos = 0;
    document.getElementById("bolita").style.marginTop = 0 + "px";
    document.getElementById("bolita").style.marginLeft = 0 + "px";
    document.getElementById("puntos").innerHTML = `Puntos: ${puntos}`;

    document.getElementById("minas_negras").remove();

    let minas_negras = document.createElement("div");
    minas_negras.setAttribute("id", "minas_negras");

    document.getElementById('contenedor_xx').appendChild(minas_negras);  


    //location.reload();
}
