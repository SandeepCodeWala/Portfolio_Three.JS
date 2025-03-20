import React from 'react'
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {
  return (
    <main className='bg-slate-300/20 h-full'>
<Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>


    </Routes>
</Router>
    </main>
//     <div>
//     <h1 className="text-3xl font-bold underline text-blue-500">
//     Hello world!
//   </h1>
//   </div>
  )
}

export default App