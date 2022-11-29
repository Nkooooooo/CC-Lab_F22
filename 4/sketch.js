let img
let sound

function preload() {
    img = loadImage("cclab-assets/colorful.jpg")
    sound = loadSound("cclab-assets/sounds/beat.mp3")
}
function setup() {
    let canvas = createCanvas(500, 400)
    canvas.parent("canvasContainer")
    background(220)

}
function mousePressed() {
    sound.play()

}
function draw() {
    background(220)
    imageMode(CENTER)
    fill()
    tint(255, 255, 255, 100)
    blendMode(ADD)
    img(img, mouseX, mouseY)
    filter(THRESHOLD)

}
