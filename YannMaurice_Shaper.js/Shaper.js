p5.disableFriendlyErrors = true;
var mouseSprite;

var endScreen = false;

var movementCheck = false;
var loadingCheck = true;
var overlapCheck = true;

var circleSelect = false;
var squareSelect = false;
var triangSelect = false;
var hexaSelect = false;

// true = up & down, false = left & right
var circleMove = false;
var squareMove = true;
var triangMove = true;
var hexaMove = false;

var circleOverlap;
var squarOverlap;
var triangOverlap;
var hexaOverlap;

var shapeSwitch = true;

// 0 = h1, vi / 1 = h1, v2 / 2 = h1, v3 / 3 = h2, v1 / 4 = h2, v2 / 5 = h2, v3
// 6 = h3, v1 / 7 = h3, v2 / 8 = h3, v3
var circlePosition = 1;
var squarePosition = 3;
var triangPosition = 5;
var hexaPosition = 7;

var circle;
var circleX = 720;
var circleY = 150;

var square;
var squareX = 240;
var squareY = 450;

var triang;
var triangX = 1200;
var triangY = 450;

var hexa;
var hexaX = 720;
var hexaY = 750;

// positions of the grid
var vLine1X = 240;
var vLine2X = 720;
var vLine3X = 1200;
var vLineY = 150;

var hLineX = 720;
var hLine1Y = 150;
var hLine2Y = 450;
var hLine3Y = 750;

// vertical lines
var vLine1;
var vLine2;
var vLine3;

// horizontal lines
var hLine1;
var hLine2;
var hLine3;

function preload() {

  circle = loadAnimation("assets/circle.png");
  hcircle = loadAnimation("assets/hcircle.png");
  square = loadAnimation("assets/square.png");
  hsquare = loadAnimation("assets/hsquare.png");
  triang = loadAnimation("assets/triangle.png");
  htriang = loadAnimation("assets/htriang.png");
  hexa = loadAnimation("assets/hexagon.png");
  hhexa = loadAnimation("assets/hhexa.png");

}

function setup() {

  createCanvas(screen.width, screen.height);

  mouseSprite = createSprite(10, 10, 10, 10);
  mouseSprite.shapeColor = color(200, 45, 0);

  // //   vertical lines
  // //   1440/6,900/2
  // vLine1 = createSprite(vLine1X, vLineY, 10, 900);
  // vLine1.shapeColor = color(255, 0, 0, 255);
  // //   (1440/6)*3,900/2
  // vLine2 = createSprite(vLine2X, vLineY, 10, 900);
  // vLine2.shapeColor = color(0, 255, 0, 255);
  // //   (1440/6)*5,900/2
  // vLine3 = createSprite(vLine3X, vLineY, 10, 900);
  // vLine3.shapeColor = color(0, 0, 255, 255);

  // // horizontal lines
  // // the night market of the ghost (b00)

  // hLine1 = createSprite(hLineX, hLine1Y, 1440, 10);
  // hLine1.shapeColor = color(255, 0, 0, 255);

  // hLine2 = createSprite(hLineX, hLine2Y, 1440, 10);
  // hLine2.shapeColor = color(0, 255, 0, 255);

  // hLine3 = createSprite(hLineX, hLine3Y, 1440, 10);
  // hLine3.shapeColor = color(0, 0, 255, 255);

}

