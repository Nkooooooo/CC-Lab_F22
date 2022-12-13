let x = 0;
let y = 0;
let ballPos = 0; // % lerp
let ballSpd = 0.02;

let points = [];
let angle = 0;


function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent("canvasContainer");



  points.push(new NominPoint(15, 405));
  points.push(new NominPoint(15, 405));
  points.push(new NominPoint(83, 405));
  points.push(new NominPoint(89, 333));
  points.push(new NominPoint(88, 289));
  points.push(new NominPoint(88, 251));
  points.push(new NominPoint(88, 213));
  points.push(new NominPoint(88, 173));
  points.push(new NominPoint(88, 126));
  points.push(new NominPoint(88, 86));
  points.push(new NominPoint(98, 45));
  points.push(new NominPoint(146, 43));
  points.push(new NominPoint(160, 145));
  // points.push(new NominPoint(163, 202));
  points.push(new NominPoint(170, 277));
  // points.push(new NominPoint(209, 309));
  points.push(new NominPoint(300, 326));
  points.push(new NominPoint(400, 277));
  points.push(new NominPoint(420, 160));
  points.push(new NominPoint(340, 130));
  points.push(new NominPoint(280, 160));
  // points.push(new NominPoint(272, 200));
  points.push(new NominPoint(279, 245));
  // points.push(new NominPoint(301, 279));
  // points.push(new NominPoint(310, 289));
  // points.push(new NominPoint(325, 300));
  points.push(new NominPoint(344, 313));
  points.push(new NominPoint(376, 331));
  points.push(new NominPoint(396, 322));
  points.push(new NominPoint(404, 351));
  points.push(new NominPoint(424, 344));
  points.push(new NominPoint(439, 375));
  points.push(new NominPoint(455, 361));
  points.push(new NominPoint(469, 393));
  points.push(new NominPoint(484, 379));
  points.push(new NominPoint(499, 413));
  points.push(new NominPoint(515, 407));
  points.push(new NominPoint(558, 428));
  points.push(new NominPoint(564, 465));
  points.push(new NominPoint(564, 466));

  points.push(new NominPoint(528, 482));
  points.push(new NominPoint(503, 462));

  points.push(new NominPoint(508, 432));
  points.push(new NominPoint(531, 412));
  points.push(new NominPoint(567, 394));
  points.push(new NominPoint(597, 379));

  points.push(new NominPoint(625, 367));
  points.push(new NominPoint(642, 384));
  points.push(new NominPoint(656, 357));
  points.push(new NominPoint(667, 364));
  points.push(new NominPoint(699, 342));

  points.push(new NominPoint(725, 315));
  points.push(new NominPoint(705, 305));
  points.push(new NominPoint(695, 294));
  points.push(new NominPoint(709, 280));
  points.push(new NominPoint(763, 307));
  points.push(new NominPoint(779, 295));
  points.push(new NominPoint(769, 280));
  points.push(new NominPoint(714, 306));
  // points.push(new NominPoint(714, 306));
  points.push(new NominPoint(760, 306));
  points.push(new NominPoint(760, 306));
}

function draw() {
  background(255, 204, 204);

  line(0, 490, 1000, 490);
  // supplementThings();
  // drawTrain()
  rollerCoaster();
  rollingBall(x, y);
  drawGround();
  drawChinaflag(100, 380);
  drawUni(250, 370);
  drawGirl(790, 230);
  drawCup(510, 520);
  drawMgl(20, 490);
  drawLines(700, 340);
  //drawRandom();

  drawPearltower(150, 498);
  drawFerriswheel(605, 160);
  drawText();
  drawLines();
  // drawLoading();
}

function rollingBall() {
  ballPos += ballSpd;

  // limit the percentage at 100% (1.0)
  //if (pct > 1.0) {
  //pct = 1.0;
  //}
  let index = floor(ballPos);
  let pct = ballPos - index; // 0 - 100%;
  // console.log(ballPos);
  if (ballPos > points.length - 2) {
    ballPos = 0;
  }
  let x = lerp(points[index].x, points[index + 1].x, pct);
  let y = lerp(points[index].y, points[index + 1].y, pct);

  // console.log(y);

  //train
  push();
  translate(x - 30, y - 10);

  strokeWeight(1.5);
  rect(15, -11, 13, 16);
  ellipse(21, -20, 24, 20);
  if (x < 145) {
    // fill(255, 102, 204)
    fill(random(255), random(102), 204);
  } else if (145 <= x && x < 425 && y < 330) {
    fill(random(255), random(255), random(102));
  } else if (y > 413) {
    fill(random(102), random(102), random(255));
  } else if (x > 568) {
    fill(random(255), random(51), random(255));
  } else {
    fill(random(153), random(102), random(51));
  }
  rect(0, 0, 45, 27);

  fill(255);
  ellipse(13, 31, 13, 13);
  ellipse(32, 31, 13, 13);

  line(28, -6, 40, 1);
  pop();

  let va = 315 - y;
  number = va;
  text(number, 20, 20);
}

function drawGround(x, y) {
  // noFill()
  rect(0, 490, 1000, 110);
}

