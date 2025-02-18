import { Button } from 'keep-react'
import React from 'react'
import "./btnstyle.css"
export default function CustomButton({text}) {
  return (
    <button className="btnBg">{text}</button>
  )
}
