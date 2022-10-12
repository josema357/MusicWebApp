let inicio=document.querySelector("#subo-01");
let buscar=document.querySelector("#subo-02");
buscar.addEventListener("click", buscador);
inicio.addEventListener("click", home);
function buscador(){
    document.querySelector("#left-rigth").innerHTML=
    `<div class='buscador'><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg></span><input type='text' placeholder='¿Que quieres escuchar?'/></div>`;
    document.querySelector(".tres-part1").innerHTML=""
}
function home(){
    document.querySelector("#left-rigth").innerHTML=
    `<img src="./img/img_rep/chevron-left.svg" alt="">
    <img src="./img/img_rep/chevron-right.svg" alt="">`
    document.querySelector(".tres-part1").innerHTML=`
    <div>
                    <div class="se_01">
                        <h2><span>Listas de Reproduccion</span></h2>
                        <span>Ver todo</span>
                    </div>
                    <div class="se_02">
                        <div class="caja_art caj-01">
                            <div><img src="./img/img_rep/artistas/sam-smith.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Mejores Exitos</div>
                                <div>Sam Smith esta en el top 50</div>
                            </div>
                        </div>
                        <div class="caja_art caj-02">
                            <div><img src="./img/img_rep/artistas/eminem.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Hip-Hop</div>
                                <div>Eminem, 50Cent, Dr. Dre, y muchos mas</div>
                            </div>
                        </div>
                        <div class="caja_art caj-03">
                            <div><img src="./img/img_rep/artistas/bad-bunny.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Todo 2022</div>
                                <div>Las mejores canciones del 2022</div>
                            </div>
                        </div>
                        <div class="caja_art caj-04">
                            <div><img src="./img/img_rep/artistas/rock.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Rocks Clasicos</div>
                                <div>Leyendas del Rock & musica epica...</div>
                            </div>
                        </div>
                        <div class="caja_art caj-05">
                            <div><img src="./img/img_rep/artistas/chill.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Exitos Relajantes</div>
                                <div>Relajate con los mejores, nuevos...</div>
                            </div>
                        </div>
                        <div class="caja_art caj-06">
                            <div><img src="./img/img_rep/artistas/beyonce.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Exitos de Hoy</div>
                                <div>Beyonce lo mas sonado del momento</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="se_01">
                        <h2><span>Estado animico</span></h2>
                        <span>Ver todo</span>
                    </div>
                    <div class="se_02">
                        <div class="caja_art caj-01">
                            <div><img src="./img/img_rep/artistas/canserbero.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Canserbero</div>
                                <div>Los mejores exitos de una leyenda del rap</div>
                            </div>
                        </div>
                        <div class="caja_art caj-02">
                            <div><img src="./img/img_rep/artistas/porta.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Porta</div>
                                <div>Album Hip Hop - En boca de tantos</div>
                            </div>
                        </div>
                        <div class="caja_art caj-03">
                            <div><img src="./img/img_rep/artistas/coldplay.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Coldplay</div>
                                <div>Los mejores exitos del genero alternativo</div>
                            </div>
                        </div>
                        <div class="caja_art caj-04">
                            <div><img src="./img/img_rep/artistas/linkin-park.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Linkin Park</div>
                                <div>Leyendas del Rock alternativo & music...</div>
                            </div>
                        </div>
                        <div class="caja_art caj-05">
                            <div><img src="./img/img_rep/artistas/avicii.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Avicii</div>
                                <div>Relajate con los mejores hits ...</div>
                            </div>
                        </div>
                        <div class="caja_art caj-06">
                            <div><img src="./img/img_rep/artistas/ed_sheeran.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Ed Sheeran</div>
                                <div>Bellamente oscura, pistas dramaticas</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="se_01">
                        <h2><span>Reguaeton</span></h2>
                        <span>Ver todo</span>
                    </div>
                    <div class="se_02">
                        <div class="caja_art caj-01">
                            <div><img src="./img/img_rep/artistas/daddy_yankee.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Daddy Yankee</div>
                                <div>El Rey del Reguaeton</div>
                            </div>
                        </div>
                        <div class="caja_art caj-02">
                            <div><img src="./img/img_rep/artistas/bad-bunny.jpeg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Bad Bunny</div>
                                <div>Trap Latino</div>
                            </div>
                        </div>
                        <div class="caja_art caj-03">
                            <div><img src="./img/img_rep/artistas/ozuna.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Ozuna</div>
                                <div>Todos los exitos</div>
                            </div>
                        </div>
                        <div class="caja_art caj-04">
                            <div><img src="./img/img_rep/artistas/karolG.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Karol G</div>
                                <div>Trap latino</div>
                            </div>
                        </div>
                        <div class="caja_art caj-05">
                            <div><img src="./img/img_rep/artistas/don-omar.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Don Omar</div>
                                <div>King of Kings</div><br>
                            </div>
                        </div>
                        <div class="caja_art caj-06">
                            <div><img src="./img/img_rep/artistas/maluma.jpg" alt="Imagen_Artista"></div>
                            <div class="caj-des">
                                <div>Maluma</div>
                                <div>Sus mejores exitos</div>
                            </div>
                        </div>
                    </div>
                </div>`
}