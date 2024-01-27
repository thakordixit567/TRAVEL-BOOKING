import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Booking from './components/Booking'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[url(../src/assets/beach.jpg)] bg-cover bg-no-repeat'>
      <Header/>
      <section className='h-screen'>
        <Booking/>
        <div>Table</div>
        </section>
    </div>
  )
}

export default App
