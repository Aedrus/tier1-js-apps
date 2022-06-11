// Clock Project
// ===========================
// Project Overview: We want to build a simple digital clock app that will tell the user the current time and update the clock in real time. It should also give the current date as well as a button to change to military time.
// It should include, at minimum:
// // //  • Title. Tells user what the app does.
// // //  • Clock Text. Digital Clock in real time.
// // //  • Date Text. Date format in real time.
// // //  • Change to Military time Button. 12 to 24 hour and so forth.
// 
// Start -------------------------------------------------------------
  const clockParent = document.getElementById('clock-wrapper');
  const clock12 = document.getElementById('clock12'); //Store clock element.
  const clock24 = document.getElementById('clock24'); //Store clock element.
  const date = document.getElementById('date'); //Store date element.
  const timeBtn = document.getElementById('military-btn');
  let dateHour12 = clock12.querySelector('#hour');
  let dateMinute12 = clock12.querySelector('#minute');
  let dateSecond12 = clock12.querySelector('#second');
  let dateHour24 = clock24.querySelector('#hour');
  let dateMinute24 = clock24.querySelector('#minute');
  let dateSecond24 = clock24.querySelector('#second');

let updateClockStandard = ()=> {
  const dPrime12 = new Date(); //Create new date dataConstructor.
  const tPrime12 = { //Create object accessing each aspect of date constructor.
    tHour12: dPrime12.getHours(), //Hours as Integer
    tMinute12: dPrime12.getMinutes(), //Minutes as Integer
    tSecond12: dPrime12.getSeconds()} //Seconds as Integer
  // =======Converted to Standard 12===========================
  if(tPrime12.tHour12 > 12){
    tPrime12.tHour12 = tPrime12.tHour12 - 12;
  }
  // =======Place Time into document============================
  dateHour12.innerText = tPrime12.tHour12; //Set first index to hour
  dateMinute12.innerText = tPrime12.tMinute12; //Set middle index to minutes
  dateSecond12.innerText = tPrime12.tSecond12; //Set last index to seconds
};
let updateClockMilitary = ()=> {
  const dPrime = new Date(); //Create new date dataConstructor.
  const tPrime = { //Create object accessing each aspect of date constructor.
    tHour: dPrime.getHours(), //Hours as Integer
    tMinute: dPrime.getMinutes(), //Minutes as Integer
    tSecond: dPrime.getSeconds()} //Seconds as Integer
  // =======Converted to Military 24===========================
  // =======Place Time into document============================
  dateHour24.innerText = tPrime.tHour; //Set first index to hour
  dateMinute24.innerText = tPrime.tMinute; //Set middle index to minutes
  dateSecond24.innerText = tPrime.tSecond; //Set last index to seconds
};

let interval12 = setInterval(updateClockStandard, 100);
let interval24 = setInterval(updateClockMilitary, 100);

timeBtn.addEventListener('click',()=>{
  if(clock12.style.display === 'none'){
    clock12.style.display = 'block';
    clock24.style.display = 'none';
    timeBtn.textContent = 'Change to Military Time'
  } else{
    clock12.style.display = 'none';
    clock24.style.display = 'block';
    clock24.classList.remove('hidden');
    timeBtn.textContent = 'Change to Standard Time'
  }
});



// Project Takeaway [====================]
// =======================================
// I learned more about the Date dataConstructor and how it behaves.
// * Date() creates a new constructor with the current time/date—or specific times/dates—once. Attempting to access this new Date() outside of the function resulted in the time not changing. I was able to fix it by placing it inside the function, reestablishing it each time the function was run.
// SetInterval() was a great Asynchronous method that allowed for real-time updates for the clock.

