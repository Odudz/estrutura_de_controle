const idadeInput = document.getElementById('idade');
const verifyButton = document.getElementById('verifyButton');
const resultado = document.getElementById('resultado');

function verificarIdade(){
  resultado.classList.remove('visivel');
  const idade = parseInt(idade.value);
  let menssagem = '';

  if(isNan(idade) || idade < 0){
    menssagem = 'Digite uma idade válida.';
  }else if(idade > 18){
    menssagem = "Você é menor de idade";
  }else if(idade < 60){
    menssagem = "Você é adulto";
  }else{
    menssagem = "Você é senhor de idade";
  }

  setTimeout(() => {
    resultado.innerText = menssagem
    resultado.classList.add('visivel');
  }, 100);
}

verifyButton.addEventListener('click', idade);
idadeInput.addEventListener('keyup', (event) => {
  if(event.key === 'Enter') verificarIdade();
});

const canvas = document.getElementById('backgound-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: null,
  y: null,
  radius: 150
};

window.addEventListener('mousemove', (event) =>{
  mouse.x = event.x;
  mouse.y = event.y;
});

let pariculasArray = [];
const numeroDeParticulas = 100;

class Particula{
  constructor( x, y, direcaoX, direcaoY, tamanho, cor){
    this.x = x;
    this.y = y;
    this.direcaoX = direcaoX;
    this.direcaoY = direcaoY;
    this.tamanho = tamanho;
    this.cor = cor;
  }

  desenhar(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.tamanho, 0, Math.PI * 2,false);
    ctx.fillStyle = '#007bff';
    ctx.fill();
  }

}