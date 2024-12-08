// import './App.css'
import Hero from "./Hero"
import Navbar from "./Navbar"
import HomeBlog from "./HomeBlog"

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-24 container mx-auto">
        <Hero />
        <HomeBlog />
      </div>
    </>
  )
}

export default App
