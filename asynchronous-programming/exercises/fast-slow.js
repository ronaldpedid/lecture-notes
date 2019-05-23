function slowFunction() {
  setTimeout(() => {
    console.log("Slow");
  }, 5000);
}

function fastFunction() {
  setTimeout(() => {
    console.log("Fast");
  }, 2000);
}

slowFunction();
fastFunction();