import React, { useEffect, useState } from "react";
import './MouseFollower.css' ; // where styles will live

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="mouse-follower"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}