import React from 'react'
import '../styles/button/button.scss'

export const Button = (
    {
        text = "Button",
        color,
        size,
        disabled,
        icon,
        iconPosition,
        onClick,
        onMouseEnter,
        onMouseLeave,
        className
    }
) => {

    return (
        <button className={`button ${color} ${size} ${className}`} disabled={disabled} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                icon && <span className={`button-icon icon-position-${iconPosition}`}>
                    {icon}
                </span>
            }
            <label> {text}</label>
        </button>
    )
}
