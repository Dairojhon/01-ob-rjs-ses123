import logo from './logo.svg';
import './App.css';
import './App.css';import Contactos from './components/pure/contactos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contactos nombre="Jhon" apellido="Rodriguez" email="dairojhon90@gmail.com" conectado={ true }></Contactos>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
