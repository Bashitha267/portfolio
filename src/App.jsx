
import './App.css'
import { NavBar } from './Components/NavBar'
import { About } from './Pages/About'
import { Achi } from './Pages/Achi'
import { Blogs } from './Pages/Blogs'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { Projects } from './Pages/Projects'
function App() {

  return (
    <>
    <div>
      <div className='h-screen overflow-y-scroll'>
      <NavBar/>
      </div>
      
      <section id="home" className='' >
        <Home/>
      </section>
      <section id="about" >
        <About/>
      </section>
      <section id="projects" className=''>
        <Projects/>
      </section>
      <section id='blogs' className='' >
        <Blogs/>
      </section>
      <section id='achievements' className=''>
        <Achi/>
      </section>
      <section id="contact" >
        <Contact/>
      </section>
      </div>
      
    </>
  )
}

export default App
