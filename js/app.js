const numAleatorio = Math.floor(Math.random() * 10) + 1
const input = document.getElementById('numUsuario')
const btnEmpezar = document.querySelector('.btn-success')

const empezarJuego = () =>{
  if(btnEmpezar.innerText === 'Comenzar el juego'){
    const p = document.createElement('p')
    p.classList.add('lead', 'my-2')
    p.innerText = `El juego empezó ! Debe adivinar el número aleatorio que se generó entre el 1 y el 10`
    btnEmpezar.insertAdjacentElement("afterend", p)
    btnEmpezar.innerText = 'El juego empezó'
    btnEmpezar.className = 'btn btn-danger'
  } 
}

const coincidenNumeros = () =>{
  let numUsuario = document.getElementById('numUsuario')
  if(numAleatorio > numUsuario.value){
    alert('El número aleatorio es mayor al que usted ingresó');
    input.value = ''
  } else if(numAleatorio < numUsuario.value){
    alert('El número aleatorio es menor al que usted ingresó');
    input.value = ''
  } else{
    alert('Acertaste el número secreto !');
  }
}

const numUsuario = document.getElementById('btn-enviar')
numUsuario.addEventListener('click', coincidenNumeros)