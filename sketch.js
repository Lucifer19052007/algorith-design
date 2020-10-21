var fixedrect , movingrect 


function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(600, 400, 50, 80); 
 fixedrect.shapeColor="blue"
 fixedrect.debug=true;
 movingrect= createSprite(400, 200, 80, 30); 
movingrect.shapeColor="blue"
movingrect.debug=true;
movingrect.velocityY=-5
fixedrect.velocityY=5
}

function draw() {
  background(0);
  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2
   && fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2)
   {
     movingrect.velocityX=movingrect.velocityX*(-1)
     fixedrect.velocityX=fixedrect.velocityX*(-1)
   }
   if( movingrect.y-fixedrect.y < fixedrect.width/2+movingrect.width/2
     && fixedrect.y-movingrect.y < fixedrect.width/2+movingrect.width/2){
      movingrect.velocityY=movingrect.velocityY*(-1)
      fixedrect.velocityY=fixedrect.velocityY*(-1) 
     }
 // movingrect.x=World.mouseX
 // movingrect.y=World.mouseY
 // if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2
  //  && fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2
   // && movingrect.y-fixedrect.y < fixedrect.width/2+movingrect.width/2
  //  && fixedrect.y-movingrect.y < fixedrect.width/2+movingrect.width/2){
   //   movingrect.shapeColor="red"  
    //  fixedrect.shapeColor="red" 
   // }  
   // else
   // {
    //  movingrect.shapeColor="blue"  
    //  fixedrect.shapeColor="blue" 
   // }
  drawSprites();
}