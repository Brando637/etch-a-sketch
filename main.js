function createBoard(boardSize){
    for(let i = 0; i < boardSize; i++)
    {
        let row = document.createElement('div');
        row.className = "row"
        for( let j = 0; j < boardSize; j++)
        {
            let tile = document.createElement('div');
            tile.className = "tile"

            tile.addEventListener( 'mouseover' , addColour);
            row.appendChild(tile);
        }
        board.appendChild(row);
    }


};

function clearBoard(){
    let child = board.lastElementChild;
    while(child)
    {
        board.removeChild(child);
        child = board.lastElementChild;
    }

}


function addColour(event){
    //We need to add the hover effect to the css of the tile but through JS.
    //this will refer to the element that we specifically want to target
    this.style.background = "#000000";
    

};


const board = document.getElementById("board");
const changeBtn = document.getElementById("changeBtn");
const clearBtn = document.getElementById("clearBtn");
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById('sliderValue');
sliderValue.textContent = slider.value;
slider.oninput = (e) => {
    sliderValue.textContent = e.target.value;
}

changeBtn.addEventListener('click', () => {

    //Clear the old board
    clearBoard();

    //Create the new one
    createBoard(slider.value);
});

clearBtn.addEventListener('click', () => {
    clearBoard();
    createBoard(slider.value);
});

//Create the beginning board with a 16x16 size
createBoard(16);