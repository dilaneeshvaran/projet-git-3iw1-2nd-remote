import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>

        </Routes>
      </div>
    </Router>
  )
}

export default App