class Box {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x , y , width,height,{restitution:1.0,isStatic:true}  );
this.width=width
this.height=height
World.add(world,this.body)
packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15
   
    }
display(){
var pos=this.body.position
var angle=this.body.angle
push ();
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
    packageSprite.x= pos.x 
	packageSprite.y= pos.y
    if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(this.body,false)
	}
    pop();
}


}