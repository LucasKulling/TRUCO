// POSIBLES MEJORAS
// agregar que juegue el jugador que gano la mano
//agregar mas puntajes de envido y truco
//mejorar el interfaz de cartas
//esperar para tirar cartas del jugador opuesto 



class Carta{
constructor(numero, palo, truco, envido){
    this.numero=numero
    this.palo=palo
    this.truco=truco
    this.envido=envido
}

}
//Cartas
const copa4 = new Carta (4, "🍷", 1, 4)
const espada4 = new Carta (4, "🗡️", 1, 4)
const oro4 = new Carta (4, "💰", 1, 4)
const basto4 = new Carta (4, "🪓", 1, 4)
const copa5 = new Carta (5, "🍷", 2, 5)
const espada5 = new Carta (5, "🗡️", 2, 5)
const oro5 = new Carta (5, "💰", 2, 5)
const basto5 = new Carta (5, "🪓", 2, 5)
const copa6 = new Carta (6, "🍷", 3, 6)
const espada6 = new Carta (6, "🗡️", 3, 6)
const oro6 = new Carta (6, "💰", 3, 6)
const basto6 = new Carta (6, "🪓", 3, 6)
const copa7 = new Carta(7, "🍷", 4, 7)
const basto7 = new Carta(7, "🪓", 4, 7)
const copa10 = new Carta (10, "🍷", 5, 0 )
const espada10 = new Carta (10, "🗡️", 5, 0 )
const oro10 = new Carta (10, "💰", 5, 0 )
const basto10 = new Carta (10, "🪓", 5, 0 )
const copa11 = new Carta(11, "🍷", 6, 0)
const espada11 = new Carta(11, "🗡️", 6, 0)
const oro11 = new Carta(11, "💰", 6, 0)
const basto11 = new Carta(11, "🪓", 6, 0)
const copa12 = new Carta(12, "🍷", 7, 0)
const espada12 = new Carta(12, "🗡️", 7, 0)
const oro12 = new Carta(12, "💰", 7, 0)
const basto12 = new Carta(12, "🪓", 7, 0)
const copa1 = new Carta(1, "🍷", 8, 1)
const oro1 = new Carta(1, "💰", 8, 1)
const copa2 = new Carta(2, "🍷", 9, 2)
const espada2 = new Carta(2, "🗡️", 9, 2)
const oro2 = new Carta(2, "💰", 9, 2)
const basto2 = new Carta(2, "🪓", 9, 2)
const copa3 = new Carta(3, "🍷", 10, 3)
const espada3 = new Carta(3, "🗡️", 10, 3)
const oro3 = new Carta(3, "💰", 10, 3)
const basto3 = new Carta(3, "🪓", 10, 3)
const oro7 = new Carta(7, "💰", 11, 7)
const espada7 = new Carta(7, "🗡️", 12, 7)
const basto1 = new Carta (1, "🪓", 13, 1)
const espada1 = new Carta (1, "🗡️", 14, 1)

