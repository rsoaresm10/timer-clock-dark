export default function Sounds (){
    const forestSound = new Audio('./sounds/forest.wav')
    const rainSound = new Audio('./sounds/rain.wav')
    const coffeeSound = new Audio('./sounds/coffee.wav')
    const fireSound = new Audio('./sounds/fire.wav')
    function pressButton (){
        forestSound.play()
        
    }

    function rainButton (){
        rainSound.play()
    }

    function coffeeButton (){
        coffeeSound.play()
    }

    function fireButton(){
        fireSound.play()
    }


return {
    pressButton,
    rainButton,
    coffeeButton,
    fireButton
    
}

}
