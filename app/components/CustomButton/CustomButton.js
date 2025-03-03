import { Button } from 'keep-react'
import React from 'react'
import "./btnstyle.css"
export default function CustomButton({text}) {
  return (
    <button type='submit' className="btnBg">{text}</button>
  )
}