const cartas = [copa1, copa2, copa3, copa4, copa5, copa6, copa7, copa10, copa11, copa12,
espada1, espada2, espada3, espada4, espada5, espada6, espada7, espada10, espada11, espada12,
oro1, oro2, oro3, oro4, oro5, oro6, oro7, oro10, oro11, oro12,
basto1, basto2, basto3, basto4, basto5, basto6, basto7, basto10, basto11, basto12 ]
//variables
//botones
const boton1 = document.getElementById("carta1")
const boton2 = document.getElementById("carta2")
const boton3 = document.getElementById("carta3")
const turnoDe = document.getElementById("turnoDe")
const textoBoton1 = document.querySelector("#primeraCarta")
const cartaEnemigoPrimera = document.getElementById("cartaEnemigoPrimera")
const cartaEnemigoSegunda = document.getElementById("cartaEnemigoSegunda")
const cartaEnemigoTercera = document.getElementById("cartaEnemigoTercera")
const cartaJugadorPrimera = document.getElementById("cartaJugadorPrimera")
const cartaJugadorSegunda = document.getElementById("cartaJugadorSegunda")
const cartaJugadorTercera = document.getElementById("cartaJugadorTercera")
const botonEnvido = document.getElementById("envido")
const botonTruco = document.getElementById("truco")
const puntosJugadorEspacio = document.getElementById("puntos-jugador")
const puntosEnemigoEspacio =document.getElementById("puntos-rival")
//variables let
let cartaEnemigo1
let cartaEnemigo2
let cartaEnemigo3
let cartaJugador1
let cartaJugador2
let cartaJugador3
let mano
let tirada1 = "a"
let tirada2 = "a"
let tirada3 = "a"
let tiradaOponente1
let tiradaOponenete2
let tiradaOponente3
let tiradaJugadorChecker1 = true
let tiradaJugadorChecker2 = false
let tiradaJugadorChecker3 = false
let tiradaOponenteChecker1 = true
let tiradaOponenteChecker2 = true
let tiradaOponenteChecker3 = true
let puntosJugador = 0
let puntosEnemigo = 0
let valorVictoria = 1


sectionJuego.style.display = "none"

botonJugadorPc.addEventListener("click", ocultarIntro )
function ocultarIntro(){
    sectionJuego.style.display = "flex"
    sectionIntro.style.display = "none"
    repartirCartas()
}

function repartirCartas(){
    
    let cartasMezcladas = cartas.sort(()=> 0.5 - Math.random())
    cartaEnemigo1 = cartasMezcladas[0]
    cartaEnemigo2 = cartasMezcladas[1]
    cartaEnemigo3 = cartasMezcladas[2]
    cartaJugador1 = cartasMezcladas[3]
    cartaJugador2 = cartasMezcladas[4]
    cartaJugador3 = cartasMezcladas[5]

    boton1.innerHTML = cartaJugador1.numero + cartaJugador1.palo
    boton2.innerHTML = cartaJugador2.numero + cartaJugador2.palo
    boton3.innerHTML = cartaJugador3.numero + cartaJugador3.palo

    if (mano === "oponente"  ){
        mano = "jugador"
        turnoDe.innerHTML = "El " + mano + " es la mano."
    } else if( mano === "jugador"){
        mano = "oponente"
        turnoDe.innerHTML = "El " + mano + " es la mano."
    } else{turnoInicial()}
    
    if (mano === "jugador"){ queCartaJugador()}
    else if(mano === "oponente"){
        desvelarCartaEnemigo1()
    }
}

function turnoInicial(){
  mano = aleatorio (0,1)
  if(mano === 0 ){
    mano = "oponente"}
  else if(mano === 1){
    mano = "jugador"
  }
  turnoDe.innerHTML = "El " + mano + " es la mano."
}

//tirada Jugador
function tiradaJugador1(){
    if(tiradaJugadorChecker1){
    boton1.addEventListener("click", asignarCartaTirada1A)
    boton2.addEventListener("click", asignarCartaTirada1B)
    boton3.addEventListener("click", asignarCartaTirada1C)
    botonEnvido.addEventListener("click", envido)
    botonTruco.addEventListener("click", truco)
    }
    tiradaJugadorChecker2 = true
}

