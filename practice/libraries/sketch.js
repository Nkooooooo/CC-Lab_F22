
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.id("p5-canvas");
  background(153, 204, 255);
  frameRate(10);
}
let newX;
let newY;
let x, y;
let dia
let xSpd, ySpd;
let angle = 1;
let freq = 1;
let deg;
let degInc = 0.01;
let status = false;
let status4 = false;
let status5 = false;
let status3 = false;
let status6 = false;
let status7 = false;
let status2 = false;
// let status8=false

// let clear
let hero1;
let hero2;
let hero3;
let hero4;
let hero5;
let hero6;
let hero7;
let heros = [];
let NUM_OF_PARTICLES = 300;
let particles = [];

function setup() {
  createCanvas(700, 700);
  x = 100;
  y = 100;



  hero1 = new NominsHero(width / 2, height / 2, "Squidgame");
  hero2 = new NominsHero(width / 2, height / 2, "Hulk");
  hero3 = new NominsHero(width / 2, height / 2, "Amongus");
  hero4 = new NominsHero(width / 2, height / 2, "Panda");
  hero5 = new NominsHero(width / 2, height / 2, "Shape");
  hero6 = new NominsHero(width / 2, height / 2, "Hellokitty");
  hero7 = new NominsHero(width / 2, height / 2, "Angrybird");

  strokeWeight(2);
}
function draw() {
  background(0);
  push()
  //fill(255)
  fill(220)
  rect(28, 25, 650, 650)


  push();
  noStroke();
  fill(255);

  textFont('Font Style Bold')
  textSize(20)
  text("PANASONIC", width / 2 - 45, 693)

  text("Press 1-7 to choose the channels.", 20, 20)


  // fill(value)
  // generate

  function keyPressed() {
    if (key == " ")
      clear()
  }

  if (mouseIsPressed) {
    particles.push(new Particle(random(width), random(height)));
  }

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    //p.move();
    p.display();
    p.checkCollision(hero1)
    p.checkCollision(hero2)
    p.checkCollision(hero3)



  }


  //   if(keyPressed){
  //    if (keyCode==CONTROL){

  //     push()
  //      fill(0)
  //      pop()
  //  console.log("keyPressed")

  //    }


  while (particles.length > NUM_OF_PARTICLES) {
    particles.splice(0, 1);
  }
  pop();
  pop()


  if (status2 == true) {
    hero2.bounce();
    hero2.display();
  }

  if (status5 == true) {
    hero5.bounce();
    hero5.display();
    hero5.adjustScale(0.01)
  }
  if (status6 == true) {
    hero6.rotate();
    hero6.bounce();
    hero6.display();
  }
  if (status7 == true) {
    hero7.bounce();
    hero7.display();
  }
  if (status == true) {
    hero1.bounce();
    hero1.display();
  }
  if (status4 == true) {
    hero4.bounce();
    hero4.display();
  }
  if (status3 == true) {
    hero3.enlarge()
    hero3.bounce();

    hero3.display();
  }



  // function mousePressed(){
  //   particles.push(new Particle(random(width), random(height)));
  // }


}
function keyPressed() {
  //  if (key==" "){
  //   clear()
  // }
  if (key == "1") {
    status2 = true;
  }
  if (key == "2") {
    status4 = true;
  }
  if (key == "3") {
    status5 = true;
  }
  if (key == "4") {
    status6 = true;
  }
  if (key == "5") {
    status7 = true;
  }
  if (key == "6") {
    status = true;
  }
  if (key == "7") {
    status3 = true;
  }


  //     if (key=="A" || key=="a"){
  //     push()
  //        fill(0)
  //       rect(0,0,700,700) 

  //       pop()


}

