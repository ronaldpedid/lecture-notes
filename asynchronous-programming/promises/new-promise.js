async function main() {
  console.log(combineDelayed("hi", " there"));
  console.log(combine("hi", " there"));
  console.log(combine2("hi", " there"));
}

async function combine(a, b) {
  setTimeout(() => {
    console.log("Hi");
  }, 2000);
  return a + b;
}

function combine2(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  })
}

function combineDelayed(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a + b) }, 3000);
  });
}

main();