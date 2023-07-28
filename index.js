const oweForm = document.getElementById('oweForm');
const transactionsTable = document.getElementById('transactionsTable');
  
oweForm.addEventListener('submit', function (event) {
  event.preventDefault();
 

  var borrowerName = document.getElementById('borrowerName').value;
  var lentDate = document.getElementById('lentDate').value;
  var amount = document.getElementById('amount').value;
  var dueDate = document.getElementById('dueDate').value;

   const newRow = transactionsTable.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = borrowerName;
  cell2.innerHTML = lentDate;
  cell3.innerHTML = amount;
  cell4.innerHTML = dueDate;

  // Clear the form input
  oweForm.reset();
});



  function renderTable() {
    // Clear existing table rows
    while (transactionsTable.firstChild) {
      transactionsTable.removeChild(transactionsTable.firstChild);
    }
  
    // Render new table rows
    transactions.forEach(function(transactionsTable) {
      const newRow = transactionsTable.insertRow(-1);
      const Cell1 = newRow.insertCell(0);
      const Cell2 = newRow.insertCell(1);
      const Cell3 = newRow.insertCell(2);
      const Cell4 = newRow.insertCell(3);
  
      const editCell = newRow.insertCell(4);
       const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
    // Enable editing of the transaction code
        const newTransactions = prompt('Enter new transactions:','borrowerName','lentDate','Amount','dueDate');
});
editCell.appendChild(editButton);

});
  }