function drawHulk(x, y) {

  push();
  translate(x, y); //170,350

  push();
  //BODY
  fill(39, 161, 71);
  beginShape();
  vertex(129, 172);
  vertex(129, 268);
  vertex(271, 268);
  vertex(271, 172);
  endShape(CLOSE);

  //LEFT EAR
  arc(288, 110, 80, 60, (3 / 2) * PI, PI / 2);
  //right ear
  arc(108, 110, 80, 60, (-3 / 2) * PI, PI / -2);

  //LEG
  beginShape();
  vertex(129, 268);
  vertex(96, 368);
  vertex(154, 368);
  vertex(200, 300);
  vertex(242, 368);
  vertex(305, 368);
  vertex(271, 268);
  endShape();
  line(115, 315, 189, 315);
  line(210, 315, 288, 315);
  pop();

  //LEFTarm
  push();
  fill(39, 161, 71);
  translate(130, 171);

  beginShape();
  vertex(-1, 1);
  vertex(-59, 50);
  vertex(-36, 67);
  vertex(-1, 35);
  endShape(CLOSE);
  ellipse(-46, 56, 45, 47);
  line(-67, 62, -51, 49);
  line(-59, 75, -42, 61);
  pop();

  //RIGHTARM
  push();
  fill(39, 161, 71);
  translate(271, 171);


  beginShape();
  vertex(0, 0);
  vertex(57, 50); //228,121
  vertex(34, 77);
  vertex(0, 35);
  endShape(CLOSE);
  ellipse(39, 56, 45, 47);
  line(50, 76, 32, 59);
  line(60, 66, 42, 51);
  pop();

  //HEAD
  push();
  fill(39, 161, 71);
  ellipse(200, 110, 200, 170);
  //fill()
  line(114, 69, 287, 69);

  //left eye
  fill(0);
  circle(154, 110, 30);
  //small eye
  fill(255);
  circle(157, 107, 7);
  //right eye
  fill(0);
  circle(240, 110, 30);
  //small eye
  fill(255);
  circle(240, 107, 7);
  pop();

  //mouth
  push();
  //if
  rect(164, 138, 70, 36);
  line(164, 156, 234, 156);

  line(199, 143, 199, 168);

  line(181.5, 143, 181.5, 168);

  line(216.5, 143, 216.5, 168);

  pop();

  console.log("angle")
  //LEFTeyebrow
  push();
  fill(0);
  beginShape();
  vertex(171, 100);
  vertex(172, 97);
  vertex(145, 87);
  vertex(135, 90);
  endShape(CLOSE);

  //RIGTHEYEBROW

  beginShape();
  vertex(222, 100);
  vertex(221, 97);
  vertex(248, 87);
  vertex(258, 90);
  endShape(CLOSE);

  //muscles

  line(136, 201, 150, 225);
  line(150, 225, 191, 225);
  line(210, 225, 251, 225);
  line(251, 225, 265, 201);
  line(200.5, 215, 200.5, 225);

  //second muscle
  line(136, 235, 150, 260);
  line(150, 260, 191, 260);
  line(210, 260, 251, 260);
  line(251, 260, 265, 235);
  line(200.5, 250, 200.5, 260);

  //hair
  fill(0);
  arc(200, 69, 175, 85, PI, 0);

  //short
  beginShape();
  fill(144, 66, 245);
  vertex(129, 268);
  vertex(114, 315);
  vertex(189, 315);
  vertex(201, 301);
  vertex(211, 315);
  vertex(287, 315);
  vertex(271, 268);
  endShape(CLOSE);
  pop();

  pop();
}
function drawSquidgame(x, y) {
  push();
  translate(x, y);

  //head
  fill(255, 0, 0);
  ellipse(100, 200, 100, 100);
  fill(0, 0, 0);
  ellipse(100, 200, 85, 80);
  fill(255, 255, 255);
  rect(80, 170, 40, 40);
  fill(0, 0, 0);
  rect(84, 174, 32, 31);

  //chest
  fill(255, 0, 0);
  beginShape();
  vertex(78, 245);
  vertex(123, 245);
  vertex(145, 283);
  vertex(58, 283);
  endShape(CLOSE);

  //thigh
  beginShape();
  vertex(58, 283);
  vertex(145, 283);
  vertex(123, 325);
  vertex(78, 325);
  endShape(CLOSE);

  line(101, 290, 101, 325);

  //downline
  line(61, 290, 141, 290);
  //zip
  line(97.5, 245, 97.5, 283);
  line(103.5, 245, 103.5, 283);

  //left leg
  fill(0, 0, 0);
  beginShape();
  vertex(78, 325);
  vertex(100.5, 325);
  vertex(100.5, 345);
  vertex(87, 345);
  endShape(CLOSE);

  //left footsole
  beginShape();
  vertex(70, 335);
  vertex(86, 335);
  vertex(88, 345);
  vertex(72, 345);
  endShape(CLOSE);

  //right legs

  beginShape();
  vertex(100.5, 325);
  vertex(123, 325);
  vertex(114, 345);
  vertex(100.5, 345);
  endShape(CLOSE);

  //right footsole

  beginShape();
  vertex(110, 335);
  vertex(131, 335);
  vertex(129, 345);
  vertex(110, 345);
  endShape(CLOSE);

  //RIGHTarm

  beginShape();
  vertex(123, 245);
  vertex(152, 260);
  vertex(152, 268);
  vertex(123, 253);
  endShape(CLOSE);

  //UPPERHAND

  push();
  translate(145, 265);
  rotate(frameCount * 0.1); // ***

  // rotate(PI/7)

  fill(0, 0, 0);
  rect(0, 0, 25, 7, 5);

  push();
  translate(159, -260);
  rotate(PI / 3);
  fill(0, 0, 0);
  ellipse(157, 244, 12, 4);
  arc(160, 248, 8, 27, PI, 0);
  pop();

  pop();

  //leftarm
  fill(0, 0, 0);
  beginShape();
  vertex(78, 245);
  vertex(78, 253);
  vertex(55, 268);
  vertex(55, 260);
  endShape(CLOSE);

  //LEFT UPPER HAND
  beginShape();
  vertex(54, 261);
  vertex(63, 272);
  vertex(60, 277);
  vertex(51, 265);
  endShape(CLOSE);

  pop();
}
function drawAmongus(x, y) {

  push();
  translate(x, y)
  // translate(x, y);

  push();
  beginShape();
  fill(255, 255, 0);
  vertex(130, 60);
  vertex(200, 60);
  vertex(200, 150);
  vertex(130, 150);
  endShape(CLOSE);
  pop();

  //left leg
  push();
  beginShape();
  fill(255, 255, 0);
  vertex(140, 150);
  vertex(160, 150);
  vertex(160, 165);
  vertex(140, 165);
  endShape(CLOSE);
  pop();

  //right leg
  push();
  beginShape();
  fill(255, 255, 0);
  vertex(170, 150);
  vertex(190, 150);
  vertex(190, 165);
  vertex(170, 165);
  endShape(CLOSE);
  pop();

  //eyes
  push();
  fill(255, 255, 255);
  ellipse(180, 90, 60, 35);
  fill(255, 255, 0);
  arc(124, 105, 30, 60, 0, PI);
  arc(124, 105, 30, 60, PI, 0);
  pop();

  pop();
}
function drawPanda(x, y) {

  push();
  translate(0, 8);
  fill(0);
  push();
  translate(-46, 45);
  rotate(PI / 5);
  //righthand

  ellipse(0, 0, 80, 30);
  //lefthand
  pop();
  push();
  translate(43, 46);
  rotate(PI / 4 + 30);
  ellipse(0, 0, 80, 30);
  pop();
  fill(255);
  //stomach
  ellipse(0, 70, 110, 100);
  fill(0);
  //ears
  ellipse(-30, -40, 50, 50);
  ellipse(30, -40, 50, 50);
  fill(255);
  //head
  ellipse(0, 0, 120, 100);



  //foot
  ellipse(-35, 110, 40, 40);
  ellipse(35, 110, 40, 40);
  fill(0);
  //black one
  ellipse(-33, 113, 33, 33);
  ellipse(33, 113, 33, 33);
  fill(0);

  // mouth

  curve(-21, 22, -10, 34, 6, 35, 15, 65);
  //eyes

  ellipse(-20, -15, 30, 30);
  ellipse(20, -15, 30, 30);
  fill(0);
  //black one

  ellipse(-18, -17, 23, 23);
  ellipse(18, -17, 23, 23);
  //white one
  fill(255);
  ellipse(-14, -20, 8, 8);
  ellipse(14, -20, 8, 8);

  //nose()
  push()
  fill(0)
  translate(0, 7)
  rotate(frameCount * 0.1)
  ellipse(0, 0, 20, 10);
  pop();

}
function drawShape(x, y) {

  push();
  translate(-100, -78);  //-100, -78
  //body
  rotate(frameCount * 0.1)
  ellipse(100, 100, 48, 160);
  //eyes
  ellipse(90, 53, 15, 15);
  ellipse(108, 53, 15, 15);
  //black one
  fill(0);
  ellipse(90, 50, 8, 8);
  ellipse(108, 50, 8, 8);
  //mouth
  arc(100, 73, 20, 30, 0, PI);
  //
  fill(random(255), random(255), random(255));
  ellipse(100, 139, 40, 80);
  fill(random(255), random(185), random(185));
  triangle(85, 160, 100, 130, 116, 160);
  // console.log(mouseX, mouseY);
  pop();
}
function drawHellokitty(x, y) {

  push();
  translate(-100, -100);
  //ears


  triangle(42, 77, 30, 35, 70, 53);
  triangle(136, 53, 170, 35, 160, 82);

  //hand
  push();
  translate(61, 145);
  rotate(PI / 1.2)
  rotate(frameCount * 0.1);
  rect(-10, -20, 60, 25);
  pop();
  //lefthand
  push();
  translate(140, 144);
  rotate(PI / -1.2);
  rotate(frameCount * -0.1);
  rect(-50, -20, 60, 25);
  pop();

  //body
  fill(245, 59, 177);
  rect(60, 140, 80, 90);
  //legs
  fill(255);
  ellipse(80, 230, 40, 40);
  ellipse(120, 230, 40, 40);

  //chest
  fill(255);
  rect(75, 137, 50, 40);
  //head
  fill(255);
  ellipse(100, 100, 130, 110);
  //eyes
  fill(0);
  ellipse(72, 88, 17, 20);
  ellipse(130, 88, 17, 20);

  //nose

  fill(245, 59, 177);
  ellipse(100, 106, 22, 15);

  //beard

  line(16, 105, 50, 111);
  line(20, 120, 50, 120);
  line(16, 138, 52, 131);
  //leftbeard
  line(148, 111, 189, 100);
  line(152, 120, 184, 120);
  line(145, 131, 182, 138);


  pop();
}
function drawAngrybird(x, y, moving) {
  push();
  translate(x, y)
  fill(255, 0, 0);
  arc(50, 55, 17, 50, 0, PI);
  arc(50, 55, 17, 50, PI, 0);
  ellipse(100, 26, 35, 15);

  //body
  fill(255, 0, 0);
  ellipse(80, 80, 100, 100);

  //lefteyebrow
  fill(0, 0, 0);
  beginShape();
  vertex(34, 59);
  vertex(70, 72);
  vertex(70, 80);
  vertex(29, 72);
  endShape(CLOSE);
  //console.log(x+""+y)
  //righteyebrow
  beginShape();
  vertex(70, 72);
  vertex(106, 59);
  vertex(109, 72);
  vertex(70, 80);
  endShape(CLOSE);

  //eye
  fill(255, 255, 255);
  ellipse(58, 84, 24, 24);
  ellipse(82, 84, 26, 26);
  //black one
  fill(0, 0, 0);
  ellipse(62, 85, 8, 8);
  ellipse(77, 85, 8, 8);

  //mouth
  fill(255, 255, 0);
  beginShape();
  vertex(39, 110 + moving);
  vertex(86, 108);
  vertex(69, 90 + moving);
  endShape(CLOSE);

  //DOWN MOUTH
  beginShape();
  vertex(46, 110);
  vertex(58, 122);
  vertex(86, 108);
  endShape(CLOSE);

  //tail
  fill(0, 0, 0);
  beginShape();
  vertex(130, 75);
  vertex(138, 62);
  vertex(145, 70);
  vertex(129, 86);
  endShape(CLOSE);

  //second tail
  beginShape();
  vertex(130, 82);
  vertex(157, 75);
  vertex(158, 88);
  vertex(129, 88);
  endShape(CLOSE);

  //third tail
  beginShape();
  vertex(129, 87);
  vertex(145, 95);
  vertex(138, 105);
  vertex(129, 96);
  endShape(CLOSE);
  pop();
}

