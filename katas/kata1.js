const sumLargestNumbers = function(data) {
  if (data.length === 2) {
    return data[0] + data[1];
  } else {
    let large1 = data[0];
    let large2 = data[1];
    for (let i of data) {
      if (data[i] > large1 ) {
        large1 = data[i];
      } else if (data[i] > large2) {
        large2 = data[i];
      }
    };
    return large1 + large2;
  }
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));