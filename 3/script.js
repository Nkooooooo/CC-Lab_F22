
console.log("Test")
function buttonClicked() {
    // alert("Clicked")
    background(random(255), random(255), random(255))

    radDist = 0;
    console.log(x);
}

let angleDeg = 0;
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

// function mouseIsPressed() {
//     x = windowWidth / 2;
//     y = windowHeight / 2;
// }
function draw() {

    angleDeg = angleDeg + 20;


    let angleRad = radians(angleDeg + 2);
    let cosVal = cos(angleRad) * radDist;
    let sinVal = sin(angleRad) * radDist;

    let modulo = frameCount % 80;

    let r = 252;
    let g = map(modulo, 0, 80, 98, 252);
    let b = 3;


    dia = dia + 0.5;
    //console.log(radDist);

    x = windowWidth / 2 + cosVal;
    y = windowHeight / 2 + sinVal;

    // if mouseIsPressed(){
    //     x = windowWidth / 2;
    //     y = windowHeight / 2;
    // }
    circle(x, y, modulo);
    noStroke();
    fill(r, g, b);


    radDist = radDist + 1;
}
