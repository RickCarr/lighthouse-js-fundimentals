const instructorWithLongestName = function(instructors) {
  let iLong = ""
  let index = ""
  for (let i of instructors) {
    let iName = i.name;
    if (iName.length >= iLong.length) {
      iLong = iName;
    }
    if (iLong === i.name) {
      index = i;
    }
  }
  return index;
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));