import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState({});

  const getData = async() => {
    try {
      const response = await fetch("http://localhost/api/data");
      const data = await response.json();
      setMessage(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message["message"]}
        </p>
      </header>
    </div>
  );
}

export default App;
