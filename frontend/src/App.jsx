import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])




  return (
    <>
      <h1>My Jokes:{jokes.length}</h1>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.description}</p>

          </div>
             )
        )
      }
    </>
  )
}

export default App
