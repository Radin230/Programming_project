var diameter = 50

function setup() {
  	createCanvas(500,500);
    background(25, 175, 255);
}

function draw() {

    fill(225, 255, 50);
  	strokeWeight(0);
  //System variable
  //mouseX - gives us the values of the X corrdinate of our mouse
  //mouseY - gives us the values of the Y coordinate of our mouse
    ellipse(250, 250, 200, 200);
    fill(200, 200, 200);
    ellipse(mouseX, mouseY, diameter, diameter);
    fill(255, 255, 255);
    ellipse(random(width), random(height), 50, 50);
    fill(225, 255, 50);
    textSize(30);
  	textFont("Georgia");
    textStyle(ITALIC);
    text("GoodMorning", 25, 50);

      if (mouseIsPressed) {
        fill(25, 175, 255);
      } else {
        diameter = 100
      }
    }

    function mousePressed() {

      if (diameter > 100) {
        diameter = 100; //resets size to 50px
      } else {
        // else grow by 10px
        diameter = diameter + 50;
      }

}
