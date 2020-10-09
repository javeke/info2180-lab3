window.onload = event =>{
    setUp();
}

function setUp(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');

    for (let square of squares){
        square.classList.add('square');
    }
}