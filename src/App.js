import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {getAndSend} from './Redux/Actions/index'
import './App.css';

function App() {

  const dispatch = useDispatch()
  const [text, settext] = useState('')

  const handleChange = (e) => {
    settext(e)
  }

  const submit = () => {
    dispatch(getAndSend(text))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola</h1>
        <input onChange={event => handleChange(event.target.value)}></input>
        <button onClick={() => submit()}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
