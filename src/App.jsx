import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/home'
import Footer from './components/Footer/Footer'
import Down from './components/Down/Down'


const App = () => {
  return (
    <>
      <Header id='top'/>
      <main >
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          {/* <Route path='/about' element={'about component'} ></Route>
          <Route path='/services' element={'services component'} ></Route>
          <Route path='/contact' element={'contact component'} ></Route>
          <Route path='/career' element={'career component'} ></Route>
          <Route path='/estimate' element={'estimate component'} ></Route> */}
          <Route path='/*' element={<Down />} ></Route>
        </Routes>
      </main>
      <Footer />
      <a href='#top' className='button fixed bottom-2 right-2'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>
      </a>
    </>
  )
}

export default App