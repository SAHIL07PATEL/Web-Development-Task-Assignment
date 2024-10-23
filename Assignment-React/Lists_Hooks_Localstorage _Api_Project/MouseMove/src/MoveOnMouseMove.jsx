import React, { useEffect, useState } from 'react';

const MoveOnMouseMove = () => {
  const [position, setPosition] = useState({x:0,y:0});

  useEffect(() => {
    const handleMoseMove = (event) =>{
      setPosition({
        x:event.clientX,
        y:event.clientY
      })
    }

    window.addEventListener('mousemove',handleMoseMove)
  }, []);

  
  return (
    <div>
      <div style={{height:"100vh", position:'relative',background:'gray'}}>
        <div 
         style={{
          width:'50px',
          height:'50px',
          background:'white',
          borderRadius:'50%',
          position:'absolute',
          left:position.x - 25,
          top:position.y - 25,
          transition:'transform 0.1s'
         }}
        >


        </div>
      </div>
    </div>
  );
}

export default MoveOnMouseMove;
