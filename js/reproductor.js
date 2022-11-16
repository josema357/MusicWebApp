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
    document.querySelector(".lista-canciones").style.display="none";
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
/******************************************************************************************************************************* */
const resize=document.querySelector(".resize");
const uno=document.getElementById("uno");
const dos=document.getElementById("dos");
const sec1=document.getElementById("section-1");
 const body=document.querySelector("body");
resize.addEventListener("mousedown",mousedown);
function mousedown(e){
    addEventListener("mousemove",mousemove);
    addEventListener("mouseup",mouseup);
    body.style.userSelect="none";
    function mousemove(e){
        if(e.clientX>400){
            uno.style.width="400px";
            sec1.style.gridTemplateColumns="400px 1fr";
            dos.style.width=`calc(100% - 400px)`
        }else if(e.clientX<160){
            uno.style.width="160px";
            sec1.style.gridTemplateColumns="160px 1fr";
            dos.style.width=`calc(100% - 160px)`
        }else{
            console.log(e.clientX)
            uno.style.width=e.clientX + "px";
            sec1.style.gridTemplateColumns=e.clientX + "px 1fr";
            dos.style.width=`calc(100% - ${e.clientX}px)`;
            let cantidad=document.querySelectorAll(".sub-opciones");
            if(e.clientX>250){
                for(let i=0;i<cantidad.length;i++){
                    cantidad[i].style.width="fit-content";
                }
            }else{
                for(let i=0;i<cantidad.length;i++){
                    cantidad[i].style.width=null;
                }
            }
        }
    }
    function mouseup(){
        removeEventListener("mousemove",mousemove);
        removeEventListener("mouseup",mouseup);
        body.style.userSelect=null;
    }
}



/******************************************************************************************************************************************* */
const cantCajones=document.querySelectorAll(".caja-lr").length;
for (let i=0; i<cantCajones;i++){
    document.querySelectorAll(".caja-lr")[i].addEventListener("click",abrirLista);
}

function abrirLista(){
    let titulo=this.children[1].children[0].innerHTML;
    console.log(this.children[0].children[0].src)
    let descripcion=this.children[1].children[1].innerHTML;
    document.querySelector(".tres-part1").style.display="none";
    cuadro();
    document.querySelector(".lista-canciones").style.display="block";
    document.querySelector(".titu").innerHTML=titulo;
    document.querySelector(".des").innerHTML=descripcion;
    document.querySelector(".listarep").innerHTML="";
    fetch(`./canciones/${this.getAttribute("nombre")}.txt`)
    .then((respuesta)=>respuesta.json())
    .then((data)=>{
        let keys=Object.keys(data)
        console.log(data)
        let count=1;
        for(let i=0;i<keys.length;i++){
            console.log(data[keys[i]])
            for(let j=0;j<data[keys[i]].length;j++){
                document.querySelector(".listarep").insertAdjacentHTML("beforeend",`
                <div class="cancion">
                    <div class="count">${count++}</div>
                    <div class="des-prin">
                        <img class="miniatura" src="./img/img_rep/artistas/eminem.jpg" alt="img"/>
                        <div class="descrip">
                            <span class="nm-song">${data[keys[i]][j].nombre}</span>
                            <span class="nm-art">${data[keys[i]][j].artista}</span>
                        </div>
                    </div>
                    <div class="albu">${data[keys[i]][j].album}</div>
                    <div class="fecha">4 dias</div>
                    <div class="tiempo">00:00</div>
                </div>`)
                console.log(data[keys[i]][j])
            }
        }
    })
}
