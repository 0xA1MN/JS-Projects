var input = document.querySelector('.todo-contanier .add-task input'),
    plusBtn = document.querySelector('.todo-contanier .add-task .plus'),
    content = document.querySelector('.todo-contanier .tasks-content'),
    taskCountValue = document.querySelector('.task-stats .tasks-count span'),
    taskCompletedValue = document.querySelector('.task-stats .tasks-completed span'),
    finishAll = document.getElementById('finishAll'),
    deleteAll = document.getElementById('deleteAll'),
    mainSpan;
//focus on input
window.onload = function() {
  input.focus();
};
//add task
plusBtn.onclick = function() {
  if(input.value === ""){
    swal(
      'مش حاسس انك ناسي حاجه ؟',
      'النوت يبني',
      'error'
    )}
  else {
    var noTaskMsg = document.querySelector('.no-tasks-message');
    if (document.body.contains(document.querySelector('.no-tasks-message'))) {
      noTaskMsg.remove();
    }
    calculateTasks();
    //notes properties at tasks content
        //craete mainSpan
    var mainSpan = document.createElement("span"),
        //create delete element
        deleteElement = document.createElement("span"),
        //create mainSpanTxt
        mainSpanTxt = document.createTextNode(input.value),
        //create deleteElementTxt
        deleteElementTxt = document.createTextNode("Delete");
    //add txt to mainSpan
    mainSpan.appendChild(mainSpanTxt);
    //add className
    mainSpan.className = "task-box";
    //add txt to deleteElement
    deleteElement.appendChild(deleteElementTxt);
    //add className
    deleteElement.className = "delete";
    //add deleteElement to mainSpan
    mainSpan.appendChild(deleteElement);
    //add mainSpan to content
    content.appendChild(mainSpan);

    //empty the input value
    input.value = "";
    //keep focus on input field
    input.focus();

  }
};
document.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    //remove current task
    e.target.parentNode.remove();
    //check the number of tasks inside the container
    if (content.childElementCount == 0) {
      createNoTasksJs();
    }
  }
  // Finish Task
  if (e.target.classList.contains('task-box')) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
  }
  // Calculate Tasks
   calculateTasks();
});
//function to create no task msg
function createNoTasksJs() {
      //msg span element
  var msgSpan = document.createElement('span'),
      //msg span element txt
      msgSpanTxt = document.createTextNode('No Taskes yet JS');
  msgSpan.appendChild(msgSpanTxt);
  msgSpan.className = 'no-tasks-message';
  content.appendChild(msgSpan);
}
//function to calc tasks
function calculateTasks(){
  //calc all tasks
  taskCountValue.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  //calc all completed tasks
  taskCompletedValue.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
};

//buttons
deleteAll.onclick = function() {
  document.querySelectorAll('.task-box').forEach(e => e.remove()); //ES6
  createNoTasksJs();
};

finishAll.onclick = function() {
  document.querySelectorAll('.task-box').forEach(e => e.classList.add('finished')); //ES6
};
