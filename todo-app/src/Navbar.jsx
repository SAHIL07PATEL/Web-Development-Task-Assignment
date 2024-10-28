/* eslint-disable react/prop-types */
import { memo } from "react"
const Navbar = ({adjactive,getAdjactive}) => {

  console.log("Navbar is Rerender");
  
  return (
    <div>
      i am a {adjactive} navbar

      <button>{getAdjactive()}</button>
    </div>
  )
}

export default memo(Navbar)
