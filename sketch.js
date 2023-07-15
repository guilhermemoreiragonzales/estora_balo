var arco,flecha,planodeFundo,bVermelho,bRosa,bVerde,bAzul,grupoFlecha,cena;
var imagemArco,imagemFlecha,imagem_balaoVerde,imagem_balaoVermelho,imagem_balaoRosa,imagem_balaoAzul,imagemdeFundo;
var placar=0;

function preload(){
  
  imagemdeFundo=loadImage("background0.png");
  imagemFlecha=loadImage("arrow0.png");
  imagemArco=loadImage("bow0.png");
  imagem_balaoVermelho=loadImage("red_balloon0.png");  
  imagem_balaoVerde=loadImage("green_balloon0.png");
  imagem_balaoRosa=loadImage("pink_balloon0.png");
  imagem_balaoAzul=loadImage("blue_balloon0.png");
  
  
  
  
}


function setup(){
  createCanvas(400,400);
  
  cena=createSprite(0,0,400,400)
  cena.addImage(imagemdeFundo);
  cena.scale=2.5
  
  arco=createSprite(380,220,20,50)
  arco.addImage(imagemArco);
  arco.scale=1
  
  placar=0
  
  bVermelho=new Group();
  bVerde=new Group();
  bRosa=new Group();
  bAzul=new Group();
  grupoFlechas=new Group();
}

function draw(){
  
  background(imagemdeFundo)
  drawSprites()
  cena.velocityX=-3
  
  if(cena.x<0){
    cena.x=cena.width/2;
    
    
  }
  
  arco.y=World.mouseY
  
  if(keyDown("space")){
    
    criarFlechas();
    
  }
  
    var selecionar_balao=Math.round(random(1,4));
    
  
  if(World.frameCount%100==0){
  
    if(selecionar_balao==1){
    balaoVermelho();
    } else if(selecionar_balao==2){
    balaoVerde();
    }else if(selecionar_balao==3){
    balaoAzul();
    }else if(selecionar_balao==4){
    balaoRosa();
    }
    
    
  }
    
  if(grupoFlechas.isTouching(bVermelho)){
  bVermelho.destroyEach();
  grupoFlechas.destroyEach();
  placar=placar+1;
}
  if(grupoFlechas.isTouching(bVerde)){
  bVerde.destroyEach();
  grupoFlechas.destroyEach();
  placar=placar+3;
}
  if(grupoFlechas.isTouching(bAzul)){
  bAzul.destroyEach();
  grupoFlechas.destroyEach();
  placar=placar+2;
}
  if(grupoFlechas.isTouching(bRosa)){
  bRosa.destroyEach();
  grupoFlechas.destroyEach();
  placar=placar+1;
}
  
  drawSprites()
  text("Placar:"+placar,300,50);
  
    
}

function balaoAzul(){
  
  var azul=createSprite(0,Math.round(random(20,370)),10,10);
  
  azul.addImage(imagem_balaoAzul);
  azul.velocityX=3;
  azul.lifetime=150;
  azul.scale=0.1;
  bAzul.add(azul);
  
  
  
  
}

function balaoVerde(){
  
  var verde=createSprite(0,Math.round(random(20,370)),10,10);
  
  verde.addImage(imagem_balaoVerde);
  verde.velocityX=3;
  verde.lifetime=150;
  verde.scale=0.1;
  bVerde.add(verde);
  
  
  
  
}

function balaoRosa(){
  
  var rosa=createSprite(0,Math.round(random(20,370)),10,10);
  
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX=3;
  rosa.lifetime=150;
  rosa.scale=1;
  bRosa.add(rosa);
  
  
  
  
}

function balaoVermelho(){
  
  var vermelho=createSprite(0,Math.round(random(20,370)),10,10);
  
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX=3;
  vermelho.lifetime=150;
  vermelho.scale=0.1;
  bVermelho.add(vermelho);
  
  
  
}

function criarFlechas(){
  var flecha=createSprite(100,100,60,10);
  flecha.debug=false
  flecha.setCollider('circle',-50,0,20)
  flecha.addImage(imagemFlecha);
  flecha.x=360;
  flecha.y=arco.y;
  flecha.velocityX=-4;
  flecha.lifetime=100;
  flecha.scale=0.3;
  grupoFlechas.add(flecha);
}