class NominsHero {
  constructor(x, y, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.rad = 50;
    this.dia = 10;
    this.scl = random(0.5, 1.0);
    this.rotAngle = random(TWO_PI); // radians
    this.rotSpd = random(0.1, 0.2);
    // this.r = 255;
    // this.g = 255;
    // this.b = 255;
    // this.rad = rad;

  }
  adjustScale(value) {
    this.scl += value;
    this.scl = constrain(this.scl, 0.10, 2.00); // limit the
  }
  bounce() {
    let margin = 50;
    if (this.x < 0 + margin) {
      this.x = 0 + margin;
      this.xSpd = this.xSpd * -1;
    } else if (this.x > width - margin) {
      this.x = width - margin;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0 + margin) {
      this.y = 0 + margin;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height - margin) {
      this.y = height - margin;
      this.ySpd = this.ySpd * -1;
    }
    //move
    this.x += this.xSpd;
    this.y += this.ySpd;

  }
  reappear() {
    if (this.x > 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 10;
    }
    if (this.y > 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 10;
    }
  }
  enlarge() {
    this.scl += 0.01;
    scale(this.scl);
  }
  rotate() {
    this.rotAngle += this.rotSpd;
  }
  shrink() {
    //push();
    this.scl -= 0.009;
    scale(this.scl);
    //pop();
  }

