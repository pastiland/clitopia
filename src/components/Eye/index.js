import React from "react";
import { useRef, useState, useEffect, useCallback }  from "react";
import EyeImg from "../../assets/img/eye.png";
import "./Eye.css";

const Eye = props => {

  // This ref will be connected to the eye img
  const eyeRef = useRef();

  // Define the vars that need to be recalculated (position and size)
  const [eyeX, setEyeX] = useState(0);
  const [eyeY, setEyeY] = useState(0);
  const [eyeWidth, setEyeWidth] = useState(0);
  const [eyeHeight, setEyeHeight] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  // This function calculate eye's size
  const getEyeSize = useCallback(() => {
    if (eyeRef.current) {
      const eyeWidth = eyeRef.current.clientWidth;
      setEyeWidth(eyeWidth);
      const eyeHeight = eyeRef.current.clientHeight;
      setEyeHeight(eyeHeight);
    }
  }, []);

  // This function calculate eye's X and Y
  const getPosition = useCallback(() => {
    if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      setEyeX(rect.left + rect.width / 2);
      setEyeY(rect.top + rect.height / 2);
    }
  }, []);

  // Get the position of the eye in the beginning
  useEffect(() => {
    getPosition();
    getEyeSize();
  }, []);

  // Re-calculate X and Y of the eye when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
    window.addEventListener("resize", getEyeSize);

    return () => {
      window.removeEventListener("resize", getPosition);
      window.removeEventListener("resize", getEyeSize);
    };
  }, [getPosition, getEyeSize]);

   // Re-calculate X and Y of the eye when scrolling by the user
   useEffect(() => {
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  }, [getPosition]);  

  // This function calculate the current mouse position
  const mousePosition = useMousePosition();

  // Calculate smooth rotation to avoid 360 degree jumps
  useEffect(() => {
    if (!mousePosition.x || !mousePosition.y || !eyeX || !eyeY) {
      return;
    }

    const updateRotation = () => {
      // Calculate the angle from eye center to mouse (pointing TO the cursor)
      const deltaX = mousePosition.x - eyeX;
      const deltaY = mousePosition.y - eyeY;
      // atan2 gives us the angle, but we need to adjust for the eye image's initial pupil position
      // The pupil is at 180° (pointing left), so we add 180° to align it with the cursor
      let targetAngle = (Math.atan2(deltaY, deltaX) * (180 / Math.PI)) + 180;

      // Function to get the shortest angular distance between two angles
      const getAngleDifference = (target, current) => {
        let diff = target - current;

        // Normalize to -180 to +180 range
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;

        return diff;
      };

      setCurrentRotation(prevRotation => {
        // Calculate the shortest rotation path
        const angleDiff = getAngleDifference(targetAngle, prevRotation);

        // Apply smooth interpolation (smaller value = smoother but slower)
        return prevRotation + angleDiff * 0.15;
      });
    };

    updateRotation();
  }, [mousePosition.x, mousePosition.y, eyeX, eyeY]);







  return <>
      <div id={props.id} className="eye">
        <img
          ref={eyeRef}
          id="eye"
          src={EyeImg}
          style={{
            transform: `rotate(${currentRotation}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
          alt="eye"
        />
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
