class Ball{
constructor(x,y,r){
var options={
restitution:0.8,
friction:0.5,
density:1.0,    
}
this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,options)
this.r=r
World.add(world,this.body)
}
display(){
imageMode(RADIUS)
image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)    
} 
}