function drawMgl(x, y) {
  //mgl flag
  push();
  translate(x, y);
  line(0, 10, 0, 170);
  fill(255, 0, 0);
  rect(0, 17, 70, 40);
  fill(0, 102, 255);
  rect(23.3, 17, 23.4, 40);
  pop();
}
function drawChinaflag(x, y) {
  push();
  translate(x, y);
  fill(255, 0, 0);
  line(20, 10, 20, 110);
  rect(20, 17, 70, 40);
  pop();
}
function drawUni(x, y) {
  // noFill()
  push();
  translate(x, y);

  fill(204, 153, 255);
  rect(0, 0, 100, 120);
  rect(100, 47, 78, 73);

  // line()

  fill(153, 0, 255);
  rect(100, 47, 78, 18);

  rect(125, 84, 30, 36);

  textSize(15);
  text("上海纽约大学", 3, 21);

  pop();
}
function drawCup(x, y) {
  push();
  translate(x, y);
  fill(172, 115, 57);
  rect(5, 10, 46, 60);

  noFill();
  beginShape();
  curveVertex(13, -18);
  curveVertex(13, -18);
  curveVertex(8, -13);
  curveVertex(13, 0);
  curveVertex(8, 3);
  curveVertex(8, 3);
  endShape();

  beginShape();
  curveVertex(28, -18);
  curveVertex(28, -18);
  curveVertex(23, -13);
  curveVertex(28, 0);
  curveVertex(23, 3);
  curveVertex(23, 3);
  endShape();

  beginShape();
  curveVertex(43, -18);
  curveVertex(43, -18);
  curveVertex(38, -13);
  curveVertex(43, 0);
  curveVertex(38, 3);
  curveVertex(38, 3);
  endShape();

  arc(51, 37, 35, 35, PI * 1.5, PI / 2);

  pop();
}
function drawGirl(x, y) {
  push();
  translate(x, y);
  fill(0);
  ellipse(17, 0, 50, 38);
  rect(-8, 0, 50, 20);
  fill(255);
  ellipse(17, 2, 35, 30);
  //dress
  fill(255, 185, 185);
  rect(2, 21, 30, 40);
  triangle(-9, 61, 2, 22, 2, 61);
  triangle(32, 61, 32, 22, 43, 61);
  //leg
  rect(6, 61, 20, 16);
  //arm
  // rotate(PI/-3)
  // rect(36,36,9,17)

  pop();
}

function rollerCoaster() {
  push();

  noFill();
  strokeWeight(10);
  stroke(255, 120, 10);

  // draw line
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    curveVertex(p.x, p.y);
  }
  endShape();
  line(724, 308, 837, 308);

  // draw the points
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    p.drag();
    p.display();
  }

  pop();

  //first flag
  rect(10, 364, 5, 126);
  triangle(15, 365, 30, 374, 15, 380);

  //last flag

  rect(840, 280, 5, 210);
  triangle(845, 282, 864, 291, 845, 297);
}
{
  // console.log("working")
}

function drawFerriswheel(x, y) {
  push();
  translate(x, y);
  angle = angle + 0.01;
  rotate(angle);

  fill(255, 153, 153);
  circle(0, 0, 250);

  fill(255);
  circle(0, 0, 230);
  line(0, 0, 0, -114);
  line(0, 0, 115, 0);
  line(0, 0, 0, 114);
  line(0, 0, -115, 0);
  line(0, 0, 0, -114);
  line(0, 0, 60, -99);
  line(0, 0, 101, -55);
  line(0, 0, 101, 55);
  line(0, 0, 60, 99);
  line(0, 0, -60, 99);
  line(0, 0, -101, 55);
  line(0, 0, -60, -99);
  line(0, 0, -101, -55);

  pop();
}

function drawLines(x, y) {
  push();
  translate(x, y);
  fill(255, 102, 102);
  triangle(140, 150, -42, 150, 3, 5);

  fill(255, 128, 170);
  triangle(-42, 150, -115, 50, -130, 150);
  pop();
  //console.log(mouseX, mouseY)
}
//
function drawCircle() {
  push();
  translate(720, 430);
  circle(0, 0, 30);
  pop();
}

function drawPearltower(x, y) {
  //150, 510
  push();
  translate(x, y);
  // strokeWeight(3)

  fill(220);
  triangle(0, 0, -3, 30, 3, 30);

  rect(-3, 35, 5, 20);

  line(0, 60, 0, 90);
  line(-3, 60, -20, 90);
  line(3, 60, 20, 90);
  fill(204, 0, 204);
  ellipse(0, 30, 15, 15);
  ellipse(0, 60, 20, 20);
  // line(-6,60, -10,90)

  pop();
  //console.log(mouseX,mouseY)
}

function drawText() {
  push();
  fill(0);
  translate(225, 520);
  textSize(30);
  text("📍CLASS OF 2026", 5, 37);
  stroke(153, 51, 255);
  noFill();
  rect(-10, 0, 280, 60);
  pop();
}

function drawLines() {
  push();
  stroke(255, 0, 102);
  console.log(mouseX, mouseY);
  line(630, 590, 808, 510);
  line(793, 500, 808, 510);
  line(805, 526, 808, 510);
  pop();
}
// function drawLoading() {
//   push();
//   translate(700, 540);
//   angleDeg = angleDeg + 20;

//   let angleRad = radians(angleDeg + 1);
//   let cosVal = cos(angleRad) * radDist;
//   let sinVal = sin(angleRad) * radDist;

//   dia = dia + 0.5;
//   let x1 = 0 + cosVal;
//   let y1 = 0 + sinVal;

//   let modulo = frameCount % 20;
//   noStroke();
//   fill(0);
//   circle(x1, y1, modulo);
//   radDist = radDist + 1;

//   pop();
//   console.log("working");
// }
class NominPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = 10;
    // this.scl = random(0.5, 1.0);
  }
  display() {
    push();
    noStroke();
    fill(255); // green
    circle(this.x, this.y, this.dia);
    pop();
  }

  drag() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.dia) {
      if (mouseIsPressed) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
    //   }
    //   adjustScale( value ) {
    //     this.scl += value;
    //     this.scl = constrain(this.scl, 0.10, 2.00);
    //   }

    //   shrink(){

    //     this.scl -= 0.009;
    //     scale(this.scl);
    //   }
  }
}

