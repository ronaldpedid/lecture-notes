function endsWithOther(stringA, stringB) {
  let smaller = stringA.length < stringB.length ? stringA : stringB;
  let larger = stringA.length < stringB.length ? stringB : stringA;

  let ending = larger.slice(smaller.length * -1);

  return smaller.toUpperCase() === ending.toUpperCase();
}

console.log(endsWithOther("yyy", "HelloYyy")); //true
console.log(endsWithOther("HelloYyy", "Yyy")); //true
console.log(endsWithOther("Zzzy", "Helloxxy")); //false

function endsWithOther2(stringA, stringB) {
  let stringAUpperCase = stringA.toUpperCase();
  let stringBUpperCase = stringB.toUpperCase();

  return (
    stringAUpperCase.endsWith(stringBUpperCase) ||
    stringBUpperCase.endsWith(stringAUpperCase)
  );
}

console.log(endsWithOther2("yyy", "HelloYyy")); //true
console.log(endsWithOther2("HelloYyy", "Yyy")); //true
console.log(endsWithOther2("Zzzy", "Helloxxy")); //false