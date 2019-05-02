var addTaskBtn = document.getElementById("addTaskButton");
var input = document.getElementById('taskInput');
var ul = document.getElementById('list');
var span = document.querySelector('span')



function addTask(e) {
  if (input.value === "") {

    alert("Enter some task you lazy ass");

  } else {


    e.preventDefault();
    var inputValue = input.value;

    var newLi = document.createElement('li');
    var newDiv = document.createElement('div');
    var newDiv2 = document.createElement('div');
    var newBtn1 = document.createElement('button');
    var newBtn2 = document.createElement('button');
    newBtn1.innerText = "Delete";
    newBtn2.innerText = "Done";
    newBtn2.classList = "done";
    newBtn1.classList = 'delete';
    ul.appendChild(newLi);
    newLi.appendChild(newDiv);
    newDiv.innerText = inputValue;
    newDiv.appendChild(newDiv2)
    newDiv2.appendChild(newBtn2);
    newDiv2.appendChild(newBtn1);
    newBtn1.addEventListener("click", deleteTask);

    newBtn2.addEventListener("click", highliteTask);
    newBtn1.addEventListener("click", countBack);
    

  }
}

addTaskBtn.addEventListener('click', addTask);
addTaskBtn.addEventListener('click', count);


function deleteTask(e) {
  e.preventDefault();
  var toDelete = this.parentElement.parentElement;
  toDelete.parentElement.removeChild(toDelete);


}

function highliteTask(e) {
  e.preventDefault();
  var toHighlight = this.parentElement.parentElement;
  toHighlight.classList.add("highlight");

}
var count = 0;

function count() {

  count++;
  var span = document.querySelector('span')

  span.innerText = + count;

}

function countBack() {

  count--;
  var span = document.querySelector('span')

  span.innerText =  count;

}
