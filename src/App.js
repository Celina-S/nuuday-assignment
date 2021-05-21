import './App.css';
import React from 'react';

function App() {

  function handleClick(e) {
    e.preventDefault();

    var nameInput = document.getElementById("inputGithubName");
    var name = nameInput;

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
    </div>
  );
}

export default App;
