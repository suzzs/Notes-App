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

 button.addEventListener("click",()=>{
let value = input.value;
let div = document.createElement("li");
let checkbox =document.createElement("input");
checkbox.type = "checkbox";
 div.appendChild(document.createTextNode(value + " "));
div.appendChild(checkbox);
document.getElementById("list").appendChild(div);



 checkbox.addEventListener("change",()=>{
document.getElementById("list").appendChild(div).remove();
 });
 });
