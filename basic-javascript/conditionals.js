/*
A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Log true if the party with the given values is successful, or false otherwise.
*/
let cigars = 100;
let isWeekend = true;
let isSuccessfulParty;

if ((cigars >= 40 && cigars <= 60) || (cigars >= 40 && isWeekend)) {
  isSuccessfulParty = true;
}
else {
  isSuccessfulParty = false;
}

console.log(isSuccessfulParty);

let a = 5;
let b = 15;

if (a > b) {
  console.log("a:" + a);
}
else {
  console.log("b:" + b);
}