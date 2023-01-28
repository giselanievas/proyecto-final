
//SCRIPT DE VIDEO////

let video=document.querySelector(".video")


const iniciar=()=>{
   
    document.querySelector("#duracion").innerText="Duración video "+video.duration.toFixed(2);
    video.play()
    
}
const pausar=()=>{
    video.pause()
}


///SCRIPT DE JUEGO////
let imagen=document.querySelector('img');
let destino1= document.querySelector('.destino1')
let destino2= document.querySelector('.destino2')
let destino3= document.querySelector('.destino3')

const inicioDeArrastre=()=>{
    console.log("se inicio el arrastre");
}

imagen.addEventListener('dragend', ()=>{
    console.log("se solto la imagen");
})


const solto =()=>{
    console.log("se solto")
}
const enMovimiento=()=>{
    console.log('En movimiento')
}


destino1.addEventListener('dragenter', ()=>{
    console.log("elemento ingresando en zona de destino")
})

destino1.addEventListener('dragleave', ()=>{
    console.log("elemento saliendo de zona de destino")
})

destino1.addEventListener('dragover', (e)=>{
    event.preventDefault()
})

destino1.addEventListener('drop', ()=>{
    console.log('EVENTO DROP: se solto el elmento en la zona de destino')
})