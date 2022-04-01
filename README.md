Describe: mrRobo()

Test: It will return an array of numbers from 0 - user's inputted number.
Code: mrRobo(4)
Expected Output: [0,1,2,3,4] 

Test: It will replace integers in outputted array to strings.
Code: mrRobo(4)
Expected Output: ['0','1','2','3','4']

Test: It will replace the number '1' with 'Beep!'
Code: mrRobo(4)
Expected Output: ['0','Beep!','2','3','4']

Test: It will replace the number '2' with 'Boop!'
Code: mrRobo(4)
Expected Output: ['0','Beep!','Boop!','3','4']

Test: It will replace the number '3' with 'Won't you be my neighbor?'
Code: mrRobo(4)
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4']

Test: It will replace any number containing '1' with 'Beep!'
Code: mrRobo(10)
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!']

Test: It will replace any number containing '2' with 'Boop!'
Code: mrRobo(12)
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!','Boop!']

Test: It will replace any number containing '3' with 'Won't you be my neighbor?'
Code: mrRobo(13)
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!','Boop!','Won't you be my neighbor?']

Describe: UI Logic

Test: It will submit form and display result on page
Code: $("p").text(display)
Expected Output: '0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!','Boop!','Won't you be my neighbor?'