// return the count of the objects where o.x = o.y.
function getCount(objects) {
  let count = 0; //initialize the count from 0
  //I have used the map method which itterates for a given array till it has elements.
  objects.map((o) => (o.x === o.y ? count++ : ""));

  return count;
}

function main() {
  const n = +readLine();
  let objects = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = readLine().split(" ");

    objects.push({ x: +a, y: +b });
  }

  console.log(getCount(objects));
}
