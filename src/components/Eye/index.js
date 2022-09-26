import React from "react";
import { useRef, useState, useEffect }  from "react";
import EyeImg from "../../assets/img/eye.png";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "./Eye.css";

const Eye = props => {

 {/* 
  let elem = document.querySelector('img');
  let eye = elem.getBoundingClientRect();
  for (const key in eye) {
    if (typeof eye[key] !== 'function') {
      //setEyeX(eye[key]);
    }
  }


  function update() {
    const container = document.getElementById("Bg_RandomNfts");
    const elem = document.getElementById("eye");
    const eye = elem.getBoundingClientRect();
  
    container.innerHTML = '';
    for (const key in eye) {
      if (typeof eye[key] !== 'function') {

        const eyeXX = eye[key];
      }
    }
  }

  document.addEventListener('scroll', update);
  update();
*/}




  // This ref will be connected to the eye img
  const eyeRef = useRef();

  // Define the vars that need to be recalculated (position and size)
  const [eyeX, setEyeX] = useState();
  const [eyeY, setEyeY] = useState();
  const [eyeWidth, setEyeWidth] = useState();
  const [eyeHeight, setEyeHeight] = useState();

  // This function calculate eye's size
    const getEyeSize = () => {
      const eyeWidth = eyeRef.current.clientWidth;
      setEyeWidth(eyeWidth);
      const eyeHeight = eyeRef.current.clientHeight;
      setEyeHeight(eyeHeight);
    };

  // This function calculate eye's X and Y
  const getPosition = () => {
    const eyeX = eyeRef.current.getBoundingClientRect().left;
    setEyeX(eyeX);
    const eyeY = eyeRef.current.getBoundingClientRect().top;
    setEyeY(eyeY);
  };

  // Get the position of the eye in the beginning
  useEffect(() => {
    getPosition();
    getEyeSize();
  }, []);

  // Re-calculate X and Y of the eye when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
    window.addEventListener("resize", getEyeSize);
  }, []);  

   // Re-calculate X and Y of the eye when scrolling by the user
   useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, []);  

  // This function calculate the current mouse position
  const mousePosition = useMousePosition();
  const { width, height } = useWindowDimensions();

  // This function calculate the rotation relative to the current mouse position
  const deltaX = (eyeX + eyeWidth/2) - mousePosition.x;
  const deltaY = (eyeY + eyeHeight/2) -  mousePosition.y;
  const rad = Math.atan2(deltaY, deltaX);
  let deg = Math.round(rad * (180 / Math.PI));
  if(deg <0) {
    deg = (deg + 360) % 360;
  }
  let rotation = deg;



  


  return <>
      <div id={props.id} className="eye">
        <img ref={eyeRef} id="eye" src={EyeImg} style={{ transform: `rotate(${rotation}deg)`, webkitTransition: `rotate(${rotation}deg)` }} alt="eye" />
      </div>
      {/*
      <h1>Deg: {deg}</h1>
      <h1>Rotation: {rotation}</h1>
       */}
    </>
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

    React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default Eye;
  

