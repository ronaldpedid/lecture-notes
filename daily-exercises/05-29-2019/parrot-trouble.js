/*
We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.


parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*/

function parrotTrouble(isTalking, hour) {
  if (hour < 0 || hour > 23) {
    throw new Error("Invalid time.");
  }

  return isTalking && (hour < 7 || hour > 20);
}

try {
  console.log(parrotTrouble(true, 26)); //→ true
  console.log(parrotTrouble(true, 7)); //→ false
  console.log(parrotTrouble(false, 6)); //→ false
}
catch (error) {
  console.log(error.message);
}