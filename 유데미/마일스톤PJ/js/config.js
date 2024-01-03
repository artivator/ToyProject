function openPlayerConfig(event) {
   // const selectedPlayerId = event.target.dataset.playerid;  // playerid는 변수명이다 . html의 data-* 값이다. 
                            //                위변수명에 - 이 붙으면 .dataset['player-id']으로 대괄로로 만들어야함. 
  //  editedPlayer = selectedPlayerId;          
   
    editedPlayer = +event.target.dataset.playerid;  // + '1' => 1
    
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    
    formElement.firstElementChild.lastElementChild.value = '';
}


function savePlayerConfig(event){
    event.preventDefault();
   const formData = new FormData(event.target);
   const enteredPlayername = formData.get('playname').trim();
  
   if (!enteredPlayername){  //enteredPlayername === '';  앞에 ! 대신 이걸로 해도 댐 (공백일 시 적용)
        event.target.firstElementChild.classList.add('error'); //클레스명 
        errorsOutputElement.textContent = '올바른 이름을 입력하세요!';
        return;
   }

   const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
   updatedPlayerDataElement.children[1].textContent = enteredPlayername;  // 2번째 자식 지정 (h3태그)

  players[editedPlayer - 1].name = enteredPlayername;
  
  
 /*  if (editedPlayer === 1) {
        players[0].name = enteredPlayername; 
   }    else {
        players[1].name = enteredPlayername; 
   }*/

   closePlayerConfig();

}