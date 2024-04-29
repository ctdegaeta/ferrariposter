let img3;
 
let img2;

let img;

let img4;

let img5;

let img6;

let img7;

class Car {
  

  //blah blah blah scenario construction stuff
  
  constructor(Color, x, y) {
    this.color = Color;
    this.doors = 4;
    this.isConvertible = false;
    this.x = x;
    this.y = y;
    this.speed = 0;
  }

  //SPEED CAN SET ALL CARS TO ONE CONSTANT SPEED
  
  start(speed) { // method expects parameter
    this.speed = speed;
  }

  display() { // method
   
    
    
    //LAST TWO NUMBERS CONTROL SCALE / x and y control direction
    
    image(img, this.x, this.y, 375, 140);
    image(img2, this.x + 500, this.y, 380, 180);    
    image(img6, this.x + 950, this.y,375, 125);
  }

  
  
   //SPEED **IF INTERGER IS NEGATIVE CAR MOVES BACKWARDS** also this code controls user interaction of car speed
  
  move() {
    
    
    if (mouseIsPressed) {
      
 rav4.start(90.618);
  charger.start(85.618);
  nova.start(80.618);
      
  frameRate(30)
  } else {
    
  rav4.start(10);
  charger.start(7.5);
  nova.start(5);
    
    frameRate(30);
   
  }
  
    //BELOW INTERGERS CAN CHANGE WHEN THE IMAGE APPEARS ON SCREEN SO THAT THE IMAGE MAY APPEAR OUT OF THE BOUNDARIES OF THE CANVAS BEFOREHAND***
    
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -1300) {
      this.x = width;
    } else if (this.x > width)   
      this.x = -1300;
      
      this.z += this.speed;
    if (this.z < -900) {
      this.z = width;
    } else if (this.z > width) {
      this.z = -900;
    }
    
  }
}
 //end class Car

let rav4;
let charger;
let nova;

//PRELOAD ALLOWS IMAGES TO BE RENDERED INSTANTLY

function preload() {
  
  font = loadFont('FerroRosso.ttf');
  
  font2 = loadFont('TALEX.otf');
  
  img = loadImage('ferrari 458 GT2.png'); 

  img2 = loadImage('ferrari f40 v1.png');
  
  img3 = loadImage('ferrari countach.png');
  
  img4 = loadImage('horse.png');
  
  img5 = loadImage('transmission1.png');
  
  img6 = loadImage('red.png');
  
  img7 = loadImage('horse2.png')
}

function setup() {
  createCanvas(500, 830);
  /* Construct the 3 Cars */
  //constructor expects cColor, x, y
  rav4 = new Car(0, -900, 475);
  charger = new Car(0, -900, 312.5);  
  nova = new Car(0, -900, 150);
  nova.doors = 0; //update nova's doors property
  
  console.log("rav4", rav4);
  console.log("charger", charger);
  console.log("nova", nova);
  
  //SPEED **IF INTERGER IS NEGATIVE CAR MOVES BACKWARDS**
  
 // rav4.start(15);
  //charger.start(12.5);
 // nova.start(10);
  
}

function draw() 


{
  
  //grey
  background(250,200,200);
  noStroke();
  fill(215);
  rect(50,50,400,600);
  //green
  //fill(10,51,11,150)
  //rect(250, 0, 250, 700)
  
  
  //TEXT & FONT
   push()
 
  textFont(font);
  
  textSize(95);
  textAlign(CENTER, CENTER);
  fill(100);
  text('Ferrari', 245,100);
  
  
  fill(255,0,0);
  textSize(95);
  textAlign(CENTER, CENTER);
  text('Ferrari', 250, 95);
  
  pop()

  rav4.display(); 
  
  charger.display();
  nova.display();
  
  rav4.move();
  charger.move();
  nova.move();
  
  //Outside barrier rectangle
 
  stroke(250,180,175);
  strokeWeight(100);
  noFill();
  rect(0,0,500,700,60);
  rect(500,0,100,700);
  rect(500,0,200,700);
  
  push();

  fill(250,180,175);
  //rect(350,540,200,700,30);
  rect(0,700,500,300)

  pop()
  
  //we are the competition - bottom text
  
  {
  textFont(font2)
  
  textSize(12);
  noStroke();
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text('we are the competition', 250, 672.5);
  textSize(9);
  textLeading(15);
  text('F40                                           GT2', 250,27.5 );
    textSize(12);
 // text('Born of the spirit of racing, Ferrari epitomises the power of a lifelong passion and the beauty of limitless human achievement, creating timeless icons for a changing world. We build cars. Symbols of Italian excellence the world over, and we do so to win on both road and track. Unique creations that fuel the Prancing Horse legend and generate a world of dreams and emotions',480,46,190,365)
    text('click here',530,580,100,100)
    push()
    // BUTTON / MANUAL TRANSMISSION
    //image(img4,50,500,210,150)
     
   // image(img7,80,720,100,70)
   // image(img4,50,720,100,70)
    
   // image(img7,5,720,100,70)
   image(img4,225,15,50,30)
pop()
push()

    image(img5, 170, 680,150,150);
    if (mouseIsPressed) {
       tint(0,0,255,75)
  image(img5, 170, 680,150,150);
     
      
pop() 
    }
}

  
}

 
