const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  minDecElement.innerHTML=`${this.printMinutes()[0]}`;
  minUniElement.innerHTML=`${this.printMinutes()[1]}`;
  secDecElement.innerHTML=`${this.printSeconds()[0]}`;
  secUniElement.innerHTML=`${this.printSeconds()[1]}`;
  milDecElement.innerHTML=`${this.printMilliseconds()[0]}`;
  milUniElement.innerHTML=`${this.printMilliseconds()[1]}`;
}

function printMinutes() {
  // ... your code goes here

  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
 
  return chronometer.computeTwoDigitNumber(chronometer.getMilli());
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  /*Once the btn is clicked i check if the start class was in the btn
  class list. If not, I start the the chrono and change the text.
  Else i stop the chrono and change the txt

  */
  if(btnLeftElement.classList.toggle('start')){
    
    btnRightElement.innerHTML='RESET';
    btnLeftElement.innerHTML='START';
    
    
    chronometer.stop();
    
  }else{
    chronometer.start(printTime);
    btnLeftElement.innerHTML='STOP';
    btnRightElement.innerHTML='SPLIT';
   
  }

  // each time i click on the sart/split button i change the classe of both btn 
  //to change their CSS
  btnRightElement.classList.toggle('split');
  btnLeftElement.classList.toggle('stop');
 
 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

    //check is the chrono is runing, if do a split
    //if not reset it
    if(chronometer.intervalId===null && btnLeftElement.classList.contains('start')){
      chronometer.reset();
      this.printTime();
      splitsElement.innerHTML=''
      
    }else{
      
      const newLi = document.createElement('li');
      newLi.innerHTML= chronometer.split();

      splitsElement.appendChild(newLi);
      
    }
    
  
});
