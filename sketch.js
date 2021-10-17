var backgroundImg, scene;
var bunny, bunnyImg;
var lettuce, lettuceImg;
var carrot, carrotImg, carrotGroup;
var hawk, hawkImg, hawkGroup;
var hawk1Img, hawk2Img, hawk3Img, hawk4Img, hawk5Img, hawk6Img;
var wall, wallGroup;
var bush, deer, lion;
var log, mushroom, seedling, shovel;
var home, homeImg;
var lives = 3;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var eatcarrotsSound, eatbunnySound;
var homeFlag = false;

function preload() {
  bunnyImg = loadImage("bunny.gif");
  backgroundImg = loadImage("background.gif");
  hawk1Img = loadImage("hawk1.gif");
  hawk2Img = loadImage("hawk2.gif");
  hawk3Img = loadImage("hawk3.gif");
  hawk4Img = loadImage("hawk4.gif");
  hawk5Img = loadImage("hawk5.gif");
  hawk6Img = loadImage("hawk6.gif");
  bush = loadImage("bush.gif");
  deer = loadImage("deer.gif");
  lion = loadImage("lion.gif");
  log = loadImage("log.gif");
  mushroom = loadImage("mushroom.gif");
  seedling = loadImage("seedling.gif");
  shovel = loadImage("shovel.gif");
  homeImg = loadImage("home.gif");
  carrotImg = loadImage("carrot.gif");
  eatcarrotsSound = loadSound("eatcarrots.wav")
  eatbunnySound = loadSound("eatbunny.wav")

}

