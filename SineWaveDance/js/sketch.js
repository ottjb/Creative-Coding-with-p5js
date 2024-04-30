let runners = [];
let amplitude = 20;
let frequency = 0.1;

function setup() {
  createCanvas(250, 250);

  for (let i = -2; i <= 2; i++) {
    runners[i + 2] = new Runner(50 * i);
  }
}

function draw() {
  background(55);

  for (let i = 0; i < 5; i++) {
    runners[i].update();
    runners[i].show();
  }
}

function Runner(y) {
  this.pos = createVector(this.x, sin(this.x * frequency) * amplitude);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector();
  this.y = y;

  this.update = function () {
    this.velocity.add(this.acceleration);
    let newX = this.pos.x + this.velocity.x;
    let newPos = createVector(newX, sin(newX * frequency) * amplitude);
    this.pos = newPos;
    this.acceleration.mult(0);

    if (this.pos.x < 0 || this.pos.x > width) {
      this.velocity.x *= -1;
    }
  };

  this.show = function () {
    let angle = atan(cos(this.pos.x * frequency));
    if (this.velocity.x < 0) {
      angle += PI;
    }
    push();
    translate(this.pos.x, height / 2 + this.pos.y + this.y);
    rotate(angle);
    triangle(10, 0, -10, 5, -10, -5);
    pop();
  };
}
