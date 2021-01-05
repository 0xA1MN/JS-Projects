//select elements
let allSpans = document.querySelectorAll('.buttons span'),
    results =  document.querySelector('.results > span'),
    theInput = document.getElementById('the-input');
allSpans.forEach(span => {
  span.addEventListener('click', (e)=>{
    //check button
    if(e.target.classList == 'check'){
      checkItem();
    }
    //add button
    if(e.target.classList == 'add'){
      addItem();
    }
    //delete button
    if(e.target.classList == 'delete'){
      deleteItem();
    }
    //show button
    if(e.target.classList == 'show'){
      showItem();
    }
  })
});

//Buttons functions
function checkItem(){
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Stroed Item Called ... <span>${theInput.value}</span>`;
    }
    else {
      results.innerHTML = `NO Local Item Called ... <span>${theInput.value}</span>`;
      theInput.value= '';
    }
  }
  else {
    results.innerHTML = 'Input Can\'t Be Empty';
  }
}
function addItem(){
  if (theInput.value !== '') {
    localStorage.setItem(theInput.value, 'test');
    results.innerHTML = `Local Storage Item ... <span>${theInput.value}</span> Added`;
    theInput.value='';
  }
  else {
    results.innerHTML = 'Input Can\'t Be Empty';
  }
}
function deleteItem(){
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Local Stroed Item Called ... <span>${theInput.value}</span> Deleted`;
      theInput.value='';
    }
    else {
      results.innerHTML = `NO Local Item Called ... <span>${theInput.value}</span>`;
    }
  }
  else {
    results.innerHTML = 'Input Can\'t Be Empty';
  }
}
function showItem(){
  if (localStorage.length) {
  results.innerHTML = '';
  for (let [key, value] of Object.entries(localStorage)) {
    results.innerHTML += `<span class="key">${key}</span>`;
  };
  }
  else {
    results.innerHTML = 'Local Storage Empty';
  }
}
