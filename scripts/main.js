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
  strokeWeight(10);
  fill(100, 0, 255);

  beginShape();
  for (let v of shape) {
    const a = map(percent, 0, 1, 1, TWO_PI * 2);
    const r = map(sin(a), -2, 1, height / 80, height / 40);
    vertex(r * v.x, r * v.y);

  }
  endShape();

  if (percent < 0.5) {
    const a = map(percent, 1, 0.5, 0, TWO_PI);
    const x = 20 * pow(sin(a), 3);
    const y = (8 * cos(a) - 10 * cos(6 * a) - 3 * cos(2 * a) + cos(5 * a));
    shape.push(createVector(x, y));
  } else {
    shape.splice(0, 1);
  }

}