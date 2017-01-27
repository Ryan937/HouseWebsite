//Variable Declarations
var x = 200;
var xLeft = 200;
var xRight = 200;
var xRight2 = 200;
var xRight3 = 200;
var y = 145;
var y2 = 145;
var y3 = 145;
var radius1 = 3;
var radius2 = 3;
var radius3 = 3;
var radius4 = 3;
var radiusWave = 5;
var userInput = 50;
var interval2;

var my_canvas = document.getElementById('myCanvas');
var ctx = my_canvas.getContext('2d');

function drawBackground() {
    //background
    ctx.fillStyle = '#00BFFF';
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 500);
    ctx.fill();
    ctx.closePath();

    //ground
    ctx.fillStyle = '#EEE8AA';
    ctx.beginPath();
    ctx.ellipse(250, 275, 80, 230, 90 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //sun
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, 2 * Math.PI, true);
    ctx.moveTo(8, 100);
    ctx.lineTo(35, 135);
    ctx.lineTo(38, 90);
    ctx.moveTo(60, 80);
    ctx.lineTo(100, 105);
    ctx.lineTo(85, 55);
    ctx.moveTo(95, 40);
    ctx.lineTo(145, 45);
    ctx.lineTo(110, 10);
    ctx.fill();
    ctx.closePath();
}

function drawDetails() {
    //for sale
    ctx.beginPath();
    ctx.moveTo(70, 275);
    ctx.lineTo(70, 315);
    ctx.moveTo(70, 275);
    ctx.lineTo(100, 275);
    ctx.moveTo(80, 275);
    ctx.lineTo(80, 281);
    ctx.moveTo(93, 275);
    ctx.lineTo(93, 281);
    ctx.stroke();
    ctx.closePath();

    //for sale sign
    ctx.fillStyle = 'red';
    ctx.fillRect(73, 281, 30, 20);
    ctx.closePath();

    //for sale text
    ctx.font = "1px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText("FOR", 75, 290);
    ctx.fillText("SALE", 75, 298);
    ctx.closePath();

    //SOS
    ctx.strokeStyle = '#BC8F8F';
    ctx.beginPath();
    ctx.moveTo(420, 270);
    ctx.lineTo(445, 270);
    ctx.moveTo(420, 270);
    ctx.lineTo(420, 285);
    ctx.moveTo(420, 285);
    ctx.lineTo(445, 285);
    ctx.moveTo(445, 285);
    ctx.lineTo(445, 300);
    ctx.moveTo(445, 300);
    ctx.lineTo(420, 300);
    ctx.moveTo(387, 295);
    ctx.lineTo(412, 295);
    ctx.lineTo(412, 320);
    ctx.lineTo(387, 320);
    ctx.lineTo(387, 295);
    ctx.moveTo(350, 305);
    ctx.lineTo(375, 305);
    ctx.moveTo(350, 305);
    ctx.lineTo(350, 320);
    ctx.moveTo(350, 320);
    ctx.lineTo(375, 320);
    ctx.moveTo(375, 320);
    ctx.lineTo(375, 335);
    ctx.moveTo(375, 335);
    ctx.lineTo(350, 335);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = 'black';
}

