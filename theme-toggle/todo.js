const search = document.getElementById("search");
const input =document.getElementById("input");
const button  =document.getElementById("button");
const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".section");

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