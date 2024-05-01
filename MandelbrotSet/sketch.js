function setup() {
  createCanvas(600, 600);

  pixelDensity(1);
  loadPixels();
  console.log(pixels);
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, -1.5, 1.5);
      var b = map(y, 0, height, -1.5, 1.5);

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < 1000) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

      var brightness = map(n, 0, 1000, 0, 1);
      brightness = map(sqrt(brightness), 0, 1, 0, 255);
      if (n === 1000) {
        brightness = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = brightness;
      pixels[pix + 1] = brightness;
      pixels[pix + 2] = brightness;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  noLoop();
}