function setup() {
  createCanvas(700, 700);

  wallGroup = new Group();
  hawkGroup = new Group();
  carrotGroup = new Group();

  scene = createSprite(350, 350);
  scene.addImage(backgroundImg);
  scene.scale = 1.75;

  bunny = createSprite(150, 30, 20, 20);
  bunny.shapeColor = 'blue';
  bunny.addImage(bunnyImg);
  bunny.scale = 0.3;

  home = createSprite(615, 640);
  home.addImage(homeImg);
  home.scale = 0.4;

  hawk1 = createSprite(0, 100, 30, 30);
  hawk1.shapeColor = 'white';
  hawk1.addImage(hawk1Img);
  hawk1.scale = 0.2;

  hawk2 = createSprite(100, 300, 30, 30);
  hawk2.shapeColor = 'cyan';
  hawk2.addImage(hawk2Img);
  hawk2.scale = 0.2;

  hawk3 = createSprite(300, 500, 30, 30);
  hawk3.shapeColor = 'cyan';
  hawk3.addImage(hawk3Img);
  hawk3.scale = 0.2;

  hawk4 = createSprite(500, 100, 30, 30);
  hawk4.shapeColor = 'cyan';
  hawk4.addImage(hawk4Img);
  hawk4.scale = 0.2;

  hawk5 = createSprite(700, 400, 30, 30);
  hawk5.shapeColor = 'cyan';
  hawk5.addImage(hawk5Img);
  hawk5.scale = 0.2;

  hawk6 = createSprite(300, 600, 30, 30);
  hawk6.shapeColor = 'cyan';
  hawk6.addImage(hawk6Img);
  hawk6.scale = 0.2;

  hawk1.velocityX = Math.round(random(-4, 4));
  hawk2.velocityX = Math.round(random(-4, 4));
  hawk3.velocityX = Math.round(random(-4, 4));
  hawk4.velocityX = Math.round(random(-4, 4));
  hawk5.velocityX = Math.round(random(-4, 4));
  hawk6.velocityX = Math.round(random(-4, 4));
  hawk1.velocityY = Math.round(random(-4, 4));
  hawk2.velocityY = Math.round(random(-4, 4));
  hawk3.velocityY = Math.round(random(-4, 4));
  hawk4.velocityY = Math.round(random(-4, 4));
  hawk5.velocityY = Math.round(random(-4, 4));
  hawk6.velocityY = Math.round(random(-4, 4));

  wall1 = createSprite(50, 30, 20, 100);
  wall1.shapeColor = 'red';
  wall1.addImage(bush);
  wall1.scale = 0.2;

  wall2 = createSprite(350, 630, 100, 20);
  wall2.shapeColor = 'brown';
  wall2.addImage(seedling);
  wall2.scale = 0.2;

  wall3 = createSprite(200, 350, 20, 100);
  wall3.shapeColor = 'indigo';
  wall3.addImage(shovel);
  wall3.scale = 0.2;

  wall4 = createSprite(350, 50, 100, 20);
  wall4.shapeColor = 'green';
  wall4.addImage(mushroom);
  wall4.scale = 0.2;

  wall5 = createSprite(150, 170, 20, 150);
  wall5.shapeColor = 'pink';
  wall5.addImage(log);
  wall5.scale = 0.2;

  /*wall6 = createSprite(130, 255, 100, 20);
  wall6.shapeColor = 'black';
  wall6.addImage(lion);
  wall6.scale = 0.2;*/

  wall7 = createSprite(350, 320, 20, 170);
  wall7.shapeColor = 'purple';
  wall7.addImage(deer);
  wall7.scale = 0.2;

  wall8 = createSprite(50, 670, 20, 140);
  wall8.shapeColor = 'orange';
  wall8.addImage(bush);
  wall8.scale = 0.2;

  wall9 = createSprite(500, 100, 200, 20);
  wall9.shapeColor = 'grey';
  wall9.addImage(seedling);
  wall9.scale = 0.2;

  /*wall10 = createSprite(550, 570, 20, 150);
  wall10.shapeColor = 'pink';
  wall10.addImage(lion);
  wall10.scale = 0.2;*/

  wall11 = createSprite(50, 450, 20, 100);
  wall11.shapeColor = 'red';
  wall11.addImage(deer);
  wall11.scale = 0.2;

  wall12 = createSprite(520, 400, 100, 20);
  wall12.shapeColor = 'brown';
  wall12.addImage(shovel);
  wall12.scale = 0.2;

  /*wall13 = createSprite(370, 125, 20, 100);
  wall13.shapeColor = 'indigo';
  wall13.addImage(lion);
  wall13.scale = 0.2;*/

  wall14 = createSprite(406, 455, 100, 20);
  wall14.shapeColor = 'green';
  wall14.addImage(log);
  wall14.scale = 0.2;

  wall15 = createSprite(200, 500, 20, 150);
  wall15.shapeColor = 'pink';
  wall15.addImage(mushroom);
  wall15.scale = 0.2;

  /*wall16 = createSprite(600, 400, 100, 20);
  wall16.shapeColor = 'black';
  wall16.addImage(bush);
  wall16.scale = 0.2;*/

  wall17 = createSprite(650, 30, 20, 170);
  wall17.shapeColor = 'purple';
  wall17.addImage(bush);
  wall17.scale = 0.2;

  wall18 = createSprite(640, 100, 20, 140);
  wall18.shapeColor = 'orange';
  wall18.addImage(shovel);
  wall18.scale = 0.2;

  wall19 = createSprite(650, 510, 200, 20);
  wall19.shapeColor = 'grey';
  wall19.addImage(seedling);
  wall19.scale = 0.2;

  wall20 = createSprite(550, 236, 20, 150);
  wall20.shapeColor = 'pink';
  wall20.addImage(mushroom);
  wall20.scale = 0.2;

  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  //wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  //wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  //wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
  //wallGroup.add(wall16);
  wallGroup.add(wall17);
  wallGroup.add(wall18);
  wallGroup.add(wall19);
  wallGroup.add(wall20);

  hawkGroup.add(hawk1);
  hawkGroup.add(hawk2);
  hawkGroup.add(hawk3);
  hawkGroup.add(hawk4);
  hawkGroup.add(hawk5);
  hawkGroup.add(hawk6);

}

