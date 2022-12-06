import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
