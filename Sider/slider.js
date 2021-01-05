//slider items | array.from [ES6]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
//console.table(sliderImages);

//get number of slides
var slidesCount = sliderImages.length;

//get first slide
var currentSlide = 1;

//slide number element
var slideNumberElement = document.getElementById('slider-number');

//previous and next button
var previousButton  = document.getElementById('prev'),
    nextButton  = document.getElementById('next');

/**************************previous and next button**************************/
//handle click on previous, next button
previousButton.onclick = previousSlide;
nextButton.onclick = nextSlide;
//function next slide function
function nextSlide(){
  if (nextButton.classList.contains('disabled')) {
    return false;
  }
  else {
    currentSlide++;
    theChecker();
  }
}
//function previous slide function
function previousSlide(){
  if (previousButton.classList.contains('disabled')) {
    return false;
  }
  else {
    currentSlide--;
    theChecker();
  }
}

/*****************************pagination Element*****************************/
//create main ul element
var paginationElement = document.createElement('ul');
//set id for this element
paginationElement.setAttribute('id', 'pagination-ul');
//create li element based on slidesCount
for (var i = 1; i <= slidesCount; i++) {
  //create li
  var paginationItem = document.createElement('li');
  //set attribute
  paginationItem.setAttribute('data-index', i);
  //set item content
  paginationItem.appendChild(document.createTextNode(i));
  //append item to main ul list
  paginationElement.appendChild(paginationItem);
}
//add the created ul element to page
document.getElementById('indicator').appendChild(paginationElement);

/****************************************************************************/
//get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
//loop through all bullets items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function(){
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}
//trigger the checker function
theChecker();
//create the checker function
function theChecker() {
  //set the slide number
  slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);
  //remove all active classes
  removeAllAtive()
  //set active class on current slide
  sliderImages[currentSlide - 1].classList.add('active');
  //set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  //check if the current slide is the first
  if (currentSlide == 1) {
    //add disables class on previous button
    previousButton.classList.add('disabled')
  }
  else {
    //remove disables class on previous button
    previousButton.classList.remove('disabled')
  }
  //check if the current slide is the last
  if (currentSlide == slidesCount) {
    //add disables class on previous button
    nextButton.classList.add('disabled')
  }
  else {
    //remove disables class on previous button
    nextButton.classList.remove('disabled')
  }
}

///remove all active class from image and pagination
function removeAllAtive() {
  //loop through sliderImages
  sliderImages.forEach(function(img){
    img.classList.remove('active')
  });

  //loop through paginationBullets
  paginationBullets.forEach(function(bullet){
    bullet.classList.remove('active')
  });
}
