class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY)
    {
   this.offSetX=offSetX;
   this.offSetY=offSetY;
   var options={
       bodyA=body1,
       bodyB=body2,
       pointB:{x:this.offSetX, y:this.offSetY}
   }
   this.rope=Constraint.create(options)
   World.add(world.this.rope)
   
   
    }
       
   }