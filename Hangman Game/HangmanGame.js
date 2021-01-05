//letters
const letters = 'abcdefghijklmnopqrstuvwxyz';
//create array from letter
let lettersArray = Array.from(letters);
//select letter containers
let lettersContainer = document.querySelector('.letters');
//generate letters
lettersArray.forEach(letter => {
  //create span with letter
  let span = document.createElement('sapn'),
      theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = 'letter-box';
  lettersContainer.appendChild(span)
});
/******************************Generate Values***********************/
//object of words + category
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//get random prop
let allKeys = Object.keys(words); //array of prop name
let randomPropNum = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNum];
let randomPropValue = words[randomPropName];
let randomValueNum = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNum];
/*
console.log(allKeys); //["programming", "movies", "people", "countries"]
console.log(randomPropName); //random value from all keys ... programmin for exapmle
console.log(randomPropValue); //values of key ... ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"]
console.log(randomValueNum); // num ... 1 for exapmle
console.log(randomValueValue); //javascript
*/
//set category info
document.querySelector('.game-info .category span').innerHTML = randomPropName;// + ' ... ' + randomValueValue;
/**********************letterGuessConatiner************************/
let letterGuessConatiner = document.querySelector('.letters-guess');
//convert chosen word to array
let lettesAndSpace = Array.from(randomValueValue);
//create spans depent on letters
lettesAndSpace.forEach(letter => {
  let emptySpan = document.createElement('span');
  //if letter is space
  if (letter === ' ') {
    //add class to span
    emptySpan.className = 'has-space';
  }
  //append all span to letterGuessConatiner
  letterGuessConatiner.appendChild(emptySpan)
});
/**********************compare letters************************/
//select guessSpans
let guessSpans = document.querySelectorAll(".letters-guess span");
//set wrong attempts
let wrongAttempts = 0;
//select the draw of element
let theDraw = document.querySelector('.hangman-draw')
//handle click on letters
document.addEventListener('click', (e)=>{
  if (e.target.className === 'letter-box'){
    e.target.classList.add('clicked');
    //get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    //set the chosen status
    let theStatus = false;

    theChosenWord.forEach((wordLetter, wordindex) => {
    //if the clicked letter equal to letter in chosen word
      if (theClickedLetter === wordLetter) {
        //set status to correct
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      };
    });
    if (theStatus !== true) {
      //console.log('false');
      //Increase wrongAttempts
      wrongAttempts++;
      //add class wrong on the draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`)
      //play fail sound
      //document.getElementById('fail').play();
      //check num of wrongAttempts
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add('finished');
      }
      else {
        //console.log('true');
        //document.getElementById('success').play();
      }
    }
  };
});
function endGame(){
  //create popup div
  let div = document.createElement('div'),
  //createTextNode
      divTxt = document.createTextNode(`Game Over, the word is ${randomValueValue}`)
  //append txt to div
  div.appendChild(divTxt);
  //add class on div
  div.className = 'popup';
  //append div to body
  document.body.appendChild(div)
}
function success(){
  //create popup div
  let div1 = document.createElement('div'),
  //createTextNode
      divTxt1 = document.createTextNode(`WIN 😍, Wrong Tries ${wrongAttempts}`)
  //append txt to div
  div1.appendChild(divTxt1);
  //add class on div
  div1.className = 'popup';
  //append div to body
  document.body.appendChild(div1)
}
