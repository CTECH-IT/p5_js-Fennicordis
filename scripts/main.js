const totalFrames = 240;
const star = [];
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
    strokeWeight(4);
    fill(100, 0, 255);
  
    beginShape();
    for (let v of star) {
      const a = map(percent, 0, 1, 0, 2);
      const r = map(1, -1, 1, height / 80, height / 40);
      vertex(330,180)
      vertex(250,180)
      vertex(220,95)
      vertex(180,180)
      vertex(100,180)
      vertex(165,235)
      vertex(140,305)
      vertex(215,265)
      vertex(290,305)
      vertex(265,235)
    }
    endShape();
  
    if (percent < 0.5) {
      const a = map(percent, 0, 0.5, 0, 2);
      const x = 16 * pow(sin(a), 3);
      const y = -(13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
      star.push(createVector(x, y));
    } else {
      star.splice(0, 1);
    }
  
  }