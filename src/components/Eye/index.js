import React from "react";
import EyeImg from "../../assets/img/eye.png";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "./Eye.css";

const Eye = props => {
  
  const mousePosition = useMousePosition();
  const { width, height } = useWindowDimensions();

  /*
  const eyeRef = React.useRef();
  const eyeX = eyeRef.current.offsetLeft;
  const eyeY = eyeRef.current.offsetTop;
  
  const relX = width / eyeX;
  const relY = height / eyeY;
*/
  const deltaX = (width/2) - mousePosition.x;
  const deltaY = (height/2) -  mousePosition.y;

  const rad = Math.atan2(deltaY, deltaX);
  let deg = Math.round(rad * (180 / Math.PI));
  if(deg <0) {
    deg = (deg + 360) % 360;
  }

  return <>
      <div id={props.id} className="eye">
        <img src={EyeImg} style={{ transform: `rotate(${deg}deg)` }} alt="eye" />
       {/* <h1>{deg}</h1>*/}
      </div>
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
  

