function startNewGame() {

    if(players[0].name === '' || players[1].name === ''){
        alert('플레이어 이름을 수정 해주세요');
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}


function switchPlayer(){
    if (activePlayer === 0) {
        activePlayer = 1;       
    } else {
        activePlayer = 0;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;

}


function selectGameField(event){ 
    
    if (event.target.tagName !== 'LI'){
        return;
    }
    
    event.target.textContent = players[activePlayer].Symbol;
    event.target.classList.add('disabled'); 
    

    switchPlayer();
}