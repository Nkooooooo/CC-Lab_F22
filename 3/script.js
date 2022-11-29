// function setup() {
//     let angleDeg = 0;
//     let x, y;
//     let dia = 0;
//     let radDist = 0;

//     function setup() {
//         //stroke(1)
//         createCanvas(windowWidth, windowHeight);
//         background(153, 204, 255);
//         frameRate(10);
//         //  createCanvas(windowHeight-20, windowWidth-20)

//         //background(255)
//     }

//     function draw() {
//         //background(220);

//         // noStroke()
//         // fill(153, 204, 255)
//         // rect(30,30,windowHeight-60, windowWidth-60)

//         angleDeg = angleDeg + 20;

//         // x=0
//         let angleRad = radians(angleDeg + 2);
//         let cosVal = cos(angleRad) * radDist;
//         let sinVal = sin(angleRad) * radDist;

//         let r = map(mouseX, windowWidth, windowHeight, 0, 255);
//         let g = map(mouseX, windowWidth, windowHeight, 0, 255 - 1);
//         let b = 0;
//         //map(mouseY, windowWidth, windowHeight, 0,0)

//         //r,g=constrain(0,255)

//         //let freq=x+1
//         dia = dia + 0.5;
//         console.log(radDist);

//         x = windowWidth / 2 + cosVal;
//         y = windowHeight / 2 + sinVal;

//         noStroke();
//         let modulo = frameCount % 80;
//         fill(r, g, b);
//         circle(x, y, modulo);

//         radDist = radDist + 1;
//     }

//     background(200)
// }


console.log("Test")
function buttonClicked() {
    // alert("Clicked")
    background(random(255), random(255), random(255))
} let angleDeg = 0;
let x, y;
let dia = 0;
let radDist = 0;

function setup() {
    //stroke(1)
    createCanvas(windowWidth, windowHeight);
    background(153, 204, 255);
    frameRate(10);
    //  createCanvas(windowHeight-20, windowWidth-20)

    //background(255)
}

function draw() {
    //background(220);

    // noStroke()
    // fill(153, 204, 255)
    // rect(30,30,windowHeight-60, windowWidth-60)

    angleDeg = angleDeg + 20;

    // x=0
    let angleRad = radians(angleDeg + 2);
    let cosVal = cos(angleRad) * radDist;
    let sinVal = sin(angleRad) * radDist;

    let r = map(mouseX, windowWidth, windowHeight, 0, 255);
    let g = map(mouseX, windowWidth, windowHeight, 0, 255 - 1);
    let b = 0;
    //map(mouseY, windowWidth, windowHeight, 0,0)

    //r,g=constrain(0,255)

    //let freq=x+1
    dia = dia + 0.5;
    console.log(radDist);

    x = windowWidth / 2 + cosVal;
    y = windowHeight / 2 + sinVal;

    noStroke();
    let modulo = frameCount % 80;
    fill(r, g, b);
    circle(x, y, modulo);

    radDist = radDist + 1;
}
