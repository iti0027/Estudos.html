import React from 'react';
import { GiPerspectiveDiceOne, GiPerspectiveDiceTwo, GiPerspectiveDiceThree, GiPerspectiveDiceFour, GiPerspectiveDiceFive, GiPerspectiveDiceSix } from 'react-icons/gi';
 
function Dado({ valor }) {
  const icones = {
    1: GiPerspectiveDiceOne,
    2: GiPerspectiveDiceTwo,
    3: GiPerspectiveDiceThree,
    4: GiPerspectiveDiceFour,
    5: GiPerspectiveDiceFive,
    6: GiPerspectiveDiceSix,
  };
 
  return (
    <div className="Dado">
      {React.createElement(icones[valor], { size: 150 })}
    </div>
  );
}
 
export default Dado;