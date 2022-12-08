function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
}

function draw() {
  //
}

function buttonClicked() {
  console.log("Button Clicked!");
  background(random(255));
}
