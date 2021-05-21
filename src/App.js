import './App.css';
import React from 'react';
// import axios from 'axios';

function App() {


  function handleClick(e) {
    e.preventDefault();

    var nameInput = document.getElementById("inputGithubName");
    var name = nameInput;
    


    fetch('https://api.github.com/users/' + name.value + '/repos') 
      .then(response => response.json())
      .then(result => {
        console.log(result);
        var clearSearchName = document.getElementById("repo");
        clearSearchName.innerHTML = "";
        
        result.forEach(e => {
          var searchName = document.getElementById("repo");
          searchName.insertAdjacentHTML('afterbegin','<li>' + e.name + '</li>');
          console.log(e.name);
        });
      })    

    console.log(name.value);
  }

  return (    
    <div className="App">
      <header className="App-header">
        <h1>Nuuday Assignment</h1>
      </header>
      <form>
        <label>Github Name:
          <input id="inputGithubName" type="text" name="GithubName"/>
        </label>
        <button onClick={handleClick}>
          Submit
        </button>
      </form>  
      <div id="content">
        <ul id="repo"></ul>
      </div>    
    </div>
  );
}

export default App;
