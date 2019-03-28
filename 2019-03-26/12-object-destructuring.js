const pointsJ = [
  { x: 1 / 2, y: 29 / 63 },
  { x: 1 / 2, y:  7 /  8 },
  { x: 1 / 4, y:  7 /  8 },
];

const pointsFormattedJ = [];
for (let i = 0; i < pointsJ.length; i += 1) {
  // step 2
  // assign variables x and y by object destructuring
  const {x,y} = points
  // const xToString = TODO;
  const xToString = points.x.toString();
  // const yToString = TODO;
const yToString = points.y.toString();
  // step 4
  // const xToFixed3 = TODO;
  const xToFixed3 = points.x.toFixed3();
  // const yToFixed3 = TODO;
const xToFixed3 = points.y.toFixed3();
  // step 6
  // assign to xShorter the shorter string xToString or xToFixed3
  
  // assign to yShorter the shorter string yToString or yToFixed3

  //pointsFormattedJ[i] = `${TODO},${TODO}`;
}

const points = pointsFormattedJ.join(' ');
console.log(points);
