/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Check for dark mode in localStorage on page load

// Check for dark mode in localStorage on page load
// Check for dark mode in localStorage on page load

// Object to store user information 


window.onload = function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);

    const checkbox = document.querySelector(".checkbox");
    if (savedTheme === "dark") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
};

// Add event listener to the checkbox
const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});




function createNote() {
    const stickyNotes = document.querySelector('.sticky-notes');
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
  
    const noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.contentEditable = true;
    noteContent.textContent = 'New note';
  
    const noteActions = document.createElement('div');
    noteActions.classList.add('note-actions');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-note');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      noteContainer.remove();
    };
  
    noteActions.appendChild(deleteButton);
    noteContainer.appendChild(noteContent);
    noteContainer.appendChild(noteActions);
    stickyNotes.appendChild(noteContainer);
  }
  
  function deleteNote(button) {
    const noteContainer = button.closest('.note-container');
    noteContainer.remove();
  }



const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
  navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
})












