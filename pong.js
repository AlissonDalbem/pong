//tamanho e posição circulo
let xCirculo = 300;
let yCirculo = 200;
let dCirculo = 20;
let rCirculo = dCirculo / 2;

//movimentação circulo
let moveXCirculo = -8;
let moveYCirculo = -2;


//tamanho e posição raquete player
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//tamanho e posição raquete IA

let xRaquetePC = 580;
let yRaquetePC = 150;
let velocidadeYPC = 10;

//colisão raquete
let collide = false;


//placar
let pontosPlayer= 0;
let pontosPC = 0;


//sons
let musica;
let hit;
let ponto;

function preload(){
  hit = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}





function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  
  circulo();
  
  circuloMove();
 
  colisaoCirculo();
  
  raquetePlayer(xRaquete, yRaquete);
  
  moveRaquete();
  
  raquetePlayer(xRaquetePC, yRaquetePC);
 
  moveRaquetePC();
  
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaquetePC,yRaquetePC);

  marcadorPlacar();
  
  marcouPonto();

}


function circulo() {
  circle(xCirculo, yCirculo, dCirculo);
  
}


//funções raquete player

function raquetePlayer(x,y){
    rect(x, y, comprimentoRaquete, alturaRaquete);
}


function moveRaquete(){
  if (keyIsDown (UP_ARROW)) {
    yRaquete -= 10;
  }

  
if (keyIsDown (DOWN_ARROW)) {
    yRaquete += 10;
  }
}



function colisaoRaquete(x, y) {
    collide = 
      collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xCirculo, yCirculo, rCirculo);
    if (collide){
        moveXCirculo *= -1;
          hit.play();
    }
}
  
//fim das funções da raquete player

//funções raquete pc

function moveRaquetePC(){
 
  if (keyIsDown (87)) {
    yRaquetePC -= 10;
  }

  
if (keyIsDown (83)) {
    yRaquetePC += 10;
  }
}

//fim das funções da raquete pc


function circuloMove() {
  xCirculo += moveXCirculo;
  yCirculo += moveYCirculo;
}


function colisaoCirculo() {
  if (xCirculo + rCirculo > width || xCirculo - rCirculo <0)
  {moveXCirculo *= -1;
  }

  
  if (yCirculo + rCirculo > height || yCirculo - rCirculo <0) 
  {moveYCirculo *= -1;  
  } 
}


function marcadorPlacar(){
  textSize (16);
  textAlign(CENTER);
  
  
  fill(color(15, 31, 98)); 
  rect(150, 10, 40, 20)
  rect(450, 10, 40, 20)
  
  fill(255)
  text(pontosPlayer, 170, 26)
  text(pontosPC, 470, 26)
}


function marcouPonto(){
  if (xCirculo > 590){
    pontosPlayer += 1;
      ponto.play();
  }
  if (xCirculo < 10){
    pontosPC += 1;
      ponto.play();
  }
}








