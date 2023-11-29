/**
 * Arrays of Objects
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

function displayPtr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ',' + arr[i].y);
  }
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 5);
const p3 = new Point(2, 8);
const p4 = new Point(4, 4);

const points = [p1, p2, p3, p4];

for (let i = 0; i < points.length; ++i) {
  console.log(
    'Point ' + parseInt(i + 1) + ': ' + points[i].x + ', ' + points[i].y
  );
}

/**
 * Arrays in Objects
 */

class weekTemps {
  constructor() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
  }
}
function add(temp) {
  this.dataStore.push(temp);
}
function average() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

var thisWeek = new weekTemps();

thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);

console.log(thisWeek.average()); // 54.875
