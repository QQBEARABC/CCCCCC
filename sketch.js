function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke(255)//框限為白色
var w=mouseX/10
for(var j=0;j<height/50;j++)
{
  for(var i=0;i<width/50;i++)
  {
 ellipse(25+50*i,25+50*j,w)
 stroke("#cdb4db")
 rect(25+50*i,25+50*j,mouseY/4)
 stroke("#ffc8dd")
 ellipse(50+50*i,50+50*j,25)//右下角的小圓/ 
 stroke("#bde0fe")
 ellipse(30+50*i,30+50*j,25)
 ellipse(30+50*i,30+50*j,25)
 }
}



}