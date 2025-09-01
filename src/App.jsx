import './App.css'
import './assets/AllOff.jpg'
import { useState } from 'react'

function App() {

let click = event =>{
  console.log(event);
  const color = event.target.className
  if (color == 'red') { return 'red.active'

  }
}


  return (
    <>
      <div onClick={click} className='trafficLight'>
        <div className='red'>red</div>
        <div className='yellow'>yellow</div>
        <div className='green'>green</div>
      </div>
    </>
  )
}

export default App
