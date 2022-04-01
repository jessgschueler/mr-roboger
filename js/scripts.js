// Business Logic //

function mrRobo(number) {
  let inputArray = [];
  for (let i = 0; i <= number; i++) {
    inputArray.push(i.toString());
   }
  for (let i = 0; i <=inputArray.length; i++) {
    if (inputArray[i] === '1') {
      inputArray[i] = 'Beep!'
    }
  }
  return inputArray
}

