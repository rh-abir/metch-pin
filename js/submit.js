document.getElementById('submit-btn').addEventListener('click', function(){
    const generatePin = document.getElementById('pin-input');
    const generatePinValue = generatePin.value;

    const typeInputPin = document.getElementById('type-input');
    const typeInputIinValue = typeInputPin.value;
    const typeInputIinValueArray = typeInputIinValue.split('');

    const successText = document.getElementById('success-pin');
    const wrongText = document.getElementById('wrong-pin');
    const leftText = document.getElementById('left-three');

    if(typeInputIinValueArray.length < 4){
        leftText.style.display = 'block';
        successText.style.display = 'none';
        wrongText.style.display = 'none';
    }
    else if (generatePinValue === typeInputIinValue){
        successText.style.display = 'block';
        wrongText.style.display = 'none';
        leftText.style.display = 'none';
    }
    else{
        wrongText.style.display = 'block';
        successText.style.display = 'none';
        leftText.style.display = 'none';
    }
})