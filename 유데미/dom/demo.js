const productNameInputElement = document.getElementById('Product-name');

const remainingCharsElements = document.getElementById('Remaining-chars');

//console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElements.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);