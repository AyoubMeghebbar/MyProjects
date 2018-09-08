function SHIP (x,y,yspeed){
  this.x=x;
  this.y=y;
  this.yspeed=yspeed;
  
  this.show = function(){
    fill(255);
    triangle(this.x,this.y,this.x,this.y+40,40,this.y+20);
  }
  this.move = function(){
    if(keyIsDown(UP_ARROW)) this.y=this.y-this.yspeed;
    if(keyIsDown(DOWN_ARROW)) this.y=this.y+this.yspeed;
    if(this.y>=360) this.y=360;
    if(this.y<=0) this.y=0;
  } 
  this.get_y = function(){
    return this.y;
  }
}
