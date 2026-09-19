import { useState } from 'react'
import './App.css'
//import nav_sec from './components/navigation'
import head_sec from './components/header'
import info_sec from './components/info'
import exp_sec from './components/exp'
import projects_sec from './components/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="card">
        {head_sec()}
      </div>

      <div className="card">
        {info_sec()}
      </div>

      <div className="card">
        {exp_sec()}
      </div>

      <div className="card">
        {projects_sec()}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Built and designed by Oreofeoluwa Fesobi.<br></br>
        All rights reserved. ©
      </p>
    </>
  )
}

export default App
