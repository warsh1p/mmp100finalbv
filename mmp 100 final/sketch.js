var diam1=0;
var circles

function setup() {
    createCanvas(1800,900);
    background("#003366");
}


function draw() {
    background("#003366");
    stroke("black");
    strokeWeight(7);
    fill("#f000");
    rect(850,400,200,200);
    fill("#add8e6");
    stroke("white");
    strokeWeight(7);
    ellipse(950,500,diam1,diam1);
    diam1=diam1+15;
    //textFont("Georgia");
    //textStyle(ITALIC);
    //textAlign(CENTER);
    //text("Hello World!",330,100):

}

function mousePressed(){
  if(diam1>0){
      diam1=0;
  }else{
      diam1=diam1+15;
  }
}