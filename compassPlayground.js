/* X MARKS THE PERFECT SPOT
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
function finalPosition(directions) {
  let x = 0;
  let y = 0;
  for (let direction of directions) {
    if (direction === 'north') {
      y++;
    }
    else if (direction === 'south') {
      y--;
    }
    else if (direction === 'east') {
      x++;
    }
    else if (direction === 'west') {
      x--;
    }
  }
  return [x,y];
}
console.log(finalPosition(moves));
*/

/* AGE CALCULATOR

function ageCalculator(name, yearOfBirth, currentYear) {
  return (name + " is " + (currentYear - yearOfBirth) + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

/* HOW MANY HUNDREDS FUNCTION

function howManyHundreds(num) {
  return Math.floor (num / 100);
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/
/* AREA CALCULATOR
function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    const rec = length * width;
    if (rec >= 0) {
      return rec;
    }
  }
}
function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    const tri = base * height / 2;
    if (tri >= 0) {
      return tri;
    }
  }
}
function calculateCircleArea(radius) {
  if (radius >= 0) {
    const cir = Math.PI * (radius * radius);
    if (cir > 0) {
      return cir;
    }
  }
}
*/
/*  ARRAY MAP EXAMPLE
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(addTip) {
  addTip *=1.15;
  return Number(addTip.toFixed(2));
});
console.log(totals);
*/
/*
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var row = 0; row < numbers.length; row++) {
  for (var col = 0; col < numbers[row].length; col++) {
    if (numbers[row][col] % 2 === 0) 
      numbers[row][col] = "even";        
    else numbers[row][col] = "odd";        
  }
}
;

console.log(numbers);
*/
/*  Looping Range Array 
function range(start, end, step) {
  const rangeArray = [];
  start = (start + 0);
  end = (end + 0);
  step = (step + 0);
  if ((start <= end) && (step > 0)) {
    for (var x = start; x <= end; x = x + step) {
      rangeArray.push(x);
    }
    return rangeArray;
  }
  else return rangeArray;
}
  
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/
/* "LAST INDEX OF" FUNCTION
function lastIndexOf(ra, x) {
  for (let last = ra.length - 1; last >= 0; last--) {
    if (ra[last] === x) {
      return last;      
    }
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/
/*  CONCATENATE ARRAYS WITHOUT .METHOD
function concat(ra1, ra2) {
  const newArray = [];
  ra1.forEach(function(likes) {
    newArray.push(likes);
  });
  ra2.forEach(function(likes) {
    newArray.push(likes);
  });
  return newArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([5, 10], []), "=?", [ 5, 10 ]);
*/
/* 
 * DONUT OBJECT ARRAY WITH FOREACH FUNCTION FOR EDITING*

 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
  donuts.forEach(function(donut) {
  console.log(donut.type+" donuts cost $"+donut.cost+" each");
});
console.log('------------ c style for loop --------------');
for (let i = 0; i < donuts.length; i++) {
  console.log(donuts[i].type + " donuts cost $" + donuts[i].cost + " each");
}
console.log('------------- for in -----------------------');
for (let i in donuts) {
  console.log(donuts[i].type + " donuts cost $" + donuts[i].cost + " each");
}
console.log("--------------- for of ------------------"); 
for (let val of donuts) {
  console.log(val);
  console.log(val.type + " donuts cost $" + val.cost + " each");
}
*/
/*SMART GARBAGE OBJECT FUNCITON(arrays)
const smartGarbage = function (trash, bins) {
  bins[trash] = bins[trash] + 1;
  console.log(bins);
  return bins;
};
smartGarbage('recycling', { waste: 10, recycling: 10, compost: 10 });
*/


/* SETTING INTERVAL DESYCHRONICITY
const sayHello = function(string, count) {  // Now printing 'Hello'...
  if (count === 1) { // Stop the press!
    clearInterval(timer);
    return string;
  }
  return string + sayHello(string, count - 1);
}
const timer = setInterval(sayHello, 3000);

console.log(sayHello("Hello\n", 5))
*/
/* DRIVING MAYOR DAISY
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38
const carPassing = function (cars, speed) {
  cars.push( 
    {
      time: Date.now(), 
      speed
    }
  );
  return cars;
};
carPassing(cars, speed);
*/
/* parameters for JUDGE VEGETABLE
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';
const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let index = 0;
  for (let i in vegetables) {
    if (vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      index = i;
    }        
  }
  return vegetables[index].submitter;  
};
judgeVegetable(vegetables, metric)
*/
//working but not passiing in compass version of above:
/*
 const judgeVegetable = function (vegetables, metric) {
  let max = 0
  for (let i in vegetables) {
    if (vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      console.log(vegetables[i].submitter);
    }    
  }  
};
judgeVegetable(vegetables, metric)
*/

