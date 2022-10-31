let scales = 0;
class constellation {
  constructor(x,y,size,xSpeed,ySpeed) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = random(2, 10);
    this.xSpeed = random(-1, 2);
    this.ySpeed = random(-1, 1);
  }
  // create points where axis for lines meet
  createPoint() {
    noStroke();
    fill('#fff6cf');
    push();
    translate(this.x, this.y);
    point();
    pop();
  }
  // move points 
  movePoint() {
    if (this.x < 10 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 10 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  // create lines
  joinConstellationsALL() {
    constellationsALL.forEach(element => {
      let distance = dist(this.x, this.y, element.x, element.y);
      if (distance < 85) {
        stroke('rgba(241, 199, 255, 0.2)');
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}
function purpleCursor(x, y) { // pattern from sketch 2
  stroke(242, 240, 255);
  strokeWeight(8);
  fill(73, 59, 161);
  ellipse(x, y, 150, 150);
  strokeWeight(2);
  fill(103, 90, 184);
  ellipse(x, y, 90, 130);
  ellipse(x, y, 130, 90);
  fill(134, 123, 199);
  ellipse(x, y, 50, 110);
  ellipse(x, y, 110, 50);
  fill(173, 165, 217);
  ellipse(x, y, 20, 90);
  ellipse(x, y, 90, 20);
};

//empty array to hold all additional particles pushed up 
let constellationsALL = [];

function setup() {

  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 10; i++) {
    constellationsALL.push(new (constellation));
  }
}

let angle = 0
function draw() {
  background('#1d204d');
  for(let i=0; i < width; i=i+10) {
    for(let j = 0; j < height; j=j+10){
      stroke(180,160,400);
      point(i,j);
    } 
  };
  angle = angle + 0.1;
  scales = scales + 0.1;
  push();

  translate(130,130);
  rotate(angle);
  scale(scales);
  if (scales > 1.3){
    scales = scales + 0.1;
  }
  if (scales >= 1.3){
    scales = scales - 0.205;
  }
  print(scales);
  purpleCursor(1,1);
  pop();
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#f3cdf7';

  for (let i = 0; i < constellationsALL.length; i++) {
    constellationsALL[i].createPoint();
    constellationsALL[i].movePoint();
    constellationsALL[i].joinConstellationsALL(constellationsALL.slice(i));
  }
  
}