function front3(string) {
  let promise = new Promise((resolve, reject) => {
    if (!string.length) {
      console.log("ERROR THROWN");
      reject(new Error("Empty string"));  // error.message
    }

    let front = string.slice(0, 3);
    resolve(front.repeat(3));
  });

  return promise;
}

module.exports = front3;