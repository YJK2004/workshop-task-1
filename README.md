# workshop-task-1

URL: https://yjk2004.github.io/workshop-task-1/

### function: iceCream
- set a stroke to (255)
- looked up the RGB for icecream cone color: fill(227, 208, 191)
  
![Unknown](https://github.com/YJK2004/workshop-task-1/assets/162935954/b4a2970c-57bd-41c7-8f68-878c04742806)

- made cone shape out of triangle: triangle(x, y + size/3, x - size/6, y - size/3, x + size/6, y - size/3);

- made scoope shape out of arc: arc(x, y - size/3, size/ 3, size/ 3, PI, 0)
- named 'flavor' for color of the scoope, wanted to make them random flavor:
let flavor = color(random(255), random(255), random(255));

### loops
- wanted to make 50 gap between icecreams: for(x = 0; x < width; x+= 50){iceCream(x, 100, 100)}

### setup
- I wanted this live to look like a one long pattern so I changed a canvas size: createCanvas(700, 200);
- to emphasise the crazy of icecream flavor, changed background color to black: background(0);
