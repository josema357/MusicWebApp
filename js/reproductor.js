let inicio=document.querySelector("#subo-01");
let buscar=document.querySelector("#subo-02");
let biblioteca=document.querySelector("#subo-03");
let listaRep=document.querySelector("#subo-04");
let gustos=document.querySelector("#subo-05");
let noNow=document.querySelectorAll(".sn-01");

const artis=["Eminem","50Cent","Bad Bunny","Canserbero","Porta","Coldplay","Linkin Park","Avicii","Daddy Yanquee","Ozuna","Karol G","Don Omar"];
const colors=["#b90b0b","#6284FF","#1cb7b9","#832185","#0a582e","#a77908","#0093E9","#C850C0","#44c2d1","#5f0f95","#15a324","#af0c0c"];

buscar.addEventListener("click", buscador);
inicio.addEventListener("click", home);
biblioteca.addEventListener("click", bibliote);
listaRep.addEventListener("click",listaplay);
gustos.addEventListener("click",likeado);
for(let i=0;i<noNow.length;i++){
    noNow[i].addEventListener("click",ocultarMsg);
}

const cuadro=()=>{
    document.querySelector(".contenedor-mensaje").style.display="none";
    document.querySelector(".contenedor-mensaje-02").style.display="none";
    document.querySelector(".contenedor-mensaje-03").style.display="none";
}
const artistas=()=>{
    document.querySelector(".contenedor-grid").innerHTML="";
    document.querySelector(".explora").style.display="block";
    for(let i=0;i<artis.length;i++){
        document.querySelector(".contenedor-grid").insertAdjacentHTML("beforeend",`<div class="artis-grid" style="background-color: ${colors[i]};">${artis[i]}</div>`);
    }
}

function buscador(){
    document.querySelector(".flechas").style.display="none";
    document.querySelector(".buscador").style.display="flex"
    document.querySelector(".tres-part1").style.display="none"
    cuadro();
    artistas();
}
function home(){
    document.querySelector(".flechas").style.display="block"
    document.querySelector(".buscador").style.display="none"
    document.querySelector(".tres-part1").style.display="block"
    cuadro()
    document.querySelector(".explora").style.display="none";
}
function bibliote(){
    cuadro()
    document.querySelector(".contenedor-mensaje").style.display="flex";
}
function ocultarMsg(){
    setTimeout(() =>cuadro(),10);  
}
function listaplay(){
    cuadro()
    document.querySelector(".contenedor-mensaje-02").style.display="flex";
}
function likeado(){
    cuadro()
    document.querySelector(".contenedor-mensaje-03").style.display="flex";
}

/******************************************************************************************************************************************* */
const cantCajones=document.querySelectorAll(".caja-lr").length;
console.log(cantCajones)
for (let i=0; i<cantCajones;i++){
    document.querySelectorAll(".caja-lr")[i].addEventListener("click",abrirLista);
}

function abrirLista(){
    console.log("lista abierta");
    document.querySelector(".tres-part1").style.display="none";
    cuadro();
}