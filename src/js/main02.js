// ToDo App Project
// ===========================
// Project Overview: We want to build a SIMPLE to-do list application on the page that will track user-inputed lists.
// It should include, at minimum:
// // //  •X Title. Tells user what the app is.
// // //  •X Input Field. User can input.
// // //  •X Input Submit button. Submits list item.
// // //  •X List Clear button. Clears list.
// // //  •X To-Do Item in a list. Should popup when user presses the submit button.
// // //  •X To-do Item Delete Button. Removes item.
// // //  •X To-do Item Complete Button. Removes item.

// We want to have the user type text into the input field and when submit button is pressed create a new list item with that text.

// First we can store the unordered list in a variable for later use.
// Next, we need to store the users input in a variable so we can append it to the unordered list.
// Let's create a function that gathers the data when the user clicks the add button.
// Next we need to create a list item containing the text the user inputs and place it under the ul.
// Add Button Process ----------------------------------------------
const todoList = document.getElementById('todo-list'); // Store Unordered list in variable.
const addBtn = document.getElementById('todo-add'); //Store add button in variable.

addBtn.onclick = function(){ //Created button onClick event that executes function.
    let submitTask = document.getElementById('todo-input').value; //Store user task.
    let newItem = document.createElement('li'); //Create list item element.
    todoList.appendChild(newItem); //append new list item to list.
    newItem.innerText = submitTask; //append user task as text to new list item.
    
    
    // We also need to add a delete button to each list item.
    itemDelBtn = document.createElement('button');
    itemDelBtn.className = 'btn btn-primary btn-sm ms-1';
    const itemDelBtnText = document.createTextNode('X');
    itemDelBtn.appendChild(itemDelBtnText);
    newItem.appendChild(itemDelBtn);
    
    // Here we create an onclick for the delete button that deletes the list item.
    itemDelBtn.onclick = ()=>{
      todoList.removeChild(newItem);
    }
};

// Clear Button Process ------------------------------------------------------------
const clrBtn = document.getElementById('todo-clear'); //Store clear button in variable.

clrBtn.onclick = () =>{ //Clear button removes all list items.
  while (todoList.firstChild) { //We set a while loop condition to remove each child.
    todoList.removeChild(todoList.firstChild);
  }
}



