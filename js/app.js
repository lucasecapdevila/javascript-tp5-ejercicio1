const numAleatorio = Math.floor(Math.random() * 10) + 1
const btnEmpezar = document.querySelector('.btn-danger')

const empezarJuego = () =>{
  const p = document.createElement('p')
  p.classList.add('lead', 'my-2')
  p.innerText = `El juego empezó ! Debe adivinar el número aleatorio que se generó entre el 1 y el 10`
  btnEmpezar.insertAdjacentElement("afterend", p)
}

const coincidenNumeros = () =>{
  let numUsuario = document.getElementById('numUsuario')
  if(numAleatorio > numUsuario.value){
    alert('El número aleatorio es mayor al que usted ingresó');
  } else if(numAleatorio < numUsuario.value){
    alert('El número aleatorio es menor al que usted ingresó');
  } else{
    alert('Acertaste el número secreto !');
  }
}

const numUsuario = document.getElementById('btn-enviar')
numUsuario.addEventListener('click', coincidenNumeros)