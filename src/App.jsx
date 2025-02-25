
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
      
      <section id="home" className='mb-5' >
        <Home/>
      </section>
      <section id="about" className='mb-5' >
        <About/>
      </section>
      <section id="projects" className='mb-5'>
        <Projects/>
      </section>
      <section id='blogs' className='mb-5' >
        <Blogs/>
      </section>
      <section id='achievements' className='mb-5'>
        <Achi/>
      </section>
      <section id="contact"  className='mb-5'>
        <Contact/>
      </section>
      </div>
      
    </>
  )
}

export default App