function drawWave() {
    //Horizon waves
    for (i = 5; i < 500; i+= 10) {
        ctx.beginPath();
        ctx.arc(i,190,5,0*Math.PI,1.*Math.PI) 
        ctx.stroke();
        ctx.closePath();
    }

    //Waves in the ocean
    ctx.beginPath();
    ctx.arc(40,350,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(50,350,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(60,350,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(70,350,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(80,350,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(120,380,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(130,380,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(140,380,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(150,380,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(160,380,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200,370,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(210,370,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220,370,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(230,370,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(270,385,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280,385,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(290,385,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300,385,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(310,385,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(350,350,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(360,350,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(370,350,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(380,350,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(430,375,5,0*Math.PI,0.5*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(440,375,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(450,375,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(460,375,5,0*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(470,375,5,0.5*Math.PI,1.*Math.PI) 
    ctx.stroke();
    ctx.closePath();
}

function drawCloud() {
    //White cloud
    ctx.beginPath();
    ctx.arc(380,100,15,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400,105,17,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(395,95,17,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(415,90,15,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(425,105,15,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(430,95,15,0,2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    //Lines on cloud
    ctx.beginPath();
    ctx.arc(425, 105,7,1.8*Math.PI,0.7*Math.PI) 
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(400, 95,7,0.1*Math.PI,0.7*Math.PI) 
    ctx.stroke();
    ctx.closePath();
}

function drawHouse() {    
    //left wall
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(115, 225); //top left
    ctx.lineTo(115, 310); //bottom left
    ctx.lineTo(245, 315); //bottom right
    ctx.lineTo(245, 230); //top right
    ctx.closePath();
    ctx.fill();

    //small middle wall
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(245, 230); //top left
    ctx.lineTo(245, 315); //bottom left
    ctx.lineTo(270, 303); //bottom right
    ctx.lineTo(270, 200); //top right
    ctx.closePath();
    ctx.fill();

    //right wall
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(328, 215); //top left
    ctx.lineTo(328, 303); //bottom left
    ctx.lineTo(380, 275); //bottom right
    ctx.lineTo(380, 215); //top right
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(380, 275);
    ctx.lineTo(380, 215);
    ctx.moveTo(380, 275);
    ctx.lineTo(328, 303);
    ctx.stroke();
    ctx.closePath();

    //right wall 2
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(328, 195); //top left
    ctx.lineTo(328, 215); //bottom left
    ctx.lineTo(380, 215); //bottom right
    ctx.lineTo(357, 158); //top right
    ctx.closePath();
    ctx.fill();

    //big middle wall
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(270, 200); //top left
    ctx.lineTo(270, 303); //bottom left
    ctx.lineTo(328, 303); //bottom right
    ctx.lineTo(328, 195); //top right
    ctx.closePath();
    ctx.fill();

    //big roof
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(160, 160); //top left
    ctx.lineTo(110, 230); //bottom left
    ctx.lineTo(250, 230); //bottom right
    ctx.lineTo(300, 155); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //small roof
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(300, 155); //top left
    ctx.lineTo(265, 200); //bottom left
    ctx.lineTo(330, 200); //bottom right
    ctx.lineTo(360, 154); //top right
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(300, 155);
    ctx.lineTo(360, 154);
    ctx.stroke();
    ctx.moveTo(330, 200);
    ctx.lineTo(360, 154);
    ctx.stroke();
    ctx.moveTo(330, 200);
    ctx.lineTo(268, 200);
    ctx.stroke();
    ctx.closePath();

    //other side roof
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(360, 155); //top left
    ctx.lineTo(355, 158); //bottom left
    ctx.lineTo(380, 215); //bottom right
    ctx.lineTo(387, 215); //top right
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(387, 215);
    ctx.lineTo(380, 215);
    ctx.stroke();
    ctx.moveTo(355, 160);
    ctx.lineTo(380, 215);
    ctx.stroke();
    ctx.moveTo(360, 155);
    ctx.lineTo(387, 215);
    ctx.stroke();
    ctx.closePath();

    //chimney
    ctx.fillStyle = '#778899';
    ctx.beginPath();
    ctx.moveTo(190, 145); //top left
    ctx.lineTo(190, 190); //bottom left
    ctx.lineTo(220, 190); //bottom right
    ctx.lineTo(220, 145); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //chimney2
    ctx.fillStyle = '#696969';
    ctx.beginPath();
    ctx.moveTo(220, 145); //top left
    ctx.lineTo(220, 190); //bottom left
    ctx.lineTo(235, 170); //bottom right
    ctx.lineTo(235, 145); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //door
    ctx.fillStyle = '#CD853F';
    ctx.beginPath();
    ctx.moveTo(275, 245); //top left
    ctx.lineTo(275, 303); //bottom left
    ctx.lineTo(310, 303); //bottom right
    ctx.lineTo(310, 245); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //doorknob
    ctx.beginPath();
    ctx.arc(283, 275, 3, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();

    //big window
    ctx.fillStyle = '#AFEEEE';
    ctx.beginPath();
    ctx.moveTo(145, 252); //top left
    ctx.lineTo(145, 305); //bottom left
    ctx.lineTo(220, 308); //bottom right
    ctx.lineTo(220, 253); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //window lines
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(170, 252);
    ctx.lineTo(170, 306);
    ctx.stroke();
    ctx.moveTo(195, 252);
    ctx.lineTo(195, 307);
    ctx.closePath();
    ctx.stroke();

    //small window
    ctx.fillStyle = '#AFEEEE';
    ctx.beginPath();
    ctx.moveTo(345, 232); //top left
    ctx.lineTo(345, 275); //bottom left
    ctx.lineTo(365, 265); //bottom right
    ctx.lineTo(365, 230); //top right
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();

    //window lines
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(355, 232);
    ctx.lineTo(355, 270);
    ctx.stroke();
    ctx.moveTo(345, 253);
    ctx.lineTo(365, 248);
    ctx.stroke();
    ctx.closePath();
}

function smokeSmall() {
    //Circles for small smoke that goes up FIRST
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.arc(xRight3 + 16, y2 - 9, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath(); 

    ctx.beginPath();
    ctx.arc(xRight3 + 21, y2 - 11, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(xRight3 + 20, y2 - 12, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath(); 
    
    ctx.beginPath();
    ctx.arc(xRight3 + 14, y2 - 10, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight2 + 16, y2 - 4, radius1, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath(); 
}

function smokeLarge() {
    //Circles for the large smoke in the middle
    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.arc(xRight2 + 13, y - 12, radius4, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight2 + 9, y - 5, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight + 18, y - 3, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight + 16, y - 3, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight2 + 13, y - 5, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .7;
    ctx.beginPath();
    ctx.arc(xRight2 + 13, y - 8, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.arc(xRight2 + 10, y - 10, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .7;
    ctx.beginPath();
    ctx.arc(xRight + 20, y + 4, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight + 20, y + 2, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight + 12, y - 4, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.arc(xRight + 10, y - 6, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xRight + 12, y - 5, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(x + 20, y + 6, radius3, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xLeft + 16, y + 4, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(xLeft + 14, y + 2, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
}

function afterSmoke() {
    //Smoke for the small smoke at that comes up at the END
    ctx.globalAlpha = .8;
    ctx.beginPath();
    ctx.arc(x + 8, y3 -3, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .5;
    ctx.beginPath();
    ctx.arc(xLeft + 8, y3 + 5, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = .8;
    ctx.beginPath();
    ctx.arc(xLeft + 5, y3 + 2, radius2, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath()
    
    ctx.globalAlpha = .5;
    ctx.beginPath();
    ctx.arc(xLeft + 6, y3 + 10, radius1, 0, 2 * Math.PI);
    ctx.fillStyle = 'grey';
    ctx.fill();
    ctx.closePath()
}

//Animates the smoke
function animate() {
    //Clears canvas before drawing every time
    ctx.clearRect(0, 0, 200, 500);
    //function draw containing all the img info
    draw();

    //Values changed for each Interval
    y -= 3;
    y2 -= 5;
    y3 -= 2;
    radius1 += .1;
    radius2 += .2;
    radius3 += .3;
    radius4 += .4;
    xLeft -= .1;
    xRight += .4;
    xRight2 += .8;
    xRight3 += 1.2;
    ctx.globalAlpha = 1;
    
    //IF statement to loop
    if (y3 < -10) {
        y = 145;
        y2 = 145;
        y3 = 145;
        radius1 = 3;
        radius2 = 3;
        radius3 = 3;
        radius4 = 3;
        xRight = 200;
        xLeft = 200;
        xRight2 = 200;
        xRight3 = 200;
    }
    
}

//Slider for toggle speed
function speed() {
    userInput = document.getElementById("myRange").value;
    
    clearInterval(interval2);
    interval2 = setInterval(animate, userInput);    
}

//Draws the included functions
function draw() {
    drawBackground();
    drawDetails();
    drawWave();
    drawCloud();
    drawHouse();
    smokeSmall();
    smokeLarge();
    afterSmoke();
}

//Starts animation
function animation() {
    animate();
    speed();
}