function draw() {

  background('#fdeec7');
  


  console.log("overlapCheck = " + overlapCheck);


  if (loadingCheck) {
    circleOverlap = createSprite(circleX, circleY, 240, 240);
    circleOverlap.shapeColor = color(0, 0, 0, 0);

    squareOverlap = createSprite(squareX, squareY, 240, 240);
    squareOverlap.shapeColor = color(0, 0, 0, 0);

    triangOverlap = createSprite(triangX, triangY, 240, 240);
    triangOverlap.shapeColor = color(0, 0, 0, 0);

    hexaOverlap = createSprite(hexaX, hexaY, 240, 240);
    hexaOverlap.shapeColor = color(0, 0, 0, 0);
  }
  animation(circle, circleX, circleY);
  animation(square, squareX, squareY);
  animation(triang, triangX, triangY);
  animation(hexa, hexaX, hexaY);
  // if (circleSelect = false) {
  //   animation(circle, circleX, circleY);
  // } else if (circleSelect = true) {
  //   animation(hcircle, circleX, circleY);
  // }
  // if (squareSelect = false) {
  //   animation(square, squareX, squareY);
  // } else if (squareSelect = true) {
  //   animation(hsquare, squareX, squareY);
  // }
  // if (triangSelect = false) {
  //   animation(triang, triangX, triangY);
  // } else if (triangSelect = true) {
  //   animation(htriang, triangX, triangY);
  // }
  // if (hexaSelect = false) {
  //   animation(hexa, hexaX, hexaY);
  // } else if (hexaSelect = true) {
  //   animation(hhexa, hexaX, hexaY);
  // }

  mouseSprite.position.x = mouseX;
  mouseSprite.position.y = mouseY;

  // WE ARE THE SPRITES ON THE GRID

  // 0 = h1, v1 / 1 = h1, v2 / 2 = h1, v3 / 3 = h2, v1 / 4 = h2, v2 / 5 = h2, v3
  // 6 = h3, v1 / 7 = h3, v2 / 8 = h3, v3
  // if (movementCheck) {
  // if (circleOverlap.overlap(hLine1) && circleOverlap.overlap(vLine1)) {
  //   circlePosition = 0;
  // } else if (circleOverlap.overlap(hLine1) && circleOverlap.overlap(vLine2)) {
  //   circlePosition = 1;
  // } else if (circleOverlap.overlap(hLine1) && circleOverlap.overlap(vLine3)) {
  //   circlePosition = 2;
  // } else if (circleOverlap.overlap(hLine2) && circleOverlap.overlap(vLine1)) {
  //   circlePosition = 3;
  // } else if (circleOverlap.overlap(hLine2) && circleOverlap.overlap(vLine2)) {
  //   circlePosition = 4;
  // } else if (circleOverlap.overlap(hLine2) && circleOverlap.overlap(vLine3)) {
  //   circlePosition = 5;
  // } else if (circleOverlap.overlap(hLine3) && circleOverlap.overlap(vLine1)) {
  //   circlePosition = 6;
  // } else if (circleOverlap.overlap(hLine3) && circleOverlap.overlap(vLine2)) {
  //   circlePosition = 7;
  // } else if (circleOverlap.overlap(hLine3) && circleOverlap.overlap(vLine3)) {
  //   circlePosition = 8;
  // }

  // if (squareOverlap.overlap(hLine1) && squareOverlap.overlap(vLine1)) {
  //   squarePosition = 0;
  // } else if (squareOverlap.overlap(hLine1) && squareOverlap.overlap(vLine2)) {
  //   squarePosition = 1;
  // } else if (squareOverlap.overlap(hLine1) && squareOverlap.overlap(vLine3)) {
  //   squarePosition = 2;
  // } else if (squareOverlap.overlap(hLine2) && squareOverlap.overlap(vLine1)) {
  //   squarePosition = 3;
  // } else if (squareOverlap.overlap(hLine2) && squareOverlap.overlap(vLine2)) {
  //   squarePosition = 4;
  // } else if (squareOverlap.overlap(hLine2) && squareOverlap.overlap(vLine3)) {
  //   squarePosition = 5;
  // } else if (squareOverlap.overlap(hLine3) && squareOverlap.overlap(vLine1)) {
  //   squarePosition = 6;
  // } else if (squareOverlap.overlap(hLine3) && squareOverlap.overlap(vLine2)) {
  //   squarePosition = 7;
  // } else if (squareOverlap.overlap(hLine3) && squareOverlap.overlap(vLine3)) {
  //   squarePosition = 8;
  // }

  // if (triangOverlap.overlap(hLine1) && triangOverlap.overlap(vLine1)) {
  //   triangPosition = 0;
  // } else if (triangOverlap.overlap(hLine1) && triangOverlap.overlap(vLine2)) {
  //   triangPosition = 1;
  // } else if (triangOverlap.overlap(hLine1) && triangOverlap.overlap(vLine3)) {
  //   triangPosition = 2;
  // } else if (triangOverlap.overlap(hLine2) && triangOverlap.overlap(vLine1)) {
  //   triangPosition = 3;
  // } else if (triangOverlap.overlap(hLine2) && triangOverlap.overlap(vLine2)) {
  //   triangPosition = 4;
  // } else if (triangOverlap.overlap(hLine2) && triangOverlap.overlap(vLine3)) {
  //   triangPosition = 5;
  // } else if (triangOverlap.overlap(hLine3) && triangOverlap.overlap(vLine1)) {
  //   triangPosition = 6;
  // } else if (triangOverlap.overlap(hLine3) && triangOverlap.overlap(vLine2)) {
  //   triangPosition = 7;
  // } else if (triangOverlap.overlap(hLine3) && triangOverlap.overlap(vLine3)) {
  //   triangPosition = 8;
  // }

  // if (hexaOverlap.overlap(hLine1) && hexaOverlap.overlap(vLine1)) {
  //   hexaPosition = 0;
  // } else if (hexaOverlap.overlap(hLine1) && hexaOverlap.overlap(vLine2)) {
  //   hexaPosition = 1;
  // } else if (hexaOverlap.overlap(hLine1) && hexaOverlap.overlap(vLine3)) {
  //   hexaPosition = 2;
  // } else if (hexaOverlap.overlap(hLine2) && hexaOverlap.overlap(vLine1)) {
  //   hexaPosition = 3;
  // } else if (hexaOverlap.overlap(hLine2) && hexaOverlap.overlap(vLine2)) {
  //   hexaPosition = 4;
  // } else if (hexaOverlap.overlap(hLine2) && hexaOverlap.overlap(vLine3)) {
  //   hexaPosition = 5;
  // } else if (hexaOverlap.overlap(hLine3) && hexaOverlap.overlap(vLine1)) {
  //   hexaPosition = 6;
  // } else if (hexaOverlap.overlap(hLine3) && hexaOverlap.overlap(vLine2)) {
  //   hexaPosition = 7;
  // } else if (hexaOverlap.overlap(hLine3) && hexaOverlap.overlap(vLine3)) {
  //   hexaPosition = 8;
  // }
  // }

  if (movementCheck) {
    console.log(circlePosition);
    // console.log("HIHIHIHI");
    if (circlePosition == 0) {

      circleX = vLine1X;
      circleY = vLineY;

    } else if (circlePosition == 1) {

      circleX = vLine2X;
      circleY = vLineY;

    } else if (circlePosition == 2) {

      circleX = vLine3X;
      circleY = vLineY;

    } else if (circlePosition == 3) {

      circleX = vLine1X;
      circleY = hLine2Y;

    } else if (circlePosition == 4) {

      circleX = vLine2X;
      circleY = hLine2Y;

    } else if (circlePosition == 5) {

      circleX = vLine3X;
      circleY = hLine2Y;

    } else if (circlePosition == 6) {

      circleX = vLine1X;
      circleY = hLine3Y;

    } else if (circlePosition == 7) {

      circleX = vLine2X;
      circleY = hLine3Y;

    } else if (circlePosition == 8) {

      circleX = vLine3X;
      circleY = hLine3Y;
    }

    if (squarePosition == 0) {

      squareX = vLine1X;
      squareY = vLineY;

    } else if (squarePosition == 1) {

      squareX = vLine2X;
      squareY = vLineY;

    } else if (squarePosition == 2) {

      squareX = vLine3X;
      squareY = vLineY;

    } else if (squarePosition == 3) {

      squareX = vLine1X;
      squareY = hLine2Y;

    } else if (squarePosition == 4) {

      squareX = vLine2X;
      squareY = hLine2Y;

    } else if (squarePosition == 5) {

      squareX = vLine3X;
      squareY = hLine2Y;

    } else if (squarePosition == 6) {

      squareX = vLine1X;
      squareY = hLine3Y;

    } else if (squarePosition == 7) {

      squareX = vLine2X;
      squareY = hLine3Y;

    } else if (squarePosition == 8) {

      squareX = vLine3X;
      squareY = hLine3Y;
    }

    if (hexaPosition == 0) {

      hexaX = vLine1X;
      hexaY = vLineY;

    } else if (hexaPosition == 1) {

      hexaX = vLine2X;
      hexaY = vLineY;

    } else if (hexaPosition == 2) {

      hexaX = vLine3X;
      hexaY = vLineY;

    } else if (hexaPosition == 3) {

      hexaX = vLine1X;
      hexaY = hLine2Y;

    } else if (hexaPosition == 4) {

      hexaX = vLine2X;
      hexaY = hLine2Y;

    } else if (hexaPosition == 5) {

      hexaX = vLine3X;
      hexaY = hLine2Y;

    } else if (hexaPosition == 6) {

      hexaX = vLine1X;
      hexaY = hLine3Y;

    } else if (hexaPosition == 7) {

      hexaX = vLine2X;
      hexaY = hLine3Y;

    } else if (hexaPosition == 8) {

      hexaX = vLine3X;
      hexaY = hLine3Y;
    }

    if (triangPosition == 0) {

      triangX = vLine1X;
      triangY = vLineY;

    } else if (triangPosition == 1) {

      triangX = vLine2X;
      triangY = vLineY;

    } else if (triangPosition == 2) {

      triangX = vLine3X;
      triangY = vLineY;

    } else if (triangPosition == 3) {

      triangX = vLine1X;
      triangY = hLine2Y;

    } else if (triangPosition == 4) {

      triangX = vLine2X;
      triangY = hLine2Y;

    } else if (triangPosition == 5) {

      triangX = vLine3X;
      triangY = hLine2Y;

    } else if (triangPosition == 6) {

      triangX = vLine1X;
      triangY = hLine3Y;

    } else if (triangPosition == 7) {

      triangX = vLine2X;
      triangY = hLine3Y;

    } else if (triangPosition == 8) {

      triangX = vLine3X;
      triangY = hLine3Y;
    }

    // 0 = h1, v1 / 1 = h1, v2 / 2 = h1, v3 / 3 = h2, v1 / 4 = h2, v2 / 5 = h2, v3
    // 6 = h3, v1 / 7 = h3, v2 / 8 = h3, v3

    movementCheck = false;
  }

  // MAKING SURE THE SHAPES ARE SELECTED FOR MOVEMENT
  if (mouseIsPressed) {
    if (mouseSprite.overlap(circleOverlap)) {
      console.log("CIRCLE HI");
      circleSelect = true;
      squareSelect = false;
      triangSelect = false;
      hexaSelect = false;
      animation(hcircle, circleX, circleY);
    } else {

    }

    if (mouseSprite.overlap(squareOverlap)) {
      console.log("SQUARE HI");
      circleSelect = false;
      squareSelect = true;
      triangSelect = false;
      hexaSelect = false;
      animation(hsquare, squareX, squareY);
    } else {

    }
    if (mouseSprite.overlap(triangOverlap)) {
      console.log("TRIANGLE HI");
      circleSelect = false;
      squareSelect = false;
      triangSelect = true;
      hexaSelect = false;
      animation(htriang, triangX, triangY);

    } else {

    }

    if (mouseSprite.overlap(hexaOverlap)) {
      console.log("HEXAGON HI");
      circleSelect = false;
      squareSelect = false;
      triangSelect = false;
      hexaSelect = true;
      animation(hhexa, hexaX, hexaY);

    } else {

    }

    // circle, square, tri, hexa

    if (mouseSprite.overlap(circleOverlap) && mouseSprite.overlap(squareOverlap)) {
      shapeSwitch = !shapeSwitch;
      // console.log("CIRCLE && SQUARE HI");
      if (shapeSwitch) {
        console.log("CIRCLE PRIORITY")
        circleSelect = true;
        squareSelect = false;
        triangSelect = false;
        hexaSelect = false;
        animation(hcircle, circleX, circleY);
      } else {
        console.log("SQUARE PRIORITY")
        circleSelect = false;
        squareSelect = true;
        triangSelect = false;
        hexaSelect = false;
        animation(hcircle, circleX, circleY);
      }
    } else {

    }
    if (mouseSprite.overlap(squareOverlap) && mouseSprite.overlap(triangOverlap)) {
      console.log("SQUARE && TRIANg HI");
      circleSelect = false;
      squareSelect = true;
      triangSelect = false;
      hexaSelect = false;
      animation(hsquare, squareX, squareY);
    } else {

    }
    if (mouseSprite.overlap(squareOverlap) && mouseSprite.overlap(hexaOverlap)) {
      console.log("SQUARE && Hexa HI");
      circleSelect = false;
      squareSelect = true;
      triangSelect = false;
      hexaSelect = false;
      animation(hsquare, squareX, squareY);
    } else {

    }
    if (mouseSprite.overlap(circleOverlap) && mouseSprite.overlap(triangOverlap)) {
      console.log("CIRCLE && TRIANG HI");
      circleSelect = true;
      squareSelect = false;
      triangSelect = false;
      hexaSelect = false;
      animation(hcircle, circleX, circleY);
    } else {

    }
    if (mouseSprite.overlap(circleOverlap) && mouseSprite.overlap(hexaOverlap)) {
      console.log("CIRCLE && HeXa HI");
      circleSelect = true;
      squareSelect = false;
      triangSelect = false;
      hexaSelect = false;
      animation(hcircle, circleX, circleY);
    } else {

    }
    if (mouseSprite.overlap(triangOverlap) && mouseSprite.overlap(hexaOverlap)) {
      console.log("TRIANGLE & HEXA HI");
      circleSelect = false;
      squareSelect = false;
      triangSelect = true;
      hexaSelect = false;
      animation(htriang, triangX, triangY);

    } else {

    }
  }


  // MOVEMENT BOOLEAN SWITCH


  if (squareOverlap.overlap(circleOverlap)) {
    if (overlapCheck) {
      console.log("SQUARE & CIRCLE SWITCH MOVEMENT TYPES!!");
      squareMove = !squareMove;
      circleMove = !circleMove;
      overlapCheck = false;
    }

  } else if (triangOverlap.overlap(circleOverlap)) {
    if (overlapCheck) {
      console.log("TRIANG & CIRCLE SWITCH MOVEMENT TYPES!!");
      triangMove = !triangMove;
      circleMove = !circleMove;
      overlapCheck = false;
    }
  } else if (hexaOverlap.overlap(circleOverlap)) {
    if (overlapCheck) {
      console.log("HEXA & CIRCLE SWITCH MOVEMENT TYPES!!");
      hexaMove = !hexaMove;
      circleMove = !circleMove;
      overlapCheck = false;
    }

  } else if (triangOverlap.overlap(squareOverlap)) {
    if (overlapCheck) {
      console.log("SQUARE & TRIANG SWITCH MOVEMENT TYPES!!");
      triangMove = !triangMove;
      squareMove = !squareMove;
      overlapCheck = false;
    }

  } else if (hexaOverlap.overlap(squareOverlap)) {
    if (overlapCheck) {
      console.log("SQUARE & HEXA SWITCH MOVEMENT TYPES!!");
      hexaMove = !hexaMove;
      squareMove = !squareMove;
      overlapCheck = false;
    }

  } else if (hexaOverlap.overlap(triangOverlap)) {
    if (overlapCheck) {
      console.log("HEXA & TRIANG SWITCH MOVEMENT TYPES!!");
      hexaMove = !hexaMove;
      triangMove = !triangMove;
      overlapCheck = false;
    }

  } else {
    overlapCheck = true;
  }




  drawSprites();
  if (endScreen) {
    background(0);
    textSize(100);
    fill(255);
    text('YOU DID IT!!!!',240,450);
   
    
  }
}

