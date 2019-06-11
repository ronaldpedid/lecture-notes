const axios = require("axios");
console.log("Running Chuck Norris app");

async function main() {
  let promise1 = axios.get("http://api.icndb.com/jokes/random")
  let promise2 = axios.get("http://api.icndb.com/jokes/random")
  let promise3 = axios.get("http://api.icndb.com/jokes/random")
  let promise4 = axios.get("http://api.icndb.com/jokes/random")

  let response = await Promise.all([ promise1, promise2, promise3, promise4 ]);

  console.log(response[0].data.value.joke);
  console.log(response[1].data.value.joke);
  console.log(response[2].data.value.joke);
  console.log(response[3].data.value.joke);
}

async function main100() {
  let promises = [];

  for (let i = 1; i <= 100; i++) {
    promises.push(axios.get("http://api.icndb.com/jokes/random"));
  }

  let responses = await Promise.all(promises);

  for (response of responses) {
    console.log(response.data.value.joke);
  }
}

main100();