let a = 1;

while (a <= 10) {
  console.log(a);
  a++;
}

console.log("done with while loop");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("done with for loop");

for (let triangle = "#"; triangle.length <= 7; triangle += "#") {
  console.log(triangle);
}

/* FIZZBUZZ
Print 1 to 100 to the console, except if the number is divisible by 3
then print fizz or if the number is divisible by 5 print buzz. If the
number is divisible by 3 and 5 print fizzbuzz.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  else if (i % 3 === 0) {
    console.log("fizz");
  }
  else if (i % 5 === 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}