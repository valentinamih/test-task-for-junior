import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Carousel } from './Components/Carousel/Carousel'
import { MainSection } from './Components/MainSection/MainSection'
import { Footer } from './Components/Footer/Footer'

function App() {
  return <div className='App'>
    <Header />
    <Carousel />
    <MainSection />
    <Footer />
  </div>
}

export default App
