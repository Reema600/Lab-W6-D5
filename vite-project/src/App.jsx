
import { useState } from 'react'
import './App.css'

function App() {
const [todo,setTodo] = useState('')
const [list,setList] = useState([])
 
const addList=()=>{
  setList([...list,todo])
  setTodo('')

}
  return (
    <>
  
<input value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
<button onClick={addList} >Add</button>
<br></br>
<ul>
{list.map((item, id)=>(
  
<li key={id}>{item}</li>


))}</ul>
   
 
  </>
  )
}

export default App
