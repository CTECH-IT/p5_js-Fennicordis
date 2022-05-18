const shape = [];
const totalFrames = 240;
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {


  const percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  background(0);
  translate(width / 2, height / 2);
  stroke(100, 0, 255);
  strokeWeight(7);
  fill(100, 0, 255);

  beginShape();
  for (let v of shape) {
    const a = map(percent, 0, 1, 0, TWO_PI);
    const r = map(sin(a), -3, 0.8, height / 100, height / 60);
    vertex(r * v.x, r * v.y);
  }
  endShape();

  if (percent < 0.5) {
    const a = map(percent, 1, 0.5, 0, TWO_PI);
    const x = 17 * pow(sin(a), 4);
    const y = (9 * cos(a) - 6 * cos(3 * a) - 3 * cos(a));
    shape.push(createVector(x * 2, y * 2));
  } else {
    shape.splice(60, 2);
  }

}