function draw() {
  background(51);
  if (gameState == PLAY) {
    edges = createEdgeSprites();
    hawk1.bounceOff(edges);
    hawk2.bounceOff(edges);
    hawk3.bounceOff(edges);
    hawk4.bounceOff(edges);
    hawk5.bounceOff(edges);
    hawk6.bounceOff(edges);

    hawkMovement(hawk1, wall1);
    hawkMovement(hawk1, wall2);
    hawkMovement(hawk1, wall3);
    hawkMovement(hawk1, wall4);
    hawkMovement(hawk1, wall5);
    // hawkMovement(hawk1, wall6);
    hawkMovement(hawk1, wall7);
    hawkMovement(hawk1, wall8);
    hawkMovement(hawk1, wall9);
    //hawkMovement(hawk1, wall10);
    hawkMovement(hawk1, wall11);
    hawkMovement(hawk1, wall12);
    //hawkMovement(hawk1, wall13);
    hawkMovement(hawk1, wall14);
    hawkMovement(hawk1, wall15);
    //hawkMovement(hawk1, wall16);
    hawkMovement(hawk1, wall17);
    hawkMovement(hawk1, wall18);
    hawkMovement(hawk1, wall19);
    hawkMovement(hawk1, wall20);

    hawkMovement(hawk2, wall1);
    hawkMovement(hawk2, wall2);
    hawkMovement(hawk2, wall3);
    hawkMovement(hawk2, wall4);
    hawkMovement(hawk2, wall5);
    // hawkMovement(hawk2, wall6);
    hawkMovement(hawk2, wall7);
    hawkMovement(hawk2, wall8);
    hawkMovement(hawk2, wall9);
    // hawkMovement(hawk2, wall10);
    hawkMovement(hawk2, wall11);
    hawkMovement(hawk2, wall12);
    //hawkMovement(hawk2, wall13);
    hawkMovement(hawk2, wall14);
    hawkMovement(hawk2, wall15);
    //hawkMovement(hawk2, wall16);
    hawkMovement(hawk2, wall17);
    hawkMovement(hawk2, wall18);
    hawkMovement(hawk2, wall19);
    hawkMovement(hawk2, wall20);

    hawkMovement(hawk3, wall1);
    hawkMovement(hawk3, wall2);
    hawkMovement(hawk3, wall3);
    hawkMovement(hawk3, wall4);
    hawkMovement(hawk3, wall5);
    //hawkMovement(hawk3, wall6);
    hawkMovement(hawk3, wall7);
    hawkMovement(hawk3, wall8);
    hawkMovement(hawk3, wall9);
    //hawkMovement(hawk3, wall10);
    hawkMovement(hawk3, wall11);
    hawkMovement(hawk3, wall12);
    //hawkMovement(hawk3, wall13);
    hawkMovement(hawk3, wall14);
    hawkMovement(hawk3, wall15);
    // hawkMovement(hawk3, wall16);
    hawkMovement(hawk3, wall17);
    hawkMovement(hawk3, wall18);
    hawkMovement(hawk3, wall19);
    hawkMovement(hawk3, wall20);

    hawkMovement(hawk4, wall1);
    hawkMovement(hawk4, wall2);
    hawkMovement(hawk4, wall3);
    hawkMovement(hawk4, wall4);
    hawkMovement(hawk4, wall5);
    // hawkMovement(hawk4, wall6);
    hawkMovement(hawk4, wall7);
    hawkMovement(hawk4, wall8);
    hawkMovement(hawk4, wall9);
    // hawkMovement(hawk4, wall10);
    hawkMovement(hawk4, wall11);
    hawkMovement(hawk4, wall12);
    // hawkMovement(hawk4, wall13);
    hawkMovement(hawk4, wall14);
    hawkMovement(hawk4, wall15);
    // hawkMovement(hawk4, wall16);
    hawkMovement(hawk4, wall17);
    hawkMovement(hawk4, wall18);
    hawkMovement(hawk4, wall19);
    hawkMovement(hawk4, wall20);

    hawkMovement(hawk5, wall1);
    hawkMovement(hawk5, wall2);
    hawkMovement(hawk5, wall3);
    hawkMovement(hawk5, wall4);
    hawkMovement(hawk5, wall5);
    // hawkMovement(hawk5, wall6);
    hawkMovement(hawk5, wall7);
    hawkMovement(hawk5, wall8);
    hawkMovement(hawk5, wall9);
    // hawkMovement(hawk5, wall10);
    hawkMovement(hawk5, wall11);
    hawkMovement(hawk5, wall12);
    //  hawkMovement(hawk5, wall13);
    hawkMovement(hawk5, wall14);
    hawkMovement(hawk5, wall15);
    // hawkMovement(hawk5, wall16);
    hawkMovement(hawk5, wall17);
    hawkMovement(hawk5, wall18);
    hawkMovement(hawk5, wall19);
    hawkMovement(hawk5, wall20);

    hawkMovement(hawk6, wall1);
    hawkMovement(hawk6, wall2);
    hawkMovement(hawk6, wall3);
    hawkMovement(hawk6, wall4);
    hawkMovement(hawk6, wall5);
    // hawkMovement(hawk6, wall6);
    hawkMovement(hawk6, wall7);
    hawkMovement(hawk6, wall8);
    hawkMovement(hawk6, wall9);
    // hawkMovement(hawk6, wall10);
    hawkMovement(hawk6, wall11);
    hawkMovement(hawk6, wall12);
    // hawkMovement(hawk6, wall13);
    hawkMovement(hawk6, wall14);
    hawkMovement(hawk6, wall15);
    // hawkMovement(hawk6, wall16);
    hawkMovement(hawk6, wall17);
    hawkMovement(hawk6, wall18);
    hawkMovement(hawk6, wall19);
    hawkMovement(hawk6, wall20);

    if (wallGroup.isTouching(bunny)) {
      bunny.collide(wallGroup);
    }

    if (bunny.isTouching(home)) {
      gameState = END;
      homeFlag = true;

    }
    if (keyDown(LEFT_ARROW)) {
      bunny.x = bunny.x - 3;
    }

    if (keyDown(RIGHT_ARROW)) {
      bunny.x = bunny.x + 3;
    }

    if (keyDown(DOWN_ARROW)) {
      bunny.y = bunny.y + 3;
    }

    if (keyDown(UP_ARROW)) {
      bunny.y = bunny.y - 3;
    }

    if (hawkGroup.isTouching(bunny)) {
      lives = lives - 1;
      eatbunnySound.play();
    }

    if (lives <= 0) {
      gameState = END;
    }

    if (carrotGroup.isTouching(bunny)) {
      carrotGroup.destroyEach();
      score = score + 5;
      eatcarrotsSound.play();
      eatcarrotsSound.setVolume(0.2);
    }
    spawnCarrots();
    drawSprites();
  }
  else {
    fill("orange");
    textSize(36);
    if (homeFlag === true) {
      text("Bunny reached home!", 200,350);
      text("GAME OVER", 250, 410);
    }
    else {
      text("GAME OVER", 250, 350);
    }


  }
  fill("white");
  textSize(30);
  text("Score: " + score, 300, 30);
}

function hawkMovement(object1, object2) {
  if (object1.isTouching(object2)) {
    object1.bounceOff(object2);
  }
}

function spawnCarrots() {
  if (frameCount % 80 === 0) {
    carrot = createSprite(Math.round(random(100, 600)), Math.round(random(100, 600)));
    carrot.addImage(carrotImg);
    carrot.scale = 0.15;
    carrot.lifetime = 250;
    carrotGroup.add(carrot);
  }
}

