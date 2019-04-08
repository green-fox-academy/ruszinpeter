'use strict'

function greetFoxAlert() {
    alert('Hello Green Fox!');
  }
  
  greetFoxAlert();
  
function greetFoxLog() {
    console.log('Hello Green Fox!');
  }
  
  greetFoxLog();

  function greetByName(name: string) {
    console.log(arguments);
    console.log('Well hi there,', name);
  }
  
  greetByName('Tojas');
  function greet(greet = 'Hi', name = 'pal') {
      console.log(greet, name);
    }
    
    greet('Hey');
    greet('Hello', 'Tojas');
  
