import { useState } from 'react'
import Main from './pages/Main/Main'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
