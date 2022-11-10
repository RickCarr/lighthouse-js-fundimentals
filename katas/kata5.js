const urlEncode = function(text) {
  urlText = "";
  for (let i of text.trim()) {
    if (i === " ") {
      urlText += "%20";
    } else urlText += i;
  }
  return urlText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));