import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuuday Assignment</h1>
      </header>
      <form>
        <label>Github Name:
          <input type="text" name="GithubName"/>
        </label>
        <input type="submit" value="Submit" />
      </form>      
    </div>
  );
}

export default App;
