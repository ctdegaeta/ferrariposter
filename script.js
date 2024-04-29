
const text = document.querySelector('h2');

text.style.color='blue';
text.style.fontSize = 50 + 'px';

let size = 50;
document.querySelector('button').addEventListener('click', function(){

	
	size++;

	text.style.fontSize = size + 'px';

	console.log(size);

});

function setup() {
  createCanvas(600, 600);
  background(255,0,0);
  rectMode(CENTER);
  stroke(255,255,255);
  fill(155,254,101);
  rect(300,300,40,40);
  stroke(60,90,108);
  noStroke();
  fill(180,54,20);
  rect(260,260,40,40);
}
