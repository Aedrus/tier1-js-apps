// Expense Tracker App Project
// ===========================
// Project Overview: We want to build a SIMPLE expense tracker application that will offer user-inputted expense tracking via a number of inputs and buttons.
// It should include, at minimum:
// // //  •X Title. Tells user what the app does.
// // //  •X Vendor Input. User can input name of vendor.
// // //  •X Date Input. User can input date.
// // //  •X Amount Input. User can input ammount in currency.
// // //  •X Add Button. Adds Expense.
// // //  •X Table showing expense. Updates with add button and shows 3 main filters.
// // //  •X Expense Delete Button. Removes item.
// // //  • Empty Table Message. Shows message when empty removes when full.
// 
// Start -------------------------------------------------------------
// 1. Store the Add Button and Table in Variables.
let addBtn = document.getElementById('exp-add-btn');
const table = document.querySelector('table');
const tableContainer = document.querySelector('#exp-table');
const emptyMsg = document.querySelector('#empty-msg');

// 2. Create an onclick function that creates new item on button click.
addBtn.onclick = ()=>{
      
  // 2.1 - Create 1 new table row, 3 table cells, and a delete button.

  let newRow = document.createElement('tr');
  let cellVendor = document.createElement('td');
  let cellDate = document.createElement('td');
  let cellAmount = document.createElement('td');
  let cellBtn = document.createElement('td');
  let delBtn = document.createElement('button');
  // 2.15 - Also some classes for styling.
  delBtn.className = 'btn btn-secondary';
  cellBtn.className = 'container col-12';
  // 2.2 - Store user input value in Variables.
  let vendorVal = document.getElementById('vendor').value;
  let dateVal = document.getElementById('date').value;
  let amountVal = document.getElementById('amount').value;
  // 2.3 - Append Input Values to the 3 new cell's inner text.
  cellVendor.innerText = vendorVal;
  cellDate.innerText = dateVal;
  delBtn.innerText = 'x';
  // // Unique statement for ammount value based on if decimal is present.
  if (amountVal % 1 != 0) {
    cellAmount.innerText = '$' + amountVal;
  } else if(amountVal == ''){
    cellAmount.innerText = '$' + '0.00';
  } 
  else {
    cellAmount.innerText = '$' + amountVal + '.00';
  };
  // 2.4 - Append newly created elements to new row.
  cellBtn.appendChild(delBtn);
  newRow.appendChild(cellVendor);
  newRow.appendChild(cellDate);
  newRow.appendChild(cellAmount);
  newRow.appendChild(cellBtn);
  // 2.5 - Append the newly created row element to the table.
  table.appendChild(newRow);
  // 2.6 - Additionally, remove text from input field when adding.
  document.getElementById('vendor').value = ""; //This resets the value onclick!
  document.getElementById('date').value = ""; //This resets the value onclick!
  document.getElementById('amount').value = ""; //This resets the value onclick!

  // 3 - Create remove item function.
  delBtn.onclick = ()=>{
    table.removeChild(newRow)
  };
  emptyMsg.parentElement.removeChild(emptyMsg);
}
