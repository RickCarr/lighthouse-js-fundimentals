const repeatNumbers = function(data) {
  let string = "";
  for (let i of data) {
    if (string !== "") {
      string += ", ";
    }
    for (let repeat = 0; repeat < i[1]; repeat++ ) {
      string += i[0];
    }
  }
  return string;
}
/*  **alternate method with ? : input **
const repeatNumbers = function(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    (str !== "") ? str += ", " : str;
    for (let j = 0; j < data[i][1]; j++) {
      str += data[i][0]
    }
  }
  return str; 
}*/
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));