function asignarCartaTirada1A(){
    if(tiradaJugadorChecker1){
    tiradaJugadorChecker1 = false
    boton1.style.display = "none"
    console.log(cartaJugador1)
    cartaJugadorPrimera.innerHTML = cartaJugador1.numero + cartaJugador1.palo
    Object.freeze(cartaJugadorPrimera.innerHTML)
    tirada1 = cartaJugador1
    chequearRonda1()
}
}
function asignarCartaTirada1B(){
    if(tiradaJugadorChecker1){
    tiradaJugadorChecker1 = false
    boton2.style.display = "none"
    console.log(cartaJugador2)
    cartaJugadorPrimera.innerHTML = cartaJugador2.numero + cartaJugador2.palo
    Object.freeze(cartaJugadorPrimera.innerHTML)
    tirada1 = cartaJugador2
    chequearRonda1()}
}
function asignarCartaTirada1C(){
    if(tiradaJugadorChecker1){
    tiradaJugadorChecker1 = false
    boton3.style.display = "none"
    console.log(cartaJugador3)
    cartaJugadorPrimera.innerHTML = cartaJugador3.numero + cartaJugador3.palo
    Object.freeze(cartaJugadorPrimera.innerHTML)
    tirada1 = cartaJugador3
    chequearRonda1()}
}

function tiradaJugador2(){
    if(tiradaJugadorChecker2){
    botonEnvido.disabled = true
    boton1.addEventListener("click", asignarCartaTirada2A)
    boton2.addEventListener("click", asignarCartaTirada2B)
    boton3.addEventListener("click", asignarCartaTirada2C)
    botonTruco.addEventListener("click", truco)
    }
    tiradaJugadorChecker3 = true
    
}
function asignarCartaTirada2A(){
    if(tiradaJugadorChecker2){
    
    tiradaJugadorChecker2 = false
    boton1.style.display = "none"
    console.log(cartaJugador1)
    cartaJugadorSegunda.innerHTML = cartaJugador1.numero + cartaJugador1.palo
    Object.freeze(cartaJugadorSegunda.innerHTML)
    tirada2 = cartaJugador1
    chequearRonda2()}
}
function asignarCartaTirada2B(){
    if(tiradaJugadorChecker2){
    tiradaJugadorChecker2 = false
    boton2.style.display = "none"
    console.log(cartaJugador2)
    cartaJugadorSegunda.innerHTML = cartaJugador2.numero + cartaJugador2.palo
    Object.freeze(cartaJugadorSegunda.innerHTML)
    tirada2 = cartaJugador2
    chequearRonda2()}
}
function asignarCartaTirada2C(){
    if(tiradaJugadorChecker2){
    tiradaJugadorChecker2 = false
    boton3.style.display = "none"
    console.log(cartaJugador3)
    cartaJugadorSegunda.innerHTML = cartaJugador3.numero + cartaJugador3.palo
    Object.freeze(cartaJugadorSegunda.innerHTML)
    tirada2 = cartaJugador3
    chequearRonda2()}
}
function tiradaJugador3(){
    if(tiradaJugadorChecker3){
    boton1.addEventListener("click", asignarCartaTirada3A)
    boton2.addEventListener("click", asignarCartaTirada3B)
    boton3.addEventListener("click", asignarCartaTirada3C)
    botonTruco.addEventListener("click", truco)
    }
    
    
}
function asignarCartaTirada3A(){
    if(tiradaJugadorChecker3){
    tiradaJugadorChecker3 = false
    boton1.style.display = "none"
    console.log(cartaJugador1)
    cartaJugadorTercera.innerHTML = cartaJugador1.numero + cartaJugador1.palo
    tirada3 = cartaJugador1
    chequearRonda3()}
}
function asignarCartaTirada3B(){
    if(tiradaJugadorChecker3){
    tiradaJugadorChecker3 = false
    boton2.style.display = "none"
    console.log(cartaJugador2)
    cartaJugadorTercera.innerHTML = cartaJugador2.numero + cartaJugador2.palo
    tirada3 = cartaJugador2
    chequearRonda3()}
}
function asignarCartaTirada3C(){
    if(tiradaJugadorChecker3){
    tiradaJugadorChecker3 = false
    boton3.style.display = "none"
    console.log(cartaJugador3)
    cartaJugadorTercera.innerHTML = cartaJugador3.numero + cartaJugador3.palo
    tirada3 = cartaJugador3
    chequearRonda3()}
}

