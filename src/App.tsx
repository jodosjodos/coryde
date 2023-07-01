import { BrowserRouter as Router ,Routes,Route,  } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Services from './pages/Services'
import Navbar from './pages/Navbar'
import SignUp from './pages/SignUp'

function App() {

  return (
   <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login ' element={<Login/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </Router>
   </div>
  )
}

export default App
