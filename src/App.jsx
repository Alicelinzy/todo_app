import { useState } from 'react'
import '../src/css/styles.css'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Home/>
    </div>
  )
}

export default App