function queCartaJugador(){
    if(tiradaJugadorChecker1){
        tiradaJugador1()
    } else if(tiradaJugadorChecker2){
        tiradaJugador2()
    } else if(tiradaJugadorChecker3){
        tiradaJugador3()
    }else{
        botonTruco.removeEventListener("click", truco)
        setTimeout(ganadorMano, 1000)}
}
//enemigo
function desvelarCartaEnemigo1(){
    cartaEnemigoPrimera.innerHTML = cartaEnemigo1.numero + cartaEnemigo1.palo
    tiradaOponenteChecker1 = false
    return chequearRonda1()
    
}
function desvelarCartaEnemigo2(){
    cartaEnemigoSegunda.innerHTML = cartaEnemigo2.numero + cartaEnemigo2.palo
    tiradaOponenteChecker2 = false
    return chequearRonda2()
}
function desvelarCartaEnemigo3(){
    cartaEnemigoTercera.innerHTML = cartaEnemigo3.numero + cartaEnemigo3.palo
    tiradaOponenteChecker3 = false
    return chequearRonda3()
}

// function queCartaEnemigo (){
//     if(cartaEnemigoPrimera.innerHTML != (cartaEnemigo1.numero + cartaEnemigo1.palo)){
        
//     }
//     else if(cartaEnemigoSegunda.innerHTML != (cartaEnemigo2.numero + cartaEnemigo2.palo)){
//         chequearRonda2("oponente")
//     }
//     else if(cartaEnemigoTercera.innerHTML != (cartaEnemigo3.numero + cartaEnemigo3.palo)){chequearRonda3("oponente")}
//     else{
//     console.log("terminaron")
//     queCartaJugador()}
// } 



function trucoNoQuerido(){
    alert("Truco no querido.")
puntosJugador += 1
puntosJugadorEspacio.innerHTML = `${puntosJugador}`
botonTruco.disabled = true
jugarNuevaMano ()
}

function truco(){ 
    let randomTruco = aleatorio(1,3)
    if(randomTruco === 1){
        trucoNoQuerido()
    } else{

        alert("Truco querido.")
        valorVictoria = valorVictoria + 1
        botonTruco.disabled = true
    }
    botonEnvido.disabled = true
   
}

function chequearRonda1 (){
    if(tirada1 === "a"){
        
        return queCartaJugador() 
    }  else if(cartaEnemigoPrimera.innerHTML != (cartaEnemigo1.numero + cartaEnemigo1.palo)){
        
        return desvelarCartaEnemigo1()}
    else if(tirada1.truco > cartaEnemigo1.truco){
        
        return queCartaJugador()}
    else if(cartaEnemigo1.truco > tirada1.truco){
        console.log("4")
        return desvelarCartaEnemigo2()}
    else if(tirada1.truco === cartaEnemigo1.truco){if(mano === "jugador"){
        console.log("5")
        return queCartaJugador()
    } else if(mano === "oponente"){
        console.log("6")
        return desvelarCartaEnemigo2()}}
}

function chequearRonda2(){
    if(tirada2 === "a"){return queCartaJugador()} 
    else if(cartaEnemigoSegunda.innerHTML != (cartaEnemigo2.numero + cartaEnemigo2.palo)){return desvelarCartaEnemigo2()}
    else if(tirada2.truco > cartaEnemigo2.truco){return queCartaJugador()}
    else if(cartaEnemigo2.truco > tirada2.truco){return desvelarCartaEnemigo3()}
    else if (tirada2.truco === cartaEnemigo2.truco){if(mano === "jugador"){
        return queCartaJugador()
    } else if(mano === "oponente"){return desvelarCartaEnemigo3()}}
}
function chequearRonda3(){
    if(tirada3 === "a") {
        
        return queCartaJugador()}
    else if(cartaEnemigoTercera.innerHTML != (cartaEnemigo3.numero + cartaEnemigo3.palo)){
        
        return desvelarCartaEnemigo3()}
    else{
        
        botonTruco.removeEventListener("click", truco)
    setTimeout(ganadorMano, 1000)} 
}


