import './App.css';
import Container from '@material-ui/core/Container'
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {

  const results = useSelector((state) => state.texts)

  return (
    <div className="App">
      <Navbar/>
      <Container style={{width:'80%', minHeight:'60vh', background: 'white', padding:20, marginTop:40 }}>
        <h1 style={{color:'#5E5E5E'}}>Results:</h1>
        <Container style={{width:'100%' , display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'}}>
          {results.length?results.map(text => {
            return (
              <div style={{width:'50%', border:'1px solid #5E5E5E', height:30, borderRadius: 5, marginTop:15, fontSize: 15, color:'#5E5E5E', paddingLeft:5}}>
                {text}
              </div>
            )
          }):null}
        </Container>
      </Container>
    </div>
  );
}

export default App;
