class Chronometer {
  constructor() {
    this.currentTime=0;
    this.centiseconds = 0
    this.intervalId=null;
  }

  start(callback) {
    // ... your code goes here
    this.invervalId= setInterval(()=>{
      this.centiseconds++;
      if(this.centiseconds===100) {
        this.centiseconds=0;
        this.currentTime++;
      }
      
      if(callback){
        callback();
      }
      console.log(this.currentTime);
    },10)
   
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }


  getSeconds() {
    // ... your code goes here
  
      return this.currentTime%60;
  
  }
  getMilli() {
    // ... your code goes here
  
      return this.centiseconds;
  
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value<10){
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.invervalId);

    this.intervalId=null;

  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
    this.centiseconds=0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const second = this.computeTwoDigitNumber(this.getSeconds());
    const milli = this.computeTwoDigitNumber(this.getMilli());
    return `${minutes}:${second}:${milli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
