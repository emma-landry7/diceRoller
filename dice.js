function diceRoll(num,num2,Name1) {
    console.log("this is how many sides:", num, num2)
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2)
}

function numberMinMax(min,max) {
    const diceRoll = Math.floor(Math.random() * (max - min +1)) + min
    console.log(diceRoll)
    return(diceRoll)
}


// combined below functions into one "diceRoll" function
// function d6() {
    //     console.log("button clicked")
    //     console.log("this is the d6 dice")
    //     numberMinMax(1,6) //calls numberMinMax function defined below
    //     document.getElementById("roll6").innerHTML = numberMinMax(1,6)
    // }
    
    // function d4() {
    //     console.log("button clicked")
    //     console.log("this is the d4 dice")
    //     numberMinMax(1,4) //calls numberMinMax function defined below
    //     document.getElementById("roll4").innerHTML = numberMinMax(1,4)
    // }
    
    // function d20() {
    //     console.log("button clicked")
    //     console.log("this is the d20 dice")
    //     numberMinMax(1,20)
    //     document.getElementById("roll20").innerHTML = numberMinMax(1,20)
    // }
    
    // function d10() {
    //     console.log("button clicked")
    //     console.log("this is the d10 dice")
    //     numberMinMax(1,10)
    //     document.getElementById("roll10").innerHTML = numberMinMax(1,10)
    // }
    