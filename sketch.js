
var r = 50;
var g = 50;
var b=55;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  background("white");

}


function draw(){
 

 var x2 = map(mouseX,0,width,0,1200,true);
 r,g,b = mouseX/3;
 ellipse(x2, 75,50,50);  
if (mouseX>25){
 background(r, g, b); 
 ellipse(x2, 75,50,50);  
}


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}