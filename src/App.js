import logo from './logo.svg';
import './App.css';
import Sample from './Sample.js'
import Comp from './Comp'
import SecondComp from './SecondComp'

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
      <Sample title={"this the title"}/>
      <Comp text ={"this is text"}/>
      <SecondComp text={'we love text'}/>
      </header>
    </div>
  );
}

export default App;
