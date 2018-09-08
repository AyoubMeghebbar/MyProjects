function ENEMY(x,y,r,xspeed){
  this.x=x;
  this.y=y;
  this.r=r;
  this.xspeed=xspeed;
  
  this.show = function(){
    noFill();
    stroke(255);
    ellipse(this.x,this.y,this.r,this.r);
  }
  this.move = function (){
    this.x-=this.xspeed;
  } 
  this.get_x = function(){
    return this.x;
  }
  this.get_y = function(){
    return this.y;
  }
}
