function setup() {
  createCanvas(700, 200);
  background(0);
}

function draw() {
  
  for(x = 0; x < width; x+= 50){
    iceCream(x, 100, 100)
  }
    
}

function iceCream(x, y, size){
  
  fill(227, 208, 191)
  triangle(x, y + size/3, x - size/6, y - size/3, x + size/6, y - size/3);
  
  let flavor = color(random(255), random(255), random(255));
  
  fill(flavor);
  arc(x, y - size/3, size/ 3, size/ 3, PI, 0)
  
  stroke(255)
  


}