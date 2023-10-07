import React, { useRef, useState } from 'react';

// interface SpinnableProps {
//   imageSrc: { src: string };
// }
/**
 * RotateObject component allows an object to be rotated on click.
 */
const Rotate: React.FC = ( ) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  /**
   * Handle the mouse down event to start rotating the object.
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  /**
   * Handle the mouse move event to rotate the object.
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      setRotation((prevRotation) => ({
        x: prevRotation.x + deltaY * 0.1,
        y: prevRotation.y + deltaX * 0.1,
      }));
      lastPosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  /**
   * Handle the mouse up event to stop rotating the object.
   */
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src="/earth.png"
        alt="Earth"
        draggable="false"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformOrigin: 'center',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          objectFit: 'cover',
        }}
      />
    </div>

  );
};


export default Rotate;
