# Mr Robogers

### by Jess Schueler

#### *Beep! Boop! Won't you be my neighbor?*

## Technologies Used
* HTML
* CSS
* JavaScript 

## Description 
An application that will take any user-submitted number and display a range of numbers from 0 - to the inputted number, changing any number with a 1 to 'Beep!', any number with a 2 to 'Boop!', and any number with a 3 to 'Would you like to be my neighbor?.'

## Setup/Installation Requirements
* In the terminal, clone github repository using the following command;
```
$ git clone https://github.com/jessgschueler/mr-robogers
```
* Open the index.html file in browser

* Alternativley, visit [this link](https://jessgschueler.github.io/mr-roboger/)

## Known Bugs
* none

## Tests
Describe: mrRobo()
```
Test: It will return an array of numbers from 0 - user's inputted number.\
Code: mrRobo(4)\
Expected Output: [0,1,2,3,4] 
```
```
Test: It will replace integers in outputted array to strings.\
Code: mrRobo(4)\
Expected Output: ['0','1','2','3','4']
```
```
Test: It will replace the number '1' with 'Beep!'\
Code: mrRobo(4)\
Expected Output: ['0','Beep!','2','3','4']
```
```
Test: It will replace the number '2' with 'Boop!'\
Code: mrRobo(4)\
Expected Output: ['0','Beep!','Boop!','3','4']
```
```
Test: It will replace the number '3' with 'Won't you be my neighbor?'\
Code: mrRobo(4)\
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4']
```
```
Test: It will replace any number containing '1' with 'Beep!'\
Code: mrRobo(10)\
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!']
```
```
Test: It will replace any number containing '2' with 'Boop!'\
Code: mrRobo(12)\
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!','Boop!']
```
```
Test: It will replace any number containing '3' with 'Won't you be my neighbor?'\
Code: mrRobo(13)\
Expected Output: ['0','Beep!','Boop!',"Won't you be my neighbor?", '4','5','6','7','8','9','Beep!','Boop!','Won't you be my neighbor?']
```

## License
MIT

Copyright (c) 4/1/22 Jess Schueler