import logo from './logo.svg';
import './App.css';

async function simpleApiCall() {
  // const response = await fetch('http://54.202.84.223:8000/api/posts');
  // console.log(response);

  // return await response.json();
  fetch('http://54.202.84.223:8000/blog')
    .then((e) => console.log(e));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={simpleApiCall}>
            Click me
          </button>
        </div>
      </header>

    </div>
  );
}

export default App;
