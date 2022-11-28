let angleDeg = 0
let x, y
let dia = 0
let radDist = 0

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.id("p5-canvas");
  background(153, 204, 255);
  frameRate(10);
}



function draw() {
  //background(220);

  // noStroke()
  // fill(153, 204, 255)
  // rect(30,30,windowHeight-60, windowWidth-60)



  angleDeg = angleDeg + 20

  // x=0
  let angleRad = radians(angleDeg + 1)
  let cosVal = cos(angleRad) * radDist
  let sinVal = sin(angleRad) * radDist

  let r = map(mouseX, windowWidth, windowHeight, 255, 0)
  let g = map(mouseX, windowWidth, windowHeight, 255, 255)
  let b = map(mouseX, windowWidth, windowHeight, 0, 255)

  //r,g=constrain(0,255)

  //let freq=x+1
  dia = dia + 0.5
  console.log(radDist)

  x = windowWidth / 2 + cosVal
  y = windowHeight / 2 + sinVal

  noStroke()
  fill(r, g, b)
  circle(x, y, 10)




  radDist = radDist + 1;


}