function keyPressed() {

  if (circleSelect) {
    // IF IT'S TRUE (UP & DOWN)
    if (circleMove) {

      if (keyCode === UP_ARROW) {
        console.log("CIRCLE UP!!!");
        movementCheck = true;
        circleMove = false;
        if (circlePosition == 0) {

        } else if (circlePosition == 1) {

        } else if (circlePosition == 2) {

        } else if (circlePosition == 3) {
          circlePosition = 0;

        } else if (circlePosition == 4) {
          circlePosition = 1;

        } else if (circlePosition == 5) {
          circlePosition = 2;

        } else if (circlePosition == 6) {
          circlePosition = 3;

        } else if (circlePosition == 7) {
          circlePosition = 4;

        } else if (circlePosition == 8) {
          circlePosition = 5;

        }



      } else if (keyCode === DOWN_ARROW) {
        console.log("CIRCLE DOWN!!!");
        movementCheck = true;
        circleMove = false
        if (circlePosition == 0) {
          circlePosition = 3;

        } else if (circlePosition == 1) {
          circlePosition = 4;

        } else if (circlePosition == 2) {
          circlePosition = 5;

        } else if (circlePosition == 3) {
          circlePosition = 6;

        } else if (circlePosition == 4) {
          circlePosition = 7;

        } else if (circlePosition == 5) {
          circlePosition = 8;

        } else if (circlePosition == 6) {

        } else if (circlePosition == 7) {

        } else if (circlePosition == 8) {

        }
      }

      // if it's false (LEFT & RIGHT)
    } else {

      if (keyCode === RIGHT_ARROW) {
        console.log("CIRCLE RIGHT!!!");
        movementCheck = true;
        if (circlePosition == 0) {
          circlePosition = 1;

        } else if (circlePosition == 1) {
          circlePosition = 2;

        } else if (circlePosition == 2) {

        } else if (circlePosition == 3) {
          circlePosition = 4;

        } else if (circlePosition == 4) {
          circlePosition = 5;

        } else if (circlePosition == 5) {

        } else if (circlePosition == 6) {
          circlePosition = 7;

        } else if (circlePosition == 7) {
          circlePosition = 8;

        } else if (circlePosition == 8) {

        }


      } else if (keyCode === LEFT_ARROW) {
        console.log("CIRCLE LEFT!!!");
        movementCheck = true;
        if (circlePosition == 0) {

        } else if (circlePosition == 1) {
          circlePosition = 0;

        } else if (circlePosition == 2) {
          circlePosition = 1;

        } else if (circlePosition == 3) {

        } else if (circlePosition == 4) {
          circlePosition = 3;

        } else if (circlePosition == 5) {
          circlePosition = 4;

        } else if (circlePosition == 6) {

        } else if (circlePosition == 7) {
          circlePosition = 6;

        } else if (circlePosition == 8) {
          circlePosition = 7;

        }

        // } else if (circlePosition == 1) {
        //   console.log("hi, i should be moving to the left, ok?");
        //   circlePosition = 0;

        // } else if (circlePosition == 2) {

        //   circlePosition = 1;
        // }
      }
    }
  }

  // SQUARE MOVEMENT
  if (squareSelect) {
    // IF IT'S TRUE (UP & DOWN)
    if (squareMove) {

      if (keyCode === UP_ARROW) {
        console.log("SQUARE UP!!!");
        movementCheck = true;
        if (squarePosition == 0) {

        } else if (squarePosition == 1) {

        } else if (squarePosition == 2) {

        } else if (squarePosition == 3) {
          squarePosition = 0;
        } else if (squarePosition == 4) {
          squarePosition = 1;
        } else if (squarePosition == 5) {
          squarePosition = 2;
        } else if (squarePosition == 6) {
          squarePosition = 3;
        } else if (squarePosition == 7) {
          squarePosition = 4;
        } else if (squarePosition == 8) {
          squarePosition = 5;
        }
      } else if (keyCode === DOWN_ARROW) {
        console.log("SQUARE DOWN!!!");
        movementCheck = true;
        if (squarePosition == 0) {
          squarePosition = 3;
        } else if (squarePosition == 1) {
          squarePosition = 4;
        } else if (squarePosition == 2) {
          squarePosition = 5;
        } else if (squarePosition == 3) {
          squarePosition = 6;
        } else if (squarePosition == 4) {
          squarePosition = 7;
        } else if (squarePosition == 5) {
          squarePosition = 8;
        } else if (squarePosition == 6) {

        } else if (squarePosition == 7) {

        } else if (squarePosition == 8) {

        }
      }

      // if it's false (LEFT & RIGHT)
    } else {

      if (keyCode === RIGHT_ARROW) {
        console.log("SQUARE RIGHT!!!");
        movementCheck = true;
        squareMove = true;
        if (squarePosition == 0) {
          squarePosition = 1;
        } else if (squarePosition == 1) {
          squarePosition = 2;
        } else if (squarePosition == 2) {

        } else if (squarePosition == 3) {
          squarePosition = 4;
        } else if (squarePosition == 4) {
          squarePosition = 5;
        } else if (squarePosition == 5) {

        } else if (squarePosition == 6) {
          squarePosition = 7;
        } else if (squarePosition == 7) {
          squarePosition = 8;
        } else if (squarePosition == 8) {

        }
      } else if (keyCode === LEFT_ARROW) {
        console.log("SQUARE LEFT!!!");
        movementCheck = true;
        squareMove = true;
        if (squarePosition == 0) {

        } else if (squarePosition == 1) {
          squarePosition = 0;
        } else if (squarePosition == 2) {
          squarePosition = 1;
        } else if (squarePosition == 3) {

        } else if (squarePosition == 4) {
          squarePosition = 3;
        } else if (squarePosition == 5) {
          squarePosition = 4;
        } else if (squarePosition == 6) {

        } else if (squarePosition == 7) {
          squarePosition = 6;
        } else if (squarePosition == 8) {
          squarePosition = 7;
        }
      }
    }
  }

  // TRIANGLE MOVEMENT
  if (triangSelect) {
    // IF IT'S TRUE (UP & DOWN)
    if (triangMove) {


      if (keyCode === UP_ARROW) {
        console.log("TRIANG UP!!!");
        movementCheck = true;
        if (triangPosition == 0) {

        } else if (triangPosition == 1) {

        } else if (triangPosition == 2) {

        } else if (triangPosition == 3) {
          triangPosition = 0;

        } else if (triangPosition == 4) {
          triangPosition = 1;

        } else if (triangPosition == 5) {
          triangPosition = 2;

        } else if (triangPosition == 6) {
          triangPosition = 3;

        } else if (triangPosition == 7) {
          triangPosition = 4;

        } else if (triangPosition == 8) {
          triangPosition = 5;

        }



      } else if (keyCode === DOWN_ARROW) {
        console.log("TRIANG DOWN!!!");
        movementCheck = true;
        if (triangPosition == 0) {
          triangPosition = 3;

        } else if (triangPosition == 1) {
          triangPosition = 4;

        } else if (triangPosition == 2) {
          triangPosition = 5;

        } else if (triangPosition == 3) {
          triangPosition = 6;

        } else if (triangPosition == 4) {
          triangPosition = 7;

        } else if (triangPosition == 5) {
          triangPosition = 8;

        } else if (triangPosition == 6) {

        } else if (triangPosition == 7) {

        } else if (triangPosition == 8) {

        }
      }

      // if it's false (LEFT & RIGHT)
    } else {

      if (keyCode === RIGHT_ARROW) {
        console.log("TRIANG RIGHT!!!");
        movementCheck = true;
        trianMove = false;
        if (triangPosition == 0) {
          triangPosition = 1;

        } else if (triangPosition == 1) {
          triangPosition = 2;

        } else if (triangPosition == 2) {

        } else if (triangPosition == 3) {
          triangPosition = 4;

        } else if (triangPosition == 4) {
          triangPosition = 5;

        } else if (triangPosition == 5) {

        } else if (triangPosition == 6) {
          triangPosition = 7;

        } else if (triangPosition == 7) {
          triangPosition = 8;

        } else if (triangPosition == 8) {

        }


      } else if (keyCode === LEFT_ARROW) {
        console.log("TRIANG LEFT!!!");
        movementCheck = true;
        triangMove = true;
        if (triangPosition == 0) {

        } else if (triangPosition == 1) {
          triangPosition = 0;

        } else if (triangPosition == 2) {
          triangPosition = 1;

        } else if (triangPosition == 3) {

        } else if (triangPosition == 4) {
          triangPosition = 3;

        } else if (triangPosition == 5) {
          triangPosition = 4;

        } else if (triangPosition == 6) {

        } else if (triangPosition == 7) {
          triangPosition = 6;

        } else if (triangPosition == 8) {
          triangPosition = 7;

        }
      }
    }
  }
  // SQUARE MOVEMENT
  if (hexaSelect) {
    // IF IT'S TRUE (UP & DOWN)
    if (hexaMove) {

      if (keyCode === UP_ARROW) {
        console.log("HEXA UP!!!");
        movementCheck = true;
        hexaMove = false;
        if (hexaPosition == 0) {

        } else if (hexaPosition == 1) {

        } else if (hexaPosition == 2) {

        } else if (hexaPosition == 3) {
          hexaPosition = 0;

        } else if (hexaPosition == 4) {
          hexaPosition = 1;

        } else if (hexaPosition == 5) {
          hexaPosition = 2;

        } else if (hexaPosition == 6) {
          hexaPosition = 3;

        } else if (hexaPosition == 7) {
          hexaPosition = 4;

        } else if (hexaPosition == 8) {
          hexaPosition = 5;

        }



      } else if (keyCode === DOWN_ARROW) {
        console.log("HEXA DOWN!!!");
        movementCheck = true;
        hexaMove = false;
        if (hexaPosition == 0) {
          hexaPosition = 3;

        } else if (hexaPosition == 1) {
          hexaPosition = 4;

        } else if (hexaPosition == 2) {
          hexaPosition = 5;

        } else if (hexaPosition == 3) {
          hexaPosition = 6;

        } else if (hexaPosition == 4) {
          hexaPosition = 7;

        } else if (hexaPosition == 5) {
          hexaPosition = 8;

        } else if (hexaPosition == 6) {

        } else if (hexaPosition == 7) {

        } else if (hexaPosition == 8) {

        }
      }

      // if it's false (LEFT & RIGHT)
    } else {

      if (keyCode === RIGHT_ARROW) {
        console.log("HEXA RIGHT!!!");
        movementCheck = true;
        if (hexaPosition == 0) {
          hexaPosition = 1;

        } else if (hexaPosition == 1) {
          hexaPosition = 2;

        } else if (hexaPosition == 2) {

        } else if (hexaPosition == 3) {
          hexaPosition = 4;

        } else if (hexaPosition == 4) {
          hexaPosition = 5;

        } else if (hexaPosition == 5) {

        } else if (hexaPosition == 6) {
          hexaPosition = 7;

        } else if (hexaPosition == 7) {
          hexaPosition = 8;

        } else if (hexaPosition == 8) {

        }


      } else if (keyCode === LEFT_ARROW) {
        console.log("HEXA LEFT!!!");
        movementCheck = true;
        if (hexaPosition == 0) {

        } else if (hexaPosition == 1) {
          hexaPosition = 0;

        } else if (hexaPosition == 2) {
          hexaPosition = 1;

        } else if (hexaPosition == 3) {

        } else if (hexaPosition == 4) {
          hexaPosition = 3;

        } else if (hexaPosition == 5) {
          hexaPosition = 4;

        } else if (hexaPosition == 6) {

        } else if (hexaPosition == 7) {
          hexaPosition = 6;

        } else if (hexaPosition == 8) {
          hexaPosition = 7;

        }
      }
    }
  }




// VICTORY CONDITION HOORAY

if (circlePosition == 4 && squarePosition == 4 && triangPosition == 4 && hexaPosition == 4) {

  endScreen = true;
}
}


// return false; // prevent default

function windowResized() {
  // ensures that when you full screen or drag the window to a larger, size, the canvas will enlarge
  resizeCanvas(windowWidth, windowHeight);

}