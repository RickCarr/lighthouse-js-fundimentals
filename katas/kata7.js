const checkAir = function (samples, threshold) {
  let dirty = 0;
  for (let i in samples) {
    if (samples[i] === 'dirty') {
      dirty++;
    }
  }
    if ((dirty / samples.length) > threshold) {
      return 'Polluted';
    } else {
      return 'Clean';
  }   
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
