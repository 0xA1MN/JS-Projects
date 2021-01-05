var input = document.querySelector('.repos-container .get-repos input'),
    getBtn = document.querySelector('.repos-container .get-repos .get-button'),
    reposData = document.querySelector('.repos-container .show-data');

getBtn.onclick = function() {
  getRepos();
}
//get repos function
function getRepos() {
  if (input.value == '') {
    reposData.innerHTML = "<span>Write GitHub Username pls</span>"
  }
  else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then(response => response.json())
      .then(repositories => { //repositories ... array
        //empty the container
        reposData.textContent = "";
        //loop on repositories
        repositories.forEach((repo) => {
          //create mainDiv and append repoName
          var mainDiv = document.createElement('div'),
              repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);
          //create repo url anchor and textNode and set some attributes
          var url = document.createElement('a'),
              repoUrl = document.createTextNode('Visit');
          url.appendChild(repoUrl);
          url.href = `https://github.com/${input.value}/${repo.name}`;
          url.target = '_blank';
          mainDiv.appendChild(url);
          //get stars and textNode
          var stars = document.createElement('span'),
              starsCount = document.createTextNode('Stars '+ repo.stargazers_count)
          stars.appendChild(starsCount);
          mainDiv.appendChild(stars);
          //add class to mainDiv
          mainDiv.className = 'repo-box';
          //append mainDiv to container
          reposData.appendChild(mainDiv)
        });
      });
  }
}
