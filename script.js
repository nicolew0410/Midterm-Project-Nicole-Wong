function planet(x,y){
  noStroke()
  fill(199, 82, 144)
  ellipse(x,y,500,500);
  fill(73, 80, 173,6)
  for(i = 0; i < 100; i++){
    ellipse(x,y, i*6)
  }
}

function asteroid(x,y){
  stroke(152, 86, 204)// Purple comet (speed)
  strokeWeight(5)
  line(80, 75, 260, 185)
  line(80, 75, 197, 207)
  noFill()
  arc(248, 219, 70, 70, radians(160), radians(290))
  for(i = 0; i < 5; i++){
    stroke(247, 196, 67) 
    circle(256, 225, 50) // try to make this yellow later
  }
  stroke(232, 77, 123)
  line(100, 75, 120, 87)
  stroke(230, 83, 168)
  line(136, 95, 177, 120)
  stroke(221, 107, 227)
  line(189, 127, 260, 170)
}

class stars{
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, width)
    this.y = random(0, height)
    this.size = random(2, 10)
    this.xSpeed = random(-1, 2)
    this.ySpeed = random(-1, 1)
  }
  createStar() {
    noStroke()
    push()
    translate(this.x, this.y)
      fill(255, 255, 255, 40)
      ellipse(this.x,this.y, 10, 45)
      ellipse(this.x,this.y, 45, 10)
      fill(255)
      ellipse(this.x,this.y, 2, 45)
      ellipse(this.x,this.y, 45, 2)
    pop()
  }
  moveStar() {
    if (this.x < 10 || this.x > 800)
      this.xSpeed *= -1
    if (this.y < 10 || this.y > 600)
      this.ySpeed *= -1
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}

//object
class constellation {
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, width)
    this.y = random(0, height)
    this.size = random(2, 10)
    this.xSpeed = random(-1, 2)
    this.ySpeed = random(-1, 1)
  }
  // create points where axis for lines meet
  createPoint() {
    noStroke()
    fill('#fff6cf')
    push()
    translate(this.x, this.y)
    point()
    pop()
  }
  // move points in how they move 
  movePoint() {
    if (this.x < 10 || this.x > width)
      this.xSpeed *= -1
    if (this.y < 10 || this.y > height)
      this.ySpeed *= -1
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
  // creates lines for constellations
  joinConstellationsALL() {
    constellationsALL.forEach(element => {
      let distance = dist(this.x, this.y, element.x, element.y)
      if (distance < 85) {
        stroke('rgba(241, 199, 255, 0.2)')
        line(this.x, this.y, element.x, element.y)
      }
    })
  }
}
// pattern from sketch 2
function purpleCursor(x, y) {
  stroke(242, 240, 255)
  strokeWeight(8)
  fill(73, 59, 161)
  ellipse(x, y, 150, 150)
  strokeWeight(2)
  fill(103, 90, 184)
  ellipse(x, y, 90, 130)
  ellipse(x, y, 130, 90)
  fill(134, 123, 199)
  ellipse(x, y, 50, 110)
  ellipse(x, y, 110, 50)
  fill(173, 165, 217)
  ellipse(x, y, 20, 90)
  ellipse(x, y, 90, 20)
}
// transparent sparkle effect
function tsparkle(x,y){ 
  fill(255, 255, 255, 40)
  ellipse(x,y, 10, 45)
  ellipse(x,y, 45, 10)
  fill(255)
  ellipse(x,y, 2, 45)
  ellipse(x,y, 45, 2)
}


//empty array to hold all additional particles pushed up 
let constellationsALL = []
let starsALL = []
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < width / 10; i++) {
    constellationsALL.push(new (constellation))
  }
  for (let i = 0; i < 30; i++) {
    starsALL.push(new (stars))
  }
}
let angle = 0
let scales = 0
function draw() {
  print(frameCount)

  if (frameCount < 1000){
    background("#262959")
    for (let i = 0; i < 30; i++) {
      starsALL[i].createStar()
      starsALL[i].moveStar()
    }
    drawingContext.shadowBlur = 40
    drawingContext.shadowColor = '#ff52ad'
    noStroke();
    fill("#9c366d")
    beginShape() // Terrain
      vertex(0,600)
      vertex(0,900)
      vertex(2000,900)
      vertex(2000,600)
      vertex(10,600)
      vertex(118, 560)
      vertex(110, 580)
      vertex(130, 600)
      vertex(160, 600)
      vertex(213, 575)
      vertex(250, 600)
      vertex(236, 600)
      vertex(265, 585)
      vertex(316, 600)
      vertex(390, 600)
      vertex(440, 590)
      vertex(510, 600)
      vertex(600, 600)
      vertex(674, 570)
      vertex(730, 587)
      vertex(820, 600)
      vertex(900,600)
      vertex(1018, 540)
      vertex(1010, 560)
      vertex(1007, 580)
      vertex(1030, 600)
      vertex(1160, 600)
      vertex(1020, 600)
      vertex(1026, 580)
      vertex(1060, 570)
      vertex(1200, 600)
      vertex(1262, 600)
      vertex(1313, 550)
      vertex(1353, 540)
      vertex(1383, 570)
      vertex(1500, 600)
    endShape()
    planet(windowWidth/2, windowHeight/2 - 120)
    asteroid();


  }
    // shooting star maybe? tried but too hard.

  if (frameCount > 1000 && frameCount < 1800){
    background('#1d204d')
    for(let i=0; i < width; i=i+10) {
      for(let j = 0; j < height; j=j+10){
        stroke(180,160,400)
        point(i,j)
      } 
    };
    
    angle = angle + 0.1
    scales = scales + 0.1
      push()
      translate(130,130)
      rotate(angle)
      scale(scales)
      if (scales > 1.3){
        scales = scales + 0.1
      }
      if (scales >= 1.3){
        scales = scales - 0.205
      }
      if (frameCount > 1030 && frameCount < 1800){
        purpleCursor(1,1)
      }
      pop()
    
    // Blur effect
    drawingContext.shadowBlur = 20
    drawingContext.shadowColor = '#f3cdf7'
    if (frameCount > 1300 && frameCount < 1600){
     // Space crack that randomizes from diff colors of the array
      let colors = ["#e895cf", "#bb8ed4", "#596ac2", "#38142d", "#ebc7b7"]
      function spaceCrack(x,y){
        for (let i=0; i < windowWidth || i < windowHeight; i++) {
          let randomLeng = random(-100, 100)
          let colorRandom = colors[Math.floor(Math.random()*colors.length)]
          stroke(colorRandom)
          strokeWeight(2.5)
          line(x, i, x + randomLeng, i)
        }
      }
      spaceCrack(windowWidth/2,windowHeight)
    }
    strokeWeight(1)
    for (let i = 0; i < constellationsALL.length; i++) {
      constellationsALL[i].createPoint()
      constellationsALL[i].movePoint()
      constellationsALL[i].joinConstellationsALL(constellationsALL.slice(i))
    }
     // Set sparkles

    tsparkle(windowWidth - 200, windowHeight -300)
    tsparkle(windowWidth - 1000, windowHeight -750)
    tsparkle(windowWidth - 1350, windowHeight -100)
  }
}

/*
  trying to figure out the random sparkle appearance without it being sporadic
    for (let i = 0; i < 5; i = i+1){
    let randomPosW = random(0, windowWidth);
    let randomPosH = random(0, windowHeight);
    tsparkle(randomPosW, randomPosH);
  }
*/