
import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="App bg-gradient-dark">
        <Header />
         <Hero />
         <Tech />
        <Projects />
        <Experience />
        <Contact />
        </div>
    </>
  )
}

export default App
