      var ypos = 200
      var xpos = 80
      var xstep = 60

      function setup() {
        createCanvas(400, 400);
      }

      function draw() {
        background(67, 150, 60);
        stroke(5);
        noStroke(5);
        strokeWeight(5);
        for (var i = 0; i < 2; i++) {
          ellipse(xpos + (ypos * i), ypos, 40, 40 + (sin(frameCount / 10) * 50))
          ellipse(180, 200, 100 + (sin(frameCount / 10) * 50), 100);
        }
        for (var i = 0; i < 2; i++) {
          rect(xpos + (ypos * i), ypos, 30, 30 + (sin(frameCount / 10) * 500))
        }
      }
