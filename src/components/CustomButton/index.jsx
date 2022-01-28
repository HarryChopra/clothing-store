import React from 'react'
import './style.scss'

const CustomButton = ({ children, isOAuth, ...props }) => (
    <button className={`${isOAuth ? 'oauth-button' : ''} custom-button`} {...props}>
        {children}
    </button>
)

export default CustomButton