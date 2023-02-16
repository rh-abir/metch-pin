document.getElementById('pin-typing').addEventListener('click', function(event){

    const number = event.target.innerText;
    const typedInput = document.getElementById('type-input');
    const previousTypedInput = typedInput.value;

    if(isNaN(number)){
        if(number === "C"){
            typedInput.value = '';
        }
        else if(number === "<"){
            const numberArray = previousTypedInput.split('');
            numberArray.pop();
            const numberString = numberArray.join('');
            typedInput.value = numberString;
        }
    }
    else{
        const newTypeNumber = previousTypedInput + number;
        typedInput.value = newTypeNumber;
    }
})