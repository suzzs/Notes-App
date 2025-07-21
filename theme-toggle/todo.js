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


const monthYear = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar() {
  calendarDays.innerHTML = ''; // Clear existing days

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Add blank days for previous month
  for (let i = 0; i < startDay; i++) {
    const emptyBox = document.createElement('div');
    emptyBox.classList.add('disabled');
    calendarDays.appendChild(emptyBox);
  }

  // Add actual day numbers
  for (let day = 1; day <= daysInMonth; day++) {
    const dayBox = document.createElement('div');
    dayBox.textContent = day;

    const today = new Date();
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    if (isToday) {
      dayBox.classList.add('today');
    }

    calendarDays.appendChild(dayBox);
  }
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial load
renderCalendar();
