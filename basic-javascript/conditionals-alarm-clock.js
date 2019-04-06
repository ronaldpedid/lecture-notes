/*
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, output a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
*/
let day = 6; // 1, 2, 3, 4, 5, or 6
let onVacation = true;  // or true

let isWeekday = day >= 1 && day <=5;
let isWeekend = !isWeekday;

if (isWeekday && !onVacation) {
  console.log("7:00");
}
else if (isWeekend && !onVacation) {
  console.log("10:00");
}
else if (isWeekday && onVacation) {
  console.log("10:00");
}
else if (isWeekend && onVacation) {
  console.log("off");
}
else {
  console.log("ERROR")
}