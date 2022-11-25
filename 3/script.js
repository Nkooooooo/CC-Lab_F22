function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent(canvasContainer)
    background(200)
}


console.log("Test")
function buttonClicked() {
    // alert("Clicked")
    background(random(255), random(255), random(255))
}