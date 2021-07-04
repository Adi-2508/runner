var runner,runner_running;

var track,trackImage;

var boundry1,boundry2

function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  
trackImage = loadImage("path.png");
}


function setup(){
  createCanvas(400,400);
 

  //create track sprite
  track = createSprite(200,200);
  track.addImage("track",trackImage);
  track.velocityY=4;
  track.scale=1.2

  runner = createSprite(180,350,30,30);
  runner.addAnimation("JakeRunning", runner_running);
  runner.scale = 0.05;

  boundry1 = createSprite(0,0,100,800);
  boundry1.visible=false;

  boundry2 = createSprite(410,0,100,800);
  boundry2.visible=false;

   //create sprites here
   
  




}

function draw() {
  background(0);

  
  if(track.y > 400)
  { 
    track.y = height/2;
   }
   track.velocityY = 4



//runner.collide(track);
runner.collide(boundry1);
runner.collide(boundry2);
drawSprites();
}
