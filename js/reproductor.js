window.onload=medir;

let inicio=document.querySelector("#subo-01");
let buscar=document.querySelector("#subo-02");
let biblioteca=document.querySelector("#subo-03");
let listaRep=document.querySelector("#subo-04");
let gustos=document.querySelector("#subo-05");
let noNow=document.querySelectorAll(".sn-01");
let flecha=document.querySelector(".flechas");

let listasPlay=fetch(`./canciones/listas.txt`).then((respuesta)=>respuesta.json())

buscar.addEventListener("click", buscador);
inicio.addEventListener("click", home);
biblioteca.addEventListener("click", bibliote);
listaRep.addEventListener("click",listaplay);
gustos.addEventListener("click",likeado);
for(let i=0;i<noNow.length;i++){
    noNow[i].addEventListener("click",ocultarMsg);
}
flecha.addEventListener("click",atras);

const cuadro=()=>{
    document.querySelector(".contenedor-mensaje").style.display="none";
    document.querySelector(".contenedor-mensaje-02").style.display="none";
    document.querySelector(".contenedor-mensaje-03").style.display="none";
}
const artistas=()=>{
    document.querySelector(".contenedor-grid").innerHTML="";
    document.querySelector(".explora").style.display="block";
    listasPlay.then((data)=>{
        console.log(data.lista)
        for(let i=0;i<data.lista.length;i++){
            document.querySelector(".contenedor-grid").insertAdjacentHTML("beforeend",`<div class="artis-grid" style="background-color: ${data.lista[i].colors};">${data.lista[i].artis}</div>`);
        }
    })
}

function atras(){
    home()
}

function buscador(){
    document.querySelector(".flechas").style.display="block";
    document.querySelector(".buscador").style.display="flex"
    document.querySelector(".tres-part1").style.display="none"
    cuadro();
    artistas();
    cambiarColor("linear-gradient(180deg, #1b1b1b 33%, #121212 58%)")
    document.querySelector(".lista-canciones").style.display="none";
}
function home(){
    document.querySelector(".flechas").style.display="none"
    document.querySelector(".buscador").style.display="none"
    document.querySelector(".tres-part1").style.display="block"
    cuadro()
    document.querySelector(".explora").style.display="none";
    document.querySelector(".lista-canciones").style.display="none";
    cambiarColor("linear-gradient(180deg, #1b1b1b 33%, #121212 58%)")
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
        if(e.clientX>300){
            uno.style.width="300px";
            sec1.style.gridTemplateColumns="300px 1fr";
            dos.style.width=`calc(100% - 300px)`
        }else if(e.clientX<160){
            uno.style.width="160px";
            sec1.style.gridTemplateColumns="160px 1fr";
            dos.style.width=`calc(100% - 160px)`
        }else{
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

function cambiarColor(color){
    document.querySelector("#tres").style.background=color;;
}

const cantCajones=document.querySelectorAll(".caja-lr").length;
for (let i=0; i<cantCajones;i++){
    document.querySelectorAll(".caja-lr")[i].addEventListener("click",abrirLista);
}


function abrirLista(){
    let titulo=this.children[1].children[0].innerHTML;
    let descripcion=this.children[1].children[1].innerHTML;
    document.querySelector(".tres-part1").style.display="none";
    cuadro();
    document.querySelector(".lista-canciones").style.display="block";
    document.querySelector(".flechas").style.display="block";
    listasPlay.then((data)=>{
        for (let artista of data.lista){
            console.log(artista)
            if(artista.artis===titulo){
                cambiarColor(`linear-gradient(180deg, ${artista.colors} 0%, #121212 480px)`);
            }
        }
    })
    document.querySelector(".img-port").src=`./img/img_rep/artistas/${titulo.toLowerCase()}.jpg`;
    document.querySelector(".titu").innerHTML=titulo;
    document.querySelector(".des").innerHTML=descripcion;
    document.querySelector(".listarep").innerHTML="";
    fetch(`./canciones/${titulo.toLowerCase()}.txt`)
    .then((respuesta)=>respuesta.json())
    .then((data)=>{
        let keys=Object.keys(data)
        let count=1;
        for(let i=0;i<keys.length;i++){
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
            }
        }
    }).catch(()=>{
        document.querySelector(".listarep").insertAdjacentHTML("beforeend",`<div class="error-lista">Lista no encontrada</div>`)
    })
}

/************************************************************************************************************************ */
window.onresize=medir;
function medir(){
    let ancho=window.innerWidth
    if(ancho<1000){
        document.querySelector(".desplegable").style.display="flex";
        document.querySelector(".opciones-nav").style.display="none";
        document.querySelector(".barra").style.display="none";
    }else{
        document.querySelector(".desplegable").style.display="none";
        document.querySelector(".opciones-nav").style.display="block";
        document.querySelector(".barra").style.display="block";
    }
}