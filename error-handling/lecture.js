/*
Exceptions

An event that occurs that disrupts the normal flow
of a program and requires special processing to handle.

*/
function readProfile(filePath) {
  let file;
  try {
    file = openFile(filePath);
    console.log("try");
  }
  catch (error) {
    /* some code to handle the error */
    console.log("catch");
  }
  finally {
    /* will execute whether or not there is an error */
    console.log("finally");
  }
  return file;
}

function openFile(filePath) {
  // throw new Error('Could not find file ' + filePath);

  let file;
  return file;
}

readProfile("./profile.txt");