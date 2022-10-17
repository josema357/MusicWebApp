let inicio=document.querySelector("#subo-01");
let buscar=document.querySelector("#subo-02");
let biblioteca=document.querySelector("#subo-03");

buscar.addEventListener("click", buscador);
inicio.addEventListener("click", home);
biblioteca.addEventListener("click", bibliote);

function buscador(){
    document.querySelector(".flechas").style.display="none";
    document.querySelector(".buscador").style.display="flex"
    document.querySelector(".tres-part1").style.display="none"
    document.querySelector(".contenedor-mensaje").style.display="none";
}
function home(){
    document.querySelector(".flechas").style.display="block"
    document.querySelector(".buscador").style.display="none"
    document.querySelector(".tres-part1").style.display="block"
    document.querySelector(".contenedor-mensaje").style.display="none";
}

function bibliote(){
    document.querySelector(".contenedor-mensaje").style.display="flex";
}

