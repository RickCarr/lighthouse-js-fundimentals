for (let hundo = 100; hundo <= 200 ; hundo++) {
  if ((hundo % 3 === 0) && (hundo % 4 === 0)) {
    console.log("LoopyLighthouse");
  }
  else if (hundo % 3 === 0) {
    console.log("Loopy");
  }
  else if (hundo % 4 === 0) {
    console.log("Lighthouse")
  }
  else { 
    console.log(hundo);
  }
}