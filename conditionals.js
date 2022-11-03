
const raining = false;
const cold = false;
const temp = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15) {
console.log("short sleeves won't cut it!");
} else {
console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}