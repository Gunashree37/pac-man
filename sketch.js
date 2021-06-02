function preload() {
    g1 = loadAnimation("g11.png", "g12.png", "g13.png", "g14.png")
    g2 = loadAnimation("g21.png", "g22.png", "g23.png", "g24.png")
    g3 = loadAnimation("g31.png", "g32.png", "g33.png", "g34.png")
    cherryImg = loadImage("cherry.png");
    deadg = loadImage("deadg.png");
    pacR = loadImage("pacR.png");
    pacL = loadImage("pacL.png");
    pacD = loadImage("pacD.png");
    pacU = loadImage("pacU.png");
    heart = loadImage("heart.jpg");

}

function setup() {
    createCanvas(960, 500);
    Pac_Man = createSprite(600, 465, 15, 15);
    Pac_Man.addImage(pacU);
    Pac_Man.scale = 0.15;

    //google
    c1 = createSprite(200, 115, 100, 10);
    c2 = createSprite(155, 210, 10, 200);
    c3 = createSprite(200, 315, 100, 10);
    c4 = createSprite(255, 275, 10, 90);
    c5 = createSprite(237, 230, 45, 10);
    c6 = createSprite(300, 275, 10, 90);
    c7 = createSprite(380, 275, 10, 90);
    c8 = createSprite(340, 230, 90, 10);
    c9 = createSprite(340, 320, 90, 10);
    c10 = createSprite(465, 320, 90, 10);
    c11 = createSprite(465, 230, 90, 10);
    c12 = createSprite(425, 275, 10, 90);
    c13 = createSprite(505, 275, 10, 90);
    c14 = createSprite(700, 230, 10, 200);
    c15 = createSprite(772, 225, 65, 10);
    c16 = createSprite(745, 280, 10, 100);
    c17 = createSprite(772, 325, 65, 10);
    c18 = createSprite(800, 245, 10, 50);
    c19 = createSprite(773, 270, 65, 10);
    c20 = createSprite(600, 280, 100, 10);
    c21 = createSprite(550, 248, 10, 75);
    c22 = createSprite(650, 248, 10, 75);

    //cornerSprites
    c23 = createSprite(500, 500, 1000, 15);
    c24 = createSprite(500, 0, 1000, 15);
    c25 = createSprite(960, 50, 15, 200);
    c26 = createSprite(960, 400, 15, 200);
    c27 = createSprite(0, 50, 15, 200);
    c28 = createSprite(0, 400, 15, 200);
    c29 = createSprite(910, 155, 100, 10);
    c30 = createSprite(910, 300, 100, 10);
    c31 = createSprite(50, 155, 100, 10);
    c32 = createSprite(50, 300, 100, 10);
    c33 = createSprite(910, 195, 100, 10);
    c34 = createSprite(910, 260, 100, 10);
    c35 = createSprite(50, 195, 100, 10);
    c36 = createSprite(50, 260, 100, 10);
    c37 = createSprite(860, 175, 10, 50);
    c38 = createSprite(860, 280, 10, 50);
    c39 = createSprite(97, 175, 10, 50);
    c40 = createSprite(97, 280, 10, 50);

    //insideMaze
    c41 = createSprite(80, 70, 50, 10);
    c42 = createSprite(95, 405, 80, 10);
    c43 = createSprite(290, 405, 200, 10);
    c44 = createSprite(410, 160, 200, 10);
    c45 = createSprite(260, 60, 200, 10);
    c46 = createSprite(420, 58, 10, 100);
    c47 = createSprite(570, 60, 200, 10);
    c48 = createSprite(600, 150, 110, 10);
    c49 = createSprite(600, 130, 10, 30);
    c50 = createSprite(720, 40, 10, 80);
    c51 = createSprite(780, 160, 70, 10);
    c52 = createSprite(780, 80, 10, 60);
    c53 = createSprite(870, 80, 70, 10);
    c54 = createSprite(440, 440, 10, 100);
    c55 = createSprite(600, 350, 110, 10);
    c56 = createSprite(600, 375, 10, 50);
    c57 = createSprite(535, 450, 10, 90);
    c58 = createSprite(665, 450, 10, 90);
    c59 = createSprite(815, 400, 200, 10);

    c1.shapeColor = "blue";
    c2.shapeColor = "blue";
    c3.shapeColor = "blue";
    c4.shapeColor = "blue";
    c5.shapeColor = "blue";
    c6.shapeColor = "blue";
    c7.shapeColor = "blue";
    c8.shapeColor = "blue";
    c9.shapeColor = "blue";
    c10.shapeColor = "blue";
    c11.shapeColor = "blue";
    c12.shapeColor = "blue";
    c13.shapeColor = "blue";
    c14.shapeColor = "blue";
    c15.shapeColor = "blue";
    c16.shapeColor = "blue";
    c17.shapeColor = "blue";
    c18.shapeColor = "blue";
    c19.shapeColor = "blue";
    c20.shapeColor = "blue";
    c21.shapeColor = "blue";
    c22.shapeColor = "blue";
    c23.shapeColor = "blue";
    c24.shapeColor = "blue";
    c25.shapeColor = "blue";
    c26.shapeColor = "blue";
    c27.shapeColor = "blue";
    c28.shapeColor = "blue";
    c29.shapeColor = "blue";
    c30.shapeColor = "blue";
    c31.shapeColor = "blue";
    c32.shapeColor = "blue";
    c33.shapeColor = "blue";
    c34.shapeColor = "blue";
    c35.shapeColor = "blue";
    c36.shapeColor = "blue";
    c37.shapeColor = "blue";
    c38.shapeColor = "blue";
    c39.shapeColor = "blue";
    c40.shapeColor = "blue";
    c41.shapeColor = "blue";
    c42.shapeColor = "blue";
    c43.shapeColor = "blue";
    c44.shapeColor = "blue";
    c45.shapeColor = "blue";
    c46.shapeColor = "blue";
    c47.shapeColor = "blue";
    c48.shapeColor = "blue";
    c49.shapeColor = "blue";
    c50.shapeColor = "blue";
    c51.shapeColor = "blue";
    c52.shapeColor = "blue";
    c53.shapeColor = "blue";
    c54.shapeColor = "blue";
    c55.shapeColor = "blue";
    c56.shapeColor = "blue";
    c57.shapeColor = "blue";
    c58.shapeColor = "blue";
    c59.shapeColor = "blue";

    ghost1 = createSprite(570, 200);
    ghost1.addAnimation("ghost1", g1);
    ghost1.changeAnimation("ghost1");
    ghost1.scale = 0.7;
    // ghost1.velocityY = 4;

    ghost2 = createSprite(630, 200);
    ghost2.addAnimation("ghost2", g2);
    ghost2.changeAnimation("ghost2");
    ghost2.scale = 0.7;
    //ghost2.velocityY = 5;

    ghost3 = createSprite(600, 250);
    ghost3.addAnimation("ghost3", g3);
    ghost3.changeAnimation("ghost3");
    ghost3.scale = 0.7;
    //ghost3.velocityY = 4;

    heart1 = createSprite(115, 350);
    heart1.addImage("heart");
    heart1.scale = 2;

    heart2 = createSprite(200, 350);
    heart2.addImage("heart");
    heart2.scale = 2;

    heart3 = createSprite(285, 350);
    heart3.addImage("heart");
    heart3.scale = 2;


    //pellets
    for (var i = 0; i < 140; i = i + 20) {
        var p1 = createSprite(i, 225, 10, 10, 10);
        p1.shapeColor = "yellow";
    }
    for (var i = 240; i < 380; i = i + 20) {
        var p2 = createSprite(125, i, 10, 10, 10);
        p2.shapeColor = "yellow";
    }
    for (var i = 35; i < 580; i = i + 20) {
        var p3 = createSprite(i, 370, 10, 10, 10);
        p3.shapeColor = "yellow";
    }
    for (var i = 390; i < 460; i = i + 20) {
        var p4 = createSprite(30, i, 10, 10, 10);
        p4.shapeColor = "yellow";
    }
    for (var i = 35; i < 420; i = i + 20) {
        var p5 = createSprite(i, 450, 10, 10, 10);
        p5.shapeColor = "yellow";
    }
    for (var i = 390; i < 460; i = i + 20) {
        var p6 = createSprite(160, i, 10, 10, 10);
        p6.shapeColor = "yellow";
    }
    for (var i = 390; i < 460; i = i + 20) {
        var p7 = createSprite(410, i, 10, 10, 10);
        p7.shapeColor = "yellow";
    }
    for (var i = 390; i < 480; i = i + 20) {
        var p8 = createSprite(490, i, 10, 10, 10);
        p8.shapeColor = "yellow";
    }
    for (var i = 390; i < 480; i = i + 20) {
        var p9 = createSprite(570, i, 10, 10, 10);
        p9.shapeColor = "yellow";
    }
    for (var i = 390; i < 480; i = i + 20) {
        var p10 = createSprite(630, i, 10, 10, 10);
        p10.shapeColor = "yellow";
    }
    for (var i = 390; i < 480; i = i + 20) {
        var p11 = createSprite(695, i, 10, 10, 10);
        p11.shapeColor = "yellow";
    }
    for (var i = 390; i < 480; i = i + 20) {
        var p12 = createSprite(930, i, 10, 10, 10);
        p12.shapeColor = "yellow";
    }
    for (var i = 630; i < 950; i = i + 20) {
        var p13 = createSprite(i, 370, 10, 10, 10);
        p13.shapeColor = "yellow";
    }
    for (var i = 695; i < 950; i = i + 20) {
        var p14 = createSprite(i, 470, 10, 10, 10);
        p14.shapeColor = "yellow";
    }
    for (var i = 20; i < 210; i = i + 20) {
        var p15 = createSprite(125, i, 10, 10, 10);
        p15.shapeColor = "yellow";
    }
    for (var i = 30; i < 120; i = i + 20) {
        var p16 = createSprite(i, 35, 10, 10, 10);
        p16.shapeColor = "yellow";
    }
    for (var i = 30; i < 120; i = i + 20) {
        var p16 = createSprite(i, 105, 10, 10, 10);
        p16.shapeColor = "yellow";
    }
    for (var i = 30; i < 100; i = i + 20) {
        var p17 = createSprite(30, i, 10, 10, 10);
        p17.shapeColor = "yellow";
    }
    for (var i = 140; i < 400; i = i + 20) {
        var p18 = createSprite(i, 30, 10, 10, 10);
        p18.shapeColor = "yellow";
    }
    for (var i = 140; i < 400; i = i + 20) {
        var p19 = createSprite(i, 85, 10, 10, 10);
        p19.shapeColor = "yellow";
    }
    for (var i = 450; i < 700; i = i + 20) {
        var p20 = createSprite(i, 30, 10, 10, 10);
        p20.shapeColor = "yellow";
    }
    for (var i = 450; i < 700; i = i + 20) {
        var p21 = createSprite(i, 85, 10, 10, 10);
        p21.shapeColor = "yellow";
    }
    for (var i = 55; i < 60; i = i + 20) {
        var p22 = createSprite(380, i, 10, 10, 10);
        p22.shapeColor = "yellow";
    }
    for (var i = 55; i < 60; i = i + 20) {
        var p23 = createSprite(450, i, 10, 10, 10);
        p23.shapeColor = "yellow";
    }
    for (var i = 55; i < 60; i = i + 20) {
        var p24 = createSprite(690, i, 10, 10, 10);
        p24.shapeColor = "yellow";
    }
    for (var i = 55; i < 120; i = i + 20) {
        var p25 = createSprite(750, i, 10, 10, 10);
        p25.shapeColor = "yellow";
    }
    for (var i = 55; i < 120; i = i + 20) {
        var p26 = createSprite(810, i, 10, 10, 10);
        p26.shapeColor = "yellow";
    }
    for (var i = 55; i < 120; i = i + 20) {
        var p27 = createSprite(925, i, 10, 10, 10);
        p27.shapeColor = "yellow";
    }
    for (var i = 740; i < 950; i = i + 20) {
        var p28 = createSprite(i, 35, 10, 10, 10);
        p28.shapeColor = "yellow";
    }
    for (var i = 740; i < 950; i = i + 20) {
        var p29 = createSprite(i, 140, 10, 10, 10);
        p29.shapeColor = "yellow";
    }
    for (var i = 835; i < 1000; i = i + 20) {
        var p30 = createSprite(i, 225, 10, 10, 10);
        p30.shapeColor = "yellow";
    }
    for (var i = 290; i < 350; i = i + 20) {
        var p31 = createSprite(i, 125, 10, 10, 10);
        p31.shapeColor = "yellow";
    }
    for (var i = 125; i < 355; i = i + 20) {
        var p32 = createSprite(285, i, 10, 10, 10);
        p32.shapeColor = "yellow";
    }
    for (var i = 180; i < 270; i = i + 20) {
        var p33 = createSprite(i, 170, 10, 10, 10);
        p33.shapeColor = "yellow";
    }
    for (var i = 170; i < 280; i = i + 20) {
        var p34 = createSprite(180, i, 10, 10, 10);
        p34.shapeColor = "yellow";
    }
    for (var i = 180; i < 250; i = i + 20) {
        var p35 = createSprite(i, 275, 10, 10, 10);
        p35.shapeColor = "yellow";
    }
    for (var i = 300; i < 520; i = i + 20) {
        var p36 = createSprite(i, 190, 10, 10, 10);
        p36.shapeColor = "yellow";
    }
    for (var i = 190; i < 360; i = i + 20) {
        var p37 = createSprite(400, i, 10, 10, 10);
        p37.shapeColor = "yellow";
    }
    for (var i = 615; i < 750; i = i + 20) {
        var p38 = createSprite(i, 120, 10, 10, 10);
        p38.shapeColor = "yellow";
    }
    for (var i = 120; i < 360; i = i + 20) {
        var p37 = createSprite(720, i, 10, 10, 10);
        p37.shapeColor = "yellow";
    }
    for (var i = 740; i < 830; i = i + 20) {
        var p38 = createSprite(i, 190, 10, 10, 10);
        p38.shapeColor = "yellow";
    }
    for (var i = 140; i < 360; i = i + 20) {
        var p39 = createSprite(835, i, 10, 10, 10);
        p39.shapeColor = "yellow";
    }

}

