import React from 'react'
import './style.scss'

const CustomButton = ({ children, ...props }) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
)

export default CustomButton