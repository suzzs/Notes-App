/*const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let value = input.value;
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(document.createTextNode(value + " " ));
  li.appendChild(checkbox);

  document.getElementById("list").appendChild(li);
});*/



const input =document.getElementById("input");
const button  =document.getElementById("button");

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
 const mainContent = document.getElementById("main-content");
 toggleButton.addEventListener("click",()=>{
  mainContent.classList.toggle("hidden");
 });

