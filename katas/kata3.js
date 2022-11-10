const numberOfVowels = function(data) {
  let vowels = 0;
  for (let i of data) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      vowels++;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));