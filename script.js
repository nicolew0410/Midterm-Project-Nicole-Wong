let r
let milkyWay = []
let planetSpiral = []

function rocket(){
  fill("#912a42")
  triangle(240, 449, 370, 701, 240, 663);
  triangle(145, 449, 35, 701, 145, 663);
  fill("#9c4156")
  rect(145,212, 100, 450)
  ellipse(195, 310, 55,400)
  fill("#782336")
  ellipse(195, 260, 33,200)
}
function astronaut(x,y){
  fill("#ccd7e3")
  stroke("#ccd7e3")
  strokeWeight(3)
  line(windowWidth/2+10, windowHeight/2-30, windowWidth/2+30, windowHeight/2-70)
  line(windowWidth/2+30, windowHeight/2-70, windowWidth/2+60, windowHeight/2-80)
  rect(windowWidth/2-65, windowHeight/2, 130, 220)
  rect(windowWidth/2-50, windowHeight/2+20, 100, 180)
  rect(windowWidth/2-35, windowHeight/2+30, 15, 150)
  circle(windowWidth/2+60, windowHeight/2-80, 20)
  circle(windowWidth/2, windowHeight/2, 100) //head
  let randomCounter1 = random(30, 40);
  let randomCounter2 = random(5, 20);
  circle(windowWidth/2+15, windowHeight/2+90, randomCounter1)
  circle(windowWidth/2+15, windowHeight/2+90, randomCounter2)
  circle(windowWidth/2+15, windowHeight/2+140, randomCounter2)
}

function planet(x,y){
  noStroke()
  fill(199, 82, 144)
  ellipse(x,y,300+r,300+r);
  fill(73, 80, 173,6)
  for(i = 0; i < 100; i++){
    ellipse(x,y, i*6)
  }
  r = r+2;
  if(r>400){
   r = 0;
  }
}
function planet2(x,y){
  noStroke()
  fill(199, 82, 144)
  ellipse(x,y,480, 480);
  fill(73, 80, 173,6)
  for(i = 0; i < 100; i++){
    ellipse(x,y, i*6)
  }
}

let xPos = 50;
let yPos = 50;
function asteroid(x,y, xPos, yPos){
  stroke(152, 86, 204)// Purple comet (speed)
  strokeWeight(5)
  line(x, y, x+180, y+110)
  line(x, y, x+117, y+132)
  noFill()
  arc(x+168, y+144, 70, 70, radians(160), radians(290))
  for(i = 0; i < 5; i++){
    stroke(247, 196, 67) 
    circle(x+176, y+150, 50) // try to make this yellow later
  }
  stroke(232, 77, 123)
  line(x+20, y, x+40, y+12)
  stroke(230, 83, 168)
  line(x+56, y+25, x+97, y+45)
  stroke(221, 107, 227)
  line(x+109, y+54, x+180, y+95)
}

class stars{
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, width)
    this.y = random(0, height)
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
class twinkle{
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, width)
    this.y = random(0, height)
    this.xSpeed = random(-1, 2)
    this.ySpeed = random(-1, 1)
  }
  createTwinkle() {
    noStroke()
    push()
    translate(this.x, this.y)
      fill(255);
      circle(this.x, this.y, 3)
    pop()
  }
  moveTwinkle() {
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
let twinkleALL = []
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < width / 10; i++) {
    constellationsALL.push(new (constellation))
  }
  for (let i = 0; i < 40; i++) {
    starsALL.push(new (stars))
    twinkleALL.push(new(twinkle))
  }
  for (let i = 0; i < 250; i++) {
    twinkleALL.push(new(twinkle))
  }

  for(var i=0;i<100;i+=2){
    for(var o=0;o<100;o+=2){ 
      let milky=milkyWay.push({
        x: i+250,
        y: o+250
      })
    }
  }
  for(var i=0;i<100;i+=2){
    for(var o=0;o<100;o+=2){ 
      let planet3=planetSpiral.push({
        x: i,
        y: o
      })
    }
  }

}
let angle = 0
let scales = 0
function draw() {
  print(frameCount)

  if (frameCount < 700){
    background("#262959")
    for (let i = 0; i < 40; i++) {
      starsALL[i].createStar()
      starsALL[i].moveStar()
    }
    for (let i = 0; i < 250; i++) {
      twinkleALL[i].createTwinkle()
      twinkleALL[i].moveTwinkle()
    }
    drawingContext.shadowBlur = 40
    drawingContext.shadowColor = '#ff52ad'
    noStroke();
    planet(windowWidth/2, windowHeight/2 - 150)
    planet2(windowWidth/2, windowHeight/2 - 150)
    if (frameCount > 100 && frameCount < 400){
      asteroid(xPos, yPos)
      xPos+=6;
      yPos+=2.5;
    }
    noStroke()
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

    noStroke()
    beginShape()
    fill("#852859")
    vertex(1450, 610)
    vertex(1221, 673)
    vertex(1183, 700)
    vertex(1343, 723)
    vertex(1048, 743)
    vertex(1000, 759)
    vertex(943, 789)
    vertex(849, 830)
    vertex(1450, 830)
    vertex(1450, 610)
    endShape()
    beginShape()
    vertex(0, 631)
    vertex(207, 620)
    vertex(256, 645)
    vertex(306, 635)
    vertex(254, 686)
    vertex(144, 659)
    vertex(360, 720)
    vertex(394, 748)
    vertex(432, 753)
    vertex(510, 781)
    vertex(589, 830)
    vertex(0, 830)
    vertex(0, 631)
    endShape()

    if (frameCount > 450 && frameCount < 700){
      rocket()
    if (frameCount > 250 && frameCount < 400){
      push()
      fill(255);
      for(let i=0;i<milkyWay.length;i++){
        rotate(frameCount*2)
        let milky=milkyWay[i]
        ellipse(milky.x,milky.y,2-i/300)
      }  
      pop()
    }

    if (frameCount > 380 && frameCount < 700){
      push()
      translate(windowWidth/2, windowHeight/2-150)
      for (let i = 0; i < TWO_PI; i+=0.001){
        let r = 200 * cos(100*i)
        let x = r * cos(i)
        let y = r *sin(i)
        stroke("#623D74")
        strokeWeight(2.5)
        point(x,y)
      }
      pop()
    }
    if (frameCount > 400 && frameCount < 600){
      push()
      translate(windowWidth/2+500, windowHeight/2-250)
      stroke("#171b4d")
      strokeWeight(1.5)
      for(let i=0;i<planetSpiral.length;i++){
        rotate(frameCount*2)
        let planet3=planetSpiral[i]
        ellipse(planet3.x,planet3.y,2-i/300)
      }  
      pop()
    }
    push()
    astronaut()
    pop()
 }


  if (frameCount > 700 && frameCount < 1500){
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
      if (frameCount > 720 && frameCount < 1500){
        purpleCursor(1,1)
      }
      pop()
    
    // Blur effect
    drawingContext.shadowBlur = 20
    drawingContext.shadowColor = '#f3cdf7'
    if (frameCount > 900 && frameCount < 1300){
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