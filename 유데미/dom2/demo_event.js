let productNameInputElement = document.getElementById('product-name');

let remainingCharsElement = document.getElementById('remaining-chars');

//console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;




function updateRemainingChars(event){
    let enterText = event.target.value;
    let enterTextLength = enterText.length;

    let remainingCharacters = maxAllowedChars - enterTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 0){
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } 
    else if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
    }

    else {
        remainingCharsElement.classList.remove('error', 'warning');
        productNameInputElement.classList.remove('error', 'warning');
   
    }


}

productNameInputElement.addEventListener('input', updateRemainingChars);


