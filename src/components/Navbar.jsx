import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getAndSend} from '../Redux/Actions/index'
import { AppBar, Toolbar, Button } from "@material-ui/core"

export default function Navbar() {

  const dispatch = useDispatch()
  const [text, settext] = useState('')

  const handleChange = (e) => {
    settext(e)
  }

  const submit = () => {
    if(!text || /\s/.test(text)) return alert('ingresa un texto')
    dispatch(getAndSend(text))
    settext('')
  }

  return (
      <AppBar position="static"  style={{ background: '#e00000'}}>
          <Toolbar style={{paddingLeft:'25%'}}>
          <input onChange={event => handleChange(event.target.value)} style={{width:'50%' , height:35 , fontSize:15, marginRight:20, border:'none', borderRadius:5, paddingLeft:10, color:'black'}} placeholder='Insert Text' value={text}></input>
          <Button variant="contained" onClick={() => submit()} style={{width:100, height:35, color:'white', fontSize:15, background:'#0052d8', border:'none', borderRadius:5}}>Send</Button>
          </Toolbar>
      </AppBar>
  )
}