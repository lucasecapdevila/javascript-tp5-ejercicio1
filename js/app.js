const generarNumeroAleatorio = () =>{
  let numAleatorio = Math.floor(Math.random() * 10) + 1
  console.log(numAleatorio);
}

const nuevoContenido = () =>{
  console.log('nuevoContenido');
}

const btnEmpezarJuego = document.getElementsByClassName('btn-danger')