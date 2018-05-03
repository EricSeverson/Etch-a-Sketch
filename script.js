function makeBoard(boardSize) {
  let board = document.querySelector(".container");
  for (let i = 0; i < boardSize; i++) {
    let column = document.createElement('div');
    column.style.width = '100%';
    column.style.display = 'flex';
    for (let j = 0; j < boardSize; j++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('pixel');
      newDiv.style.display = 'inline-flex';
      newDiv.style.flexDirection = 'row';
      newDiv.style.width = board.offsetWidth / boardSize + 'px';
      newDiv.style.height = board.offsetWidth / boardSize + 'px';
      newDiv.style.backgroundColor = 'black';
      newDiv.onmouseover = () => newDiv.style.backgroundColor = 'grey';
      column.appendChild(newDiv);
    }
    board.appendChild(column);
  }
}

function changeSize() {
  let textBox = document.querySelector("#textSize");
  let newSize = parseInt(textBox.value);
  if (newSize) {
    document.querySelector('.container').innerHTML = '';
    makeBoard(newSize)
  }
}

function preChangeSize(e) {
  if (e.keyCode == 13) changeSize();
}

document.querySelector('#textSize').addEventListener('keyup', preChangeSize);
makeBoard(16);