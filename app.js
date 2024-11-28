const numbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const numbersRow = document.getElementById('numbersRow');

function updateTable() {
  numbersRow.innerHTML = ''; 
  numbers.forEach(num => {
    const cell = document.createElement('td');
    cell.textContent = num;
    numbersRow.appendChild(cell);
  });
}

function addRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  numbers.push(randomNumber);
  updateTable();
}

document.getElementById('addNumberButton').addEventListener('click', addRandomNumber);
    
updateTable();