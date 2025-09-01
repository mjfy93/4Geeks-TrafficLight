import './App.css'
import './assets/AllOff.jpg'
import './assets/Red.jpg'
import './assets/Yellow.jpg'
import './assets/Green.jpg'
import './assets/Purple.jpg'
import { useState } from 'react'


const App = () => {
  const [activeLight, setActiveLight] = useState("");
  const allColors = ["red", "yellow", "green", "purple"]

  const handleClick = (color) => {
    setActiveLight(prevActiveLight => (prevActiveLight === color ? "" : color));
  };
  function cycleColors() {
    let activeIndex = allColors.indexOf(activeLight);
    if (activeIndex < 2) setActiveLight(allColors[activeIndex + 1])
    else setActiveLight(allColors[0])

  }


  return (
    <>
      <div id="traffic-light">
        <div
          className={`light red ${activeLight === allColors[0] ? 'active' : ''}`}
          onClick={() => handleClick('red')}
        ></div>
        <div
          className={`light yellow ${activeLight === allColors[1] ? 'active' : ''}`}
          onClick={() => handleClick('yellow')}
        ></div>
        <div
          className={`light green ${activeLight === allColors[2] ? 'active' : ''}`}
          onClick={() => handleClick('green')}
        ></div>
        <div
          className={`light purple ${activeLight === allColors[3] ? 'active' : ''}`}
        ></div>
      </div>
      <div id='button' onClick={() => handleClick(allColors[3])}>
        <button>Purple</button>
      </div>
      <div id='button' onClick={() => cycleColors({})}>
        <button>Cycle Colors</button>
      </div>
    </>
  );
};

export default App
