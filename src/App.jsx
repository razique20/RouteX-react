import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-white'>
      <main className='min-h-screen min-w-full'>
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
      </main>
      <Contact/>


    </div>
  )
}

export default App