import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

function Bottom() {
  return (
    <div className='flex mt-3 pl-20 justify-baseline gap-3'>
      <FaFacebook color="white"/>
    <FaLinkedin color="white"/>
    <FaInstagramSquare color="white"/>
<FaWhatsappSquare color="white" />
    </div>
  )
}

export default Bottom
