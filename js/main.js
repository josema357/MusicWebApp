window.onresize=tomarMedida;
let burger=document.querySelector(".desplegable")
document.querySelector(".logo img").onclick=reproductor;
document.querySelector(".logo2 img").onclick=reproductor;

function reproductor(){
    window.location.href="./reproductor.html";
    window.location.replace("./reproductor.html")
}

function tomarMedida(){
    let ancho=window.innerWidth;
    if(ancho<=900){
        burger.innerHTML=`<img src="./img/burger.svg" alt="desplegable">`
    }else{
        burger.innerHTML=`
        <ul class="opciones">
                <li><a href="">Premium</a></li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">Descargar</a></li>
        </ul>
        <ul class="registrar">
                <li><a href="">Registrate</a></li>
                <li><a href="">Iniciar Sesion</a></li>
        </ul>`
    }
}