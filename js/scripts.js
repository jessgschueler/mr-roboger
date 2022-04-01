// Business Logic //

function mrRobo(number) {
  let inputArray = [];
  for (let i = 0; i <= number; i++) {
    inputArray.push(i.toString());
   }
   inputArray.forEach(function(element, index) {
    if (element.includes('3')) {
      inputArray.splice(index, 1, "Won't you be my neighbor?")
    }
    });
    inputArray.forEach(function(element, index) {
      if (element.includes('2')) {
        inputArray.splice(index, 1, 'Boop!')
      }
      });
   inputArray.forEach(function(element, index) {
    if (element.includes('1')) {
      inputArray.splice(index, 1, 'Beep!')
    }
    });
    return inputArray
  }

// UI //

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    const input = $("#number").val();
    const display = mrRobo(input);
    $("p").text(display);
  });
});