function draw() {
    background("black");
    Pac_Man.shapeColor = "pink";

    if (keyDown(UP_ARROW)) {
        Pac_Man.addImage(pacU)

        Pac_Man.y -= 4;
    }
    if (keyDown(DOWN_ARROW)) {
        Pac_Man.addImage(pacD)

        Pac_Man.y += 4;
    }
    if (keyDown(RIGHT_ARROW)) {
        Pac_Man.addImage(pacR)
        Pac_Man.x += 4;

    }
    if (keyDown(LEFT_ARROW)) {
        Pac_Man.addImage(pacL)
        Pac_Man.x -= 4;

    }




    edges = createEdgeSprites();
    Pac_Man.bounceOff(edges);
    Pac_Man.bounceOff(c1);
    Pac_Man.bounceOff(c2);
    Pac_Man.bounceOff(c3);
    Pac_Man.bounceOff(c4);
    Pac_Man.bounceOff(c5);
    Pac_Man.bounceOff(c6);
    Pac_Man.bounceOff(c7);
    Pac_Man.bounceOff(c8);
    Pac_Man.bounceOff(c9);
    Pac_Man.bounceOff(c10);
    Pac_Man.bounceOff(c11);
    Pac_Man.bounceOff(c12);
    Pac_Man.bounceOff(c13);
    Pac_Man.bounceOff(c14);
    Pac_Man.bounceOff(c15);
    Pac_Man.bounceOff(c16);
    Pac_Man.bounceOff(c17);
    Pac_Man.bounceOff(c18);
    Pac_Man.bounceOff(c19);
    Pac_Man.bounceOff(c20);
    Pac_Man.bounceOff(c21);
    Pac_Man.bounceOff(c22);
    Pac_Man.bounceOff(c23);
    Pac_Man.bounceOff(c24);
    Pac_Man.bounceOff(c25);
    Pac_Man.bounceOff(c26);
    Pac_Man.bounceOff(c27);
    Pac_Man.bounceOff(c28);
    Pac_Man.bounceOff(c29);
    Pac_Man.bounceOff(c30);
    Pac_Man.bounceOff(c31);
    Pac_Man.bounceOff(c32);
    Pac_Man.bounceOff(c33);

    Pac_Man.bounceOff(c34);
    Pac_Man.bounceOff(c35);
    Pac_Man.bounceOff(c36);
    Pac_Man.bounceOff(c37);
    Pac_Man.bounceOff(c38);
    Pac_Man.bounceOff(c39);
    Pac_Man.bounceOff(c40);
    Pac_Man.bounceOff(c41);
    Pac_Man.bounceOff(c42);
    Pac_Man.bounceOff(c43);
    Pac_Man.bounceOff(c44);
    Pac_Man.bounceOff(c45);
    Pac_Man.bounceOff(c46);
    Pac_Man.bounceOff(c47);
    Pac_Man.bounceOff(c48);
    Pac_Man.bounceOff(c49);
    Pac_Man.bounceOff(c50);
    Pac_Man.bounceOff(c51);
    Pac_Man.bounceOff(c52);
    Pac_Man.bounceOff(c53);
    Pac_Man.bounceOff(c54);
    Pac_Man.bounceOff(c55);
    Pac_Man.bounceOff(c56);
    Pac_Man.bounceOff(c57);
    Pac_Man.bounceOff(c58);
    Pac_Man.bounceOff(c59);



    drawSprites();
    textSize(20);
    fill("white");
    text(mouseX + " , " + mouseY, mouseX, mouseY);
}