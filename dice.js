function diceRoll(num,num2,Name1) {
    console.log("this is how many sides:", num, num2)
    document.getElementById(Name1).innerHTML=numnerMinMax(num, num2)
}

function d6() {
    console.log("button clicked")
    console.log("this is the d6 dice")
    numberMinMax(1,6) //calls numberMinMax function defined below
    // document.getElementById("roll6").innerHTML=numberMinMax(1,7)
}
function d8() {
    console.log("button clicked")
    console.log("this is the d8 dice")
    numberMinMax(1,8) //calls numberMinMax function defined below
    
}
function numberMinMax(min,max) {
    const diceRoll=Math.floor(Math.random() * (max - min +1)) + min
    console.log(diceRoll)
    return(diceRoll)
}