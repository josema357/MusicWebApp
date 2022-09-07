window.onresize=tomarMedida;
let burger=document.querySelector(".desplegable")

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