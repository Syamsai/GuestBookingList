import logo from './logo.svg';
import './App.css';
import SampleTest from './SampleTest';
import Guest from './Guest';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
        <SampleTest listOfStrings={["one","two"]} />
      </header> */}
        <Guest/>
    </div>
  );
}

export default App;
