var tower;
var doors,climbers
var PLAY = 1
var END = 0
var doorGroups
var climberGroups
var gameState = PLAY
var climbers
var doors
function preload(){
  towerImage= loadImage("tower.png")
  doorImg =  loadImage("door.png")
  ghostImage=loadImage("ghost-standing.png")
  climberImg = loadImage("climber.png")
  bImg = loadImage("b.jpg")
}
function setup(){
  
  createCanvas(400,400)
  tower=createSprite(200,200,400,400)
  tower.addImage("toer",towerImage)
  ghost=createSprite(200,200,50,50)
  
  ghost.addImage("on,",ghostImage)
  ghost.scale=0.5
  tower.velocityY=2
  doorGroups =new Group()
  climberGroups = new Group()
  
  
  
}
function draw(){
  
  background("white")
  if (gameState === PLAY){
      if(tower.y>=300){
       tower.y=200
  }
  if(keyDown("right")){
    ghost.x=ghost.x+2
  }
  if(keyDown("left")){
    ghost.x=ghost.x-2
  }
  if(keyDown("space")){
    ghost.velocityY=-2

     
  }
    ghost.velocityY=ghost.velocityY+0.025
  door()
  climber(  )
  if(climberGroups.isTouching(ghost)||doorGroups.isTouching(ghost)){
    gameState = END
  }
  }
  else if (gameState===END){
    tower.velocityY = 0
    climberGroups.setVelocityYEach(0)
    ghost.velocityY = 0
    doorGroups.setVelocityYEach(0)
    tower.addImage("toer",bImg)
    ghost.visible =false
    climberGroups.setVisibleEach(false)
    doorGroups.setVisibleEach(false)
    
  
    
    
    
    
  }
  
      
                   
 
  drawSprites()
}
function door(){
  if(frameCount%200 === 0 ){
    
  
  doors = createSprite(10,0,10,10)
  doors.addImage("kjj",doorImg)
  doors.x = Math.round(random(10,400))
  doors.velocityY = 2
    
    doorGroups.add(doors) 
  
  }
  

  
}
function climber(){
  if(frameCount%200 === 0 ){
    climbers = createSprite(10,50,10,10)
    climbers.addImage("ggg",climberImg)
    climbers.x=doors.x
    climbers.velocityY =2
    climberGroups.add(climbers)
  }
 
}