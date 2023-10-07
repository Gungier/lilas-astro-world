import React, { useEffect, useRef } from 'react';
import './Spinnable.css';

interface SpinnableProps {
  imageSrc: { src: string };
}
/**
 * Spinnable component for rotating an element.
 */
const Spinnable: React.FC<SpinnableProps> = ({ imageSrc }) => {
  const spinnableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinnable = spinnableRef.current;
    if (!spinnable) return;

    let isDragging = false;
    let initialMouseX = 0;
    let initialMouseY = 0;
    let initialAngle = 0;

    /**
     * Calculate the angle between the initial and current mouse positions.
     * @param {MouseEvent} e - The mouse event.
     * @returns {number} The calculated angle.
     */
    const calculateAngle = (e: MouseEvent): number => {
      const dx = e.clientX - initialMouseX;
      const dy = e.clientY - initialMouseY;
      let angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return angle + initialAngle;
    };

    /**
     * Handle mouse down event.
     * @param {MouseEvent} e - The mouse event.
     */
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      initialAngle = parseFloat(spinnable.style.transform.replace(/[^0-9.]/g, '')) || 0;
    };

    /**
     * Handle mouse move event.
     * @param {MouseEvent} e - The mouse event.
     */
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const angle = calculateAngle(e);
      spinnable.style.transform = `rotate(${angle}deg)`;
    };

    /**
     * Handle mouse up event.
     */
    const onMouseUp = () => {
      isDragging = false;
    };

    spinnable.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      spinnable.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div id="spinnable-container">
      <div id="spinnable" ref={spinnableRef}>
        <img src={imageSrc.src} alt="Spinnable" />
      </div>

    </div>
  );
};

export default Spinnable;
