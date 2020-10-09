window.onload = event =>{
    gamePlay();
}

function gamePlay(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let status = document.getElementById('status');
    let restart = document.getElementsByClassName('btn')[0];

    let state = new Array(9); 
    let last = 'X';
    let index = 0;

    let isGameEnd = false;

    for (let square of squares){
        square.classList.add('square');
        square.id = index ++; 
        
        square.onclick = (event)=>{

            if (state[event.target.id] || isGameEnd){
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

            if ( state[0] !== undefined && ((state[0]===state[1] && state[1]===state[2]) 
                || (state[0]===state[3] && state[3]===state[6]) 
                || (state[0]===state[4] && state[4]===state[8]) )){  
                
                status.innerText = `Congratulations! ${state[0]} is the Winner!`;
                status.classList.add('you-won');
                isGameEnd = true;
            }
            
            else if (state[4] !== undefined && ((state[1]===state[4] && state[4]===state[7]) 
                || (state[3]===state[4] && state[4]===state[5])
                || (state[2]===state[4] && state[4]===state[6]) )){
                
                status.innerText = `Congratulations! ${state[4]} is the Winner!`;
                status.classList.add('you-won');
                isGameEnd = true;
            }

            else if( state[6] !== undefined && ((state[6]===state[7] && state[7]===state[8]) 
                || (state[2]===state[5] && state[5]===state[8]))){
                    
                status.innerText = `Congratulations! ${state[8]} is the Winner!`;
                status.classList.add('you-won');
                isGameEnd = true;
            }

        };

        square.onmouseover = event =>{
            if(!isGameEnd){
                event.target.classList.add('hover');
            }
        };

        square.onmouseleave = event =>{
            if(!isGameEnd){
                event.target.classList.remove('hover');
            }
        };
    }
}


