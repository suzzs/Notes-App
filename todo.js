const search = document.getElementById("search");
const input =document.getElementById("input");
const button  =document.getElementById("button");
const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".section");
const list = document.getElementById("list");



//load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//fn to save tasks to localStorage
function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

// Render saved tasks on page load
tasks.forEach(value => {
  let div = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  div.appendChild(document.createTextNode(value + " "));
  div.appendChild(checkbox);
  list.appendChild(div);

  
  checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    div.style.textDecoration = "line-through";
    setTimeout(() => {
      list.removeChild(div);
      tasks = tasks.filter(t => t !== value);
      saveTasks();
    }, 1000); // wait 1 sec before deleting
  }
});

  });

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click(); // Simulate button click
  }
});

search.addEventListener("input",()=>{
  const query = search.value.toLowerCase();
  const allItems = document.querySelectorAll("#list li");
  allItems.forEach(li =>{
    li.style.display = li.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

 button.addEventListener("click",()=>{
let value = input.value;
let div = document.createElement("li");
let checkbox =document.createElement("input");
checkbox.type = "checkbox";
 div.appendChild(document.createTextNode(value + " "));
div.appendChild(checkbox);
list.appendChild(div);

tasks.push(value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";

checkbox.addEventListener("change",()=>{
list.removeChild(div);
  tasks = tasks.filter(t => t !== value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
 });
 });

 const toggleButton = document.getElementById("toggle-btn")
 const sidebar = document.querySelector(".sidebar");
 toggleButton.addEventListener("click",()=>{
  sidebar.classList.toggle("hidden");
 });

//respective response with respective items

menuItems.forEach(item =>{
  item.addEventListener("click", ()=>{
    const target = item.getAttribute("data-section").toLowerCase();

    sections.forEach(section => section.classList.add("hidden"));

    const activeSection = document.getElementById(`section-${target}`);
    if(activeSection){
      activeSection.classList.remove("hidden");
    }
  });
});

//Calendar-Board Section

const monthYear = document.getElementById('month-year');
const calendarBoard = document.getElementById('calendar-board');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(){
  calendarBoard.innerHTML = ' ';


const year = currentDate.getFullYear();
const month = currentDate.getMonth();

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month+1, 0);
  const totalDays =  lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();

  const today = new Date();

  for(let i = 0; i<42;i++){
    const dayBox = document.createElement('div');
    const dayNum = i- startDay +1;

    if (i < startDay || dayNum > totalDays) {
      dayBox.classList.add('disabled');
      dayBox.textContent = '';
    } else {
      dayBox.textContent = dayNum;
    

        const isToday =
        dayNum === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      if (isToday) {
        dayBox.classList.add('today');
      }
    }
    calendarBoard.appendChild(dayBox);
  }
}


prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


//Notes section

let notes = [];

//retrieve notes from local storage when page loads
// 

window.addEventListener('DOMContentLoaded', ()=>{
  const storedNotes = localStorage.getItem('notes');
  if(storedNotes){
    notes= JSON.parse(storedNotes);
    renderNotes();
  }
});

function openNoteDialog(note = null) {
  const dialog = document.getElementById('noteDialog');
  const titleInput = document.getElementById('noteTitle');
  const contentInput = document.getElementById('noteContent');
  const dialogTitle = document.getElementById('dialogTitle');

  if (note) {
    // Editing mode
    editingNoteId = note.id;
    titleInput.value = note.title;
    contentInput.value = note.content;
    dialogTitle.textContent = "Edit Note";
  } else {
    // Adding new note
    editingNoteId = null;
    titleInput.value = "";
    contentInput.value = "";
    dialogTitle.textContent = "Add New Note";
  }



  dialog.showModal();   // open popup
  titleInput.focus();   // focus on title field
}

function closeNoteDialog() {
  const dialog = document.getElementById('noteDialog');
  dialog.close();       // close popup
}

const noteForm =document.getElementById('noteform');
noteForm.addEventListener('submit', function(e){
  e.preventDefault();

  const title=document.getElementById('noteTitle').value;
  const content = document.getElementById('noteContent').value;
  const note={
    title,
    content,
    id:Date.now()
  };
notes.push(note);

localStorage.setItem('notes', JSON.stringify(notes));

renderNotes();

closeNoteDialog();

noteForm.reset();

});

function renderNotes() {
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';  // clear existing notes

  if (notes.length === 0) {
    container.innerHTML = '<p>No Notes yet. Click the + Add Note to create one.</p>';
    return;
  }

  notes.forEach(note => {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';

    // Only show first line initially
    const firstLine = note.content.split('\n')[0];

    noteCard.innerHTML = `
       <div class="note-header">
        <h2>${note.title}</h2>
  </div>
      
      <p class="note-preview">${firstLine}</p>
      <p class="note-full" style="display:none;">${note.content}</p>
      <div class = "note-actions">
      <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          </div>
    `;

    noteCard.querySelector('.edit-btn').onclick= () =>{
      openNoteDialog(note);
    };

    // Delete note
    const deleteBtn = noteCard.querySelector('.delete-btn');
    deleteBtn.onclick = () => {
      notes = notes.filter(n => n.id !== note.id);
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    };

    // Toggle full note
    const preview = noteCard.querySelector('.note-preview');
    preview.onclick = () => {
      const fullNote = noteCard.querySelector('.note-full');
      fullNote.style.display = fullNote.style.display === 'none' ? 'block' : 'none';
    };

    container.appendChild(noteCard);
  });
}