  display() {
    push();

    translate(this.x, this.y);

    if (this.name == "Hulk") {
      push();
      drawHulk(-200, -120);
      pop();
    } if (this.name == "Amongus") {
      push()
      drawAmongus(-160, -100);
      pop()
    } if (this.name == "Squidgame") {
      push()
      drawSquidgame(-100, -200);
      pop()

    } if (this.name == "Panda") {
      push()
      drawPanda(0, 0);
      pop()
    } if (this.name == "Shape") {
      push()
      drawShape(0, 0);
      pop()
    } if (this.name == "Hellokitty") {
      push()
      drawHellokitty(0, 0);
      pop()
    } if (this.name == "Angrybird") {
      push()
      let mouthY = map(this.x, 300, 600, -10, 0)
      drawAngrybird(-80, -80, mouthY);
      pop()
    }

    pop();
  }
  drawGuideline() {
    noFill();
    stroke(255);
    circle(0, 0, this.rad * 2);
    stroke(0, 255, 0);
    circle(0, 0, 5);
  }
}

class Particle {
  constructor(x, y, dia) {

    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 0.5);
    this.ySpd = random(-0.5, 0.5);
    this.dia = random(5, 10);
    //this.dia=dia1

    this.r = 255
    this.g = 255
    this.b = 255


  }
  // methods
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkCollision(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance < this.rad + other.rad) {
      // collided

      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    } else {
      // normal
      this.r = random(0);
      this.g = random(0);
      this.b = random(20);
      console.log("distance")
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);

    pop();
  }


  // function keyPressed(){
  //   if (key==""){
  //     clear()
  //   
}
// if (keyPressed == "8"){
//  rect(0,0, newX, newY) 
// }








