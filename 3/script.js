
console.log("Test")
function buttonClicked() {
    // alert("Clicked")
    background(random(255), random(255), random(255))
} let angleDeg = 0;
let x, y;
let dia = 0;
let radDist = 0;
let windowWidth = 800
let windowHeight = 800

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("canvasContainer")
    background(153, 204, 255);
    frameRate(10);

}

function draw() {

    angleDeg = angleDeg + 20;


    let angleRad = radians(angleDeg + 2);
    let cosVal = cos(angleRad) * radDist;
    let sinVal = sin(angleRad) * radDist;

    // let r = map(mouseX, windowWidth, windowHeight, 0, 255);
    // let g = map(mouseX, windowWidth, windowHeight, 255, 255);
    // let b = map(mouseX, windowWidth, windowHeight, 0, 0);


    let modulo = frameCount % 80;
    console.log(modulo);

    let r = 252;
    let g = map(modulo, 0, 80, 98, 252);
    let b = 3;
    // console.log( g);


    dia = dia + 0.5;
    //console.log(radDist);

    x = windowWidth / 2 + cosVal;
    y = windowHeight / 2 + sinVal;

    noStroke();
    fill(r, g, b);
    circle(x, y, modulo);

    radDist = radDist + 1;
}
