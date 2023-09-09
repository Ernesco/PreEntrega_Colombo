import React from 'react'

export const Button = ({ text, cb}) => {
  return (
    <button onClick={cb}>
        { text }
    </button>
  )
}
