import React from 'react'
import './CustomButton.scss'

const CustomeButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}

export default CustomeButton