function envidoNoQuerido(){
        puntosJugador = puntosJugador + 1 
        alert("Envido no querido.")
        puntosJugadorEspacio.innerHTML = `${puntosJugador}`
        botonEnvido.disabled = true
}
function envido(){

    let randomEnvido = aleatorio(1,3)
    console.log(randomEnvido)
    if(randomEnvido === 1){
        envidoNoQuerido()
    } else{
        alert("Envido querido.")
    let envidoJ
        let envidoE
        if(cartaJugador1.palo === cartaJugador2.palo ){
            envidoJ = 20 + cartaJugador1.envido + cartaJugador2.envido 
        }
        else if(cartaJugador1.palo === cartaJugador3.palo){
            envidoJ = 20 + cartaJugador1.envido + cartaJugador3.envido
        }
        else if(cartaJugador2.palo === cartaJugador3.palo ){
            envidoJ = 20 + cartaJugador2.envido + cartaJugador3.envido
        }else if(cartaJugador1.envido >= cartaJugador2.envido && cartaJugador1.envido >= cartaJugador3.envido){
            envidoJ = cartaJugador1.envido
        }else if(cartaJugador2.envido >= cartaJugador1.envido && cartaJugador2.envido >= cartaJugador3.envido){
            envidoJ = cartaJugador2.envido
        }else if(cartaJugador3.envido >= cartaJugador1.envido && cartaJugador3.envido >= cartaJugador2.envido){
            envidoJ = cartaJugador3.envido
        }

        if(cartaEnemigo1.palo === cartaEnemigo2.palo ){
            envidoE = 20 + cartaEnemigo1.envido + cartaEnemigo2.envido 
        }
        else if(cartaEnemigo1.palo === cartaEnemigo3.palo){
            envidoE = 20 + cartaEnemigo1.envido + cartaEnemigo3.envido
        }
        else if(cartaEnemigo2.palo === cartaEnemigo3.palo ){
            envidoE = 20 + cartaEnemigo2.envido + cartaEnemigo3.envido
        }else if(cartaEnemigo1.envido >= cartaEnemigo2.envido && cartaEnemigo1.envido >= cartaEnemigo3.envido){
            envidoE = cartaEnemigo1.envido
        }else if(cartaEnemigo2.envido >= cartaEnemigo1.envido && cartaEnemigo2.envido >= cartaEnemigo3.envido){
            envidoE = cartaEnemigo2.envido
        }else if(cartaEnemigo3.envido >= cartaEnemigo1.envido && cartaEnemigo3.envido >= cartaEnemigo2.envido){
            envidoE = cartaEnemigo3.envido
        }

        function ganasteEnvido(){
            alert("Ganaste el Envido con " + envidoJ + " tu rival tenia " + envidoE)
            puntosJugador = puntosJugador + 2 
            puntosJugadorEspacio.innerHTML = `${puntosJugador}`
            botonEnvido.disabled = true
            ganadorJuego ()
        }
        function perdisteEnvido(){
            alert("Perdiste el Envido con " + envidoJ + " tu rival tenia " + envidoE)
            puntosEnemigo = puntosEnemigo + 2
            puntosEnemigoEspacio.innerHTML = `${puntosEnemigo}`
            botonEnvido.disabled = true
        }

        if(envidoJ > envidoE){
            ganasteEnvido()
        } else if(envidoE > envidoJ){
            perdisteEnvido()
        }else if(envidoE === envidoJ){
            if(mano === "jugador"){
                ganasteEnvido()
            } else if(mano === "oponente"){
                perdisteEnvido()
            }
        }




    }
}


