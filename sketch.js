var playes,rbarriers,blastImg,playerCar,bugatti,ai1,ai2,track,nitro,henry,ai11,ai12,bossAi,ii,gameState,bo1,bo2,bi1,bi2,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,zz;

function preload(){
  gameState=0
  blastImg=loadImage("blast.png");
  playerCar=loadImage("lambo.png");
  bugatti=loadImage("bugattiAi.png");
  ai1=loadImage("car1.png");
  ai2=loadImage("car2.png");
  track=loadImage("raceStrip.png");
  nitro=loadImage("nitroBottle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  henry=createSprite(400, 130, 50, 50);
  henry.addImage(playerCar)
  henry.scale=0.09
  henry.rotation=90

 

  a=createSprite(1076,70,100,50)
  b=createSprite(1150,75,100,50)
  c=createSprite(1230,110,100,50)
  d=createSprite(1270,150,100,50)
  e=createSprite(1320,200,100,50)
  f=createSprite(1340,273,120,100)

  ii=createSprite(1065,320,10,100)
  iii=createSprite(275,320,10,100)

  g=createSprite(1076,70,100,50)
  h=createSprite(1101,560,100,50)
  i=createSprite(1190,569,100,50)
  j=createSprite(1230,539,100,50)
  k=createSprite(1290,490,100,50)
  l=createSprite(1320,440,100,50)
  m=createSprite(1340,370,120,100)

  n=createSprite(238,70,100,50)
  o=createSprite(150,75,100,50)
  p=createSprite(1190,90,100,50)
  q=createSprite(1230,110,100,50)
  r=createSprite(1270,150,100,50)
  s=createSprite(1320,200,100,50)
  t=createSprite(1340,273,120,100)

  u=createSprite(1076,70,100,50)
  v=createSprite(1101,560,100,50)
  w=createSprite(1190,569,100,50)
  x=createSprite(1230,539,100,50)
  y=createSprite(1290,490,100,50)
  z=createSprite(1320,440,100,50)
  zz=createSprite(1340,370,120,100)

  bo1=createSprite(670,80,  800, 50);
  bo2=createSprite(670,550,  800, 50);

  bi1=createSprite(670,260,  800, 50);
  bi2=createSprite(670,380,  800, 50);

  barriers=createGroup()
  

 barriers.add(bi1)
 barriers.add(bi2)
 barriers.add(bo1)
 barriers.add(bo2)
 barriers.add(a)
 barriers.add(b)
 barriers.add(c)
 barriers.add(d)
 barriers.add(e)
 barriers.add(f)
 barriers.add(g)
 barriers.add(h)
 barriers.add(i)
 barriers.add(j)
 barriers.add(k)
 barriers.add(l)
 barriers.add(m)
 barriers.add(n)
 barriers.add(o)
 barriers.add(p)
 barriers.add(q)
 barriers.add(r)
 barriers.add(s)
 barriers.add(t)
 barriers.add(u)
 barriers.add(v)
 barriers.add(w)
 barriers.add(x)
 barriers.add(y)
 barriers.add(z)
 barriers.add(zz)
 barriers.add(iii)
 barriers.add(ii)
 

  ai11=createSprite(490, 130, 50, 50);
  ai11.addImage(ai1)
  ai11.scale=0.04
  ai11.rotation=90

  ai12=createSprite(490, 200, 50, 50);
  ai12.addImage(ai2)
  ai12.scale=0.04
  ai12.rotation=90

  bossAi=createSprite(400, 200, 50, 50);
  bossAi.addImage(bugatti)
  bossAi.scale=0.15
  bossAi.rotation=90

  playButton=createImg("playButton.gif")
  playButton.position(400,200)
  playButton.size(400,200)
  playButton.mouseClicked(changeState)
  imageMode(CENTER)

  nos=createSprite();
}

function draw() {
  background(255,255,255); 

 
  
  
  

  if(gameState==0){
   henry.visible=false
   bossAi.visible=false
   ai11.visible=false
   ai12.visible=false
   nos.visible=false
   bi1.visible=false
   bo1.visible=false
   bi2.visible=false
   bo2.visible=false
   barriers.setVisibleEach(false)
  }else{
    playButton.hide()
    playerControls()
   henry.visible=true
   bossAi.visible=true
   ai11.visible=true
   ai12.visible=true
   bi1.visible=false
   bo1.visible=false
   bi2.visible=false
   bo2.visible=false
   barriers.setVisibleEach(true)
    image(track,width/2,height/2,width,height)
    stroke(10);
          fill("red");
          ellipse(henry.x, henry.y, 60, 60); 

   
  }

 
   
 henry.collide(barriers)
 

 ai11.collide(barriers)


 ai12.collide(barriers)


 bossAi.collide(barriers)

  
  console.log(henry.y,"y")
  console.log(henry.x,"x")
  drawSprites();
}
function changeState(){
  gameState=1
  ai1.velocityX=1
  ai2.velocityX=1
  bossAi.velocityX=8
}
function playerControls(){
  if(keyDown(RIGHT_ARROW)){
    henry.x+=10   
   
  }
  if(keyDown(LEFT_ARROW)){
    henry.x-=10

  }
  if(keyDown(UP_ARROW)){
    henry.y-=10
   
  }
  if(keyDown(DOWN_ARROW)){
    henry.y+=10
   
  }
  console.log(henry.rotation)

}