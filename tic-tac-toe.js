window.onload = event =>{
    gamePlay();
}

function gamePlay(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let state = new Array(9); 
    let last = 'X';
    let index = 0;

    for (let square of squares){
        square.classList.add('square');
        square.id = index ++; 
        
        square.onclick = (event)=>{

            if (state[event.target.id]){
                return;
            }

            if (last === 'X'){
                event.target.innerText = 'O';
                event.target.classList.add('O');
                state[event.target.id] = 'O';
                last = 'O';
            }
            else if (last === 'O'){
                event.target.innerText = 'X';
                event.target.classList.add('X');
                state[event.target.id] = 'X';
                last = 'X';
            }
        };
    }
}
