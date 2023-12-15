let radius = 10;

const circleArea = () => {
  return Math.PI * Math.pow(radius, 2);
};

console.log(circleArea());

const circumference = () => {
  return 2 * Math.PI * radius;
};

console.log(circumference());
