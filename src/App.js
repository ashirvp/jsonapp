import './App.css';
import axios from 'axios'
import { useState } from 'react'
function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
      <h1>hello Manoos</h1>
      <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
          console.log(response.data);
          setState(response.data)
        })
      }}>Click ME</button>
      {state.map((obj) => {
        return(
        <div>
          <h1>{obj.id}</h1>
          <h3>{obj.title}</h3>
          <h5>{obj.body}</h5>
        </div>
        )
      })}

    </div>
  );
}

export default App;
