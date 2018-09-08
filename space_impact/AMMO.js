function AMMO (x,y,xspeed){
  this.x=x;
  this.y=y;
  this.xspeed=xspeed;
  
  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,5,5);
  }
  this.move = function (){
    this.x+=this.xspeed;
  }
  this.get_y = function(){
    return this.y;
  }
  this.get_x = function(){
    return this.x;
  }
}