function ganadorMano(){
    let puntosTrucoJugador = 0
    let puntosTrucoEnemigo = 0


    if(tirada1.truco > cartaEnemigo1.truco){puntosTrucoJugador++}
    else if(cartaEnemigo1.truco > tirada1.truco){puntosTrucoEnemigo++}
    else if (tirada1.truco === cartaEnemigo1.truco){puntosTrucoEnemigo += 0,6
    puntosTrucoEnemigo += 0,6}

    if(tirada2.truco > cartaEnemigo2.truco){puntosTrucoJugador++ }
    else if(cartaEnemigo2.truco > tirada2.truco){puntosTrucoEnemigo++}
    else if (tirada2.truco === cartaEnemigo2.truco){puntosTrucoEnemigo += 0,6
    puntosTrucoEnemigo += 0,6}

    if(tirada3.truco > cartaEnemigo3.truco){puntosTrucoJugador++}
    else if(cartaEnemigo3.truco > tirada3.truco){puntosTrucoEnemigo++}
    else if (tirada3.truco === cartaEnemigo3.truco){puntosTrucoEnemigo += 0,6
    puntosTrucoEnemigo += 0,6}

    console.log(puntosTrucoEnemigo, puntosTrucoJugador)
    verificarTruco()
    
    function verificarTruco(){
    if(puntosTrucoJugador > puntosTrucoEnemigo || puntosTrucoJugador === puntosTrucoEnemigo && mano === "jugador"){
        alert("Ganaste la ronda " + valorVictoria + " puntos.")
        puntosJugador = puntosJugador + valorVictoria
        puntosJugadorEspacio.innerHTML = `${puntosJugador}`
        ganadorJuego ()
        }
    else if(puntosTrucoEnemigo > puntosTrucoJugador || puntosTrucoJugador === puntosTrucoEnemigo && mano === "oponente"){
        alert("Perdiste la ronda " + valorVictoria + " puntos.")
        puntosEnemigo = puntosEnemigo + valorVictoria
        puntosEnemigoEspacio.innerHTML = `${puntosEnemigo}`
        ganadorJuego ()
    }
    }
    jugarNuevaMano ()
}

function jugarNuevaMano (){
    
    tiradaJugadorChecker1 = true
    tiradaJugadorChecker2 = false
    tiradaJugadorChecker3 = false
    tiradaOponenteChecker1 = true
    tiradaOponenteChecker2 = true
    tiradaOponenteChecker3 = true
    botonEnvido.disabled = false
    botonTruco.disabled = false
    cartaJugadorPrimera.innerHTML = " "
    cartaJugadorSegunda.innerHTML = " "
    cartaJugadorTercera.innerHTML = " "
    cartaEnemigoPrimera.innerHTML = " "
    cartaEnemigoSegunda.innerHTML = " "
    cartaEnemigoTercera.innerHTML = " "
    boton1.style.display = "block"
    boton2.style.display = "block"
    boton3.style.display = "block"
    valorVictoria = 1

    cartaEnemigo1 = "" 
    cartaEnemigo2 = ""
    cartaEnemigo3 = ""
    cartaJugador1 = ""
    cartaJugador2 = ""
    cartaJugador3 = ""
    tirada1 = "a"
    tirada2 = "a"
    tirada3  = "a"
    boton1.removeEventListener("click", asignarCartaTirada1A)
    boton2.removeEventListener("click", asignarCartaTirada1B)
    boton3.removeEventListener("click", asignarCartaTirada1C)
    boton1.removeEventListener("click", asignarCartaTirada2A)
    boton2.removeEventListener("click", asignarCartaTirada2B)
    boton3.removeEventListener("click", asignarCartaTirada2C)
    boton1.removeEventListener("click", asignarCartaTirada3A)
    boton2.removeEventListener("click", asignarCartaTirada3B)
    boton3.removeEventListener("click", asignarCartaTirada3C)
    repartirCartas()
}

//mejorar Victoria
function ganadorJuego (){
    if(puntosJugador >= 15){
        alert("Ganaste el juego, sos un verdadero gaucho.")
    } 
    if(puntosEnemigo >=15){
        alert("Perdiste el juego, sos nefasto!")
    }
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}
















