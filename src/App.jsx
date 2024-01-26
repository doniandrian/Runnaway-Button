/* eslint-disable react/prop-types */
import { useState , useRef } from "react";

import anime from "animejs/lib/anime.es.js";
import "./App.css";

function Tombol({handlebuttonclickno, handlebuttonclickyes, style, buttonRef}){
  return(
    <>
    <button onClick={handlebuttonclickno} onMouseOver={handlebuttonclickno} id="No" style={style} ref={buttonRef} >No🚫</button>
    <button onClick={handlebuttonclickyes} id="Yes">Yes👍</button>
    </>
  )
}

function App() {

  const buttonRef = useRef(null);

  const [position, setPosition] = useState({ top: 0, left: 0 });

  function handlebuttonclickno(){
    const left = getRandomNumber(window.innerWidth - buttonRef.current.offsetWidth - 500);
    const top = getRandomNumber(window.innerHeight - buttonRef.current.offsetHeight - 500);
    animateMove("#No", "left", left).play();
    animateMove("#No" , "top", top).play();
    setPosition({ top, left });

  }
  function handlebuttonclickyes(){
    alert("HAHAHA I knew it 🤣🤣");

  }


  const getRandomNumber = (num) =>{
    return Math.floor(Math.random() * (num + 1));
  }

  const animateMove = (element, prop, pixels) => {
    console.log('Animation Parameters:', element, prop, pixels);
    return anime({
      targets: element,
      [prop]: `${pixels}px`,
      easing: "easeOutCirc",
    });
  };
  

  return (
    <>
    <div className="App">
      <h1>Are you gay?</h1>
      <Tombol handlebuttonclickno={handlebuttonclickno} handlebuttonclickyes={handlebuttonclickyes} style={position} buttonRef={buttonRef} />
      

      
    </div>
  

    
    </>
  );
}

export default App;
