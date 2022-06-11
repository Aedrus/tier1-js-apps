// Note App Project
// ===========================
// Project Overview: We want to build a note taking app that will allow the user to input their notes as cards and then see it when clicked on.
// It should include, at minimum:
// // //  •X Title. Tells user what the app does.
// // //  •X Instructions. What should the user do..
// // //  •X Note Input. User can input their note in an expandable text field.
// // //  •X Add Note Button. Add note to list.
// // //  •X Empty message. Tells the user there are no notes.
// // //  •X Note card. Add notes appear below and consist of a title, excerpt, and "view" button
// // //  • Note Modal. When view is clicked, a modal appears in the center of the screen with the full note.

// 
// Start -------------------------------------------------------------
const body = document.querySelector('body');
const addBtn = document.getElementById('add-btn');
const emptyMsg = document.getElementById('empty-msg');
const archive = document.querySelector('#app-archive');
const modal = document.getElementById('main-modal');
const modalCloseBtn = document.getElementById('modal-close');
const overlay = document.getElementById('overlay');
const noteCard = { //Object for classes.
  cardMain: 'card text-black col-12 mb-4 under',
  cardBody: 'card-body ps-3 pe-3',
  cardTitle: 'card-title d-flex justify-content-between ps-3 pe-3 pt-3',
  cardText: 'card-text',
  cardBtn: 'btn btn-warning btn-sm'
};
let titleNum = 0;
let titleNumStr;
let titleText = 'Note 0'; // For card title.

addBtn.onclick = ()=> {
  // Hide Empty Message
  emptyMsg.className = 'hidden';
  // User input Note Variable - for later use.
  let userNote = document.getElementById('note').value;
  let userNoteExcerpt = userNote.substring(0, 110); //Shorter Version.
  // Card Element Scraps assigned to variables.
  let newCardMain = document.createElement('div');
  let newCardTitle = document.createElement('div');
  let newCardBody = document.createElement('div');
  let newCardHeading = document.createElement('h3');
  let newCardText = document.createElement('p');
  let newCardBtn = document.createElement('button');
  let newCardDelBtn = document.createElement('button');
  // Append text to elements.
  newCardBtn.innerText = 'View'; //Button Text
  newCardDelBtn.innerText = 'X';
    //Statement for limiting excerpt length and appending to card. 
    if (userNote.length > 50 && userNoteExcerpt.charAt(userNoteExcerpt.length - 1) != ' '){
      newCardText.innerText = userNoteExcerpt + '...';
    } else if(userNote.length > 50 && userNoteExcerpt.endsWith(' ')){
      let excerptTrim = userNoteExcerpt.trim();
      newCardText.innerText = excerptTrim + '...';
    }
     else {
      newCardText.innerText = userNote; //Adds full user note into card.
    }
  document.getElementById('note').value = ""; //Resets value after input.

  // Iterate text in heading.
  titleNum++; // Add 1 to number each click.
  titleNumStr = titleNum.toString(); //Convert number to string "".
  let titleTextArray = titleText.split(' '); //Split text into array of ['Note' and '1'].
  titleTextArray.splice(1, 1, titleNumStr); //replace number in array with iterated number.
  titleText = titleTextArray.join(' '); //Rejoin array into string giving us 'Note 2'.
  newCardHeading.innerText = titleText; //Append new string to new card title.
  // Card Element Classes assigned to Scraps.
  newCardMain.className = noteCard.cardMain;
    newCardBody.className = noteCard.cardBody;
    newCardTitle.className = noteCard.cardTitle;
    newCardText.className = noteCard.cardText;
    newCardBtn.className = noteCard.cardBtn;
    newCardDelBtn.className = noteCard.cardBtn;
  // Stitch card together by appending scraps to each other.
  newCardTitle.append(newCardHeading, newCardDelBtn);
  newCardBody.append(newCardText, newCardBtn);
  newCardMain.append(newCardTitle, newCardBody);
  // Append Stitched Card to Archive.
  archive.append(newCardMain);

  // Event for showing modal. ===============
  newCardBtn.onclick = ()=>{
    // Show modal card + Overlay
    modal.classList.add('modal-active');
    overlay.classList.add('overlay-active');
    // Lock scrolling of window.
    
    body.classList.add('scroll-lock');
    // Add user note into modal.
    const modalHeading = document.getElementById('modal-heading-text');
    const modalBody = document.getElementById('modal-body-text');
    modalHeading.innerText = newCardHeading.innerText;
    modalBody.innerText = userNote;
  }

  // Add event for closing modal and overlay, as well as closing on overlay click. ========
  modalCloseBtn.onclick = ()=>{
    // Hide Modal + Overlay
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
    // Revert scrolling lock of window.
    body.classList.remove('scroll-lock');
  }
  
  overlay.onclick = ()=>{
    // Show Modal + Overlay
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
    // Revert scrolling lock of window.
    body.classList.remove('scroll-lock');
  }

  // Event for deleting card. ===========================
  newCardDelBtn.onclick = ()=>{
    archive.removeChild(newCardMain);
  }
};

