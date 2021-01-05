function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.onreadystate ===4 && this.status === 200) {
      console.log(this.responseText);
    }
  };

  myRequest.open("GET", "quizApp.json", true);
  myRequest.send();
}
getQuestions();
