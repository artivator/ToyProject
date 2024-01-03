let Element01 = document.querySelector('p');

function changeText(){
    Element01.textContent = '눌렀다!';

}


Element01.addEventListener('click', changeText);














let inputElement = document.querySelector('input');


function Input01(event){
    let enterText = inputElement.value;
    console.log(enterText);
    console.log(event)
}

inputElement.addEventListener('input', Input01);