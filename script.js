const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
//   === '' → checks if it is exactly empty (no characters at all)
// === → strict comparison (recommended 👍)
  if(inputBox.value ===''){
    alert("You must write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    // for showing cross icon in side of list
    let span = document.createElement("span");
    span.innerHTML="\u00d7"; // create cross icon
    li.appendChild(span);
  }
  // after add remove text from input box
  inputBox.value="";
  saveData();
}

// to checked list and remove task from list
listContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
  e.target.classList.toggle("checked");
  saveData();
}
else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  saveData();
}
},false);


function saveData(){
  // in setItem we have to add the name so let's add the name data and after that we have to add the value that we want to save in our browser so we have to save the entire content which is here in listContainer
  localStorage.setItem("data",listContainer.innerHTML);
}
// we store the item that is in listContainer and display this one using the locatstorage.getItem data
// next we have to call this saveData every time we will add any changes 
// so whenever we add any task this saveData should also call 
// also call whenever we checked and unchecked task and delete the task

// so we have added this data in our browser next we have to display this data whenever we will open the website again so for this create one function here

function showTask(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showTask(); // this is always call to display task in browser whenever we open or refresh or work in it