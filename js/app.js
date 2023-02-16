function generatePin (){
    const randomNumber = Math.round(Math.random()*10000);
    const randomNumberString = randomNumber + '';
    setPin(randomNumberString);
}

function setPin(number){
    const inputPin = document.getElementById('pin-input');
    if(number.length === 4){
        inputPin.value = number;
        return;
    }
    else{
        return generatePin();
    }
}

