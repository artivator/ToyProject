let aaa = document.querySelector('p');

function bbb(){
    aaa.textContent = 'Clicked';

    console.log('파라그래피 클릭크');
}


aaa.addEventListener('click', bbb);



let ccc = document.querySelector('input');

function ddd(){
    //let eee = ccc.value;
    //let eee = event.target.value;
    let eee = event.data;
    console.log(eee);
   // console.log(event);
}

ccc.addEventListener('input', ddd);