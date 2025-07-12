const input = document.getElementById("input");
const button = document.getElementById("button");
let list;
button.addEventListener("click",()=>{
list=input.innerHTML;

console.log(input.innerHTML);
});
console.log(list);