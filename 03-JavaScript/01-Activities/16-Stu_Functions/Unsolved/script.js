// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);
// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual(10,"10");
// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
var isEqualTakeTwo = isEqual(1,1);
isEqualTakeTwo
// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqual(19,3);

