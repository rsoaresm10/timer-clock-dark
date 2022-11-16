import {
  buttonPlay,
  buttonPause,
  buttonPlus,
  buttonMines,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  buttonLight,
  buttonDark
} from "./elements.js"
import Sounds from "./sounds.js"

let timerTimeOut

const sound = Sounds
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if (minutes <= 0) {
        
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 2
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }


 function minutesPlus () {
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(String(minutes + 5), 0)

  
 }
 function minutesMines () {
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(String(minutes - 5), 0)


}

function hold () {
  clearTimeout(timerTimeOut)
}



  buttonPlay.addEventListener('click' , function (){
    countdown()
  })

 buttonPause.addEventListener('click', function(){
hold()
 })

 buttonPlus.addEventListener('click' , function(){
minutesPlus()
 })

 buttonMines.addEventListener('click' , function(){
  minutesMines()
 })


 buttonForest.addEventListener('click' , function (){
  sound().pressButton()
 })

 buttonRain.addEventListener('click' , function () {
  sound().rainButton()
 })

 buttonCoffee.addEventListener('click' ,function () {
     sound().coffeeButton()
   })
 
buttonFire.addEventListener('click' , function (){
  sound().fireButton()
})