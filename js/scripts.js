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
  for (let i = 0; i <=inputArray.length; i++) {
    if (inputArray[i] === '2') {
        inputArray[i] = 'Boop!'
    }
  }
  for (let i = 0; i <=inputArray.length; i++) {
    if (inputArray[i] === '3') {
      inputArray[i] = "Won't you be my neighbor?"
    }
  }
  return inputArray
}