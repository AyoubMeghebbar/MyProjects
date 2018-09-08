var s;
var a=[];
var e=[];
var score=0;
var num_enemy=5;
var enemy=num_enemy;
var life=5;
function setup() {
createCanvas(800,400);
s= new SHIP(10,height/2,5);
for(var i=0;i<num_enemy;i++)
  {
    e[i] = new ENEMY(random(800,1200),random(0,400),15,3);
  }
frameRate(160);
}

function draw() {
  background(0);
  if(life!=0){
  s.show();
  s.move();
  for(i=0;i<a.length;i++)
  {
    a[i].show();
    a[i].move();
  }
  for(i=0;i<e.length;i++)
  {
    e[i].show();
    e[i].move();
  }
  Remove_Enemy();
  local();
  generate();
  show_text();
  }
  else {
  text("GAME OVER",350,100);
  text("SCORE :",330,200);
  text(score,430,200);
  }
}
function show_text(){
  text("SCORE :",650,10);
  text(score,750,10);
  text("LIFE  :",10,10);
  text(life,40,10);
}

function local(){
  for(var i=0;i<e.length;i++){
    if(e[i].get_x()<0){
      life--;
      e.splice(i,1);
      enemy--;
    }
  }
}

function generate (){
  if(enemy<num_enemy){
    var en = new ENEMY(random(800,1200),random(50,360),15,3);
    e.push(en);
    enemy++;
  }
}

function Remove_Enemy (){
 for(var j=0;j<e.length;j++)
 {
   for(var i=0;i<a.length;i++){
     if((dist(a[i].get_x(),a[i].get_y(),e[j].get_x(),e[j].get_y()))<=15){
       e.splice(j,1);
       a.splice(i,1);
       score++;
       enemy--;
     }
   }
 }
}

function keyPressed(){
   if(key === ' '){
    var am = new AMMO (40,(s.get_y())+20,5);
    a.push(am);
  }
}
