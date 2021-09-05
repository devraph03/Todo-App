import React from 'react'

const Footer = ({name}) => {
    return (
        <footer className="text-center">
            <h6>Made by {name} {new Date().getFullYear()}</h6>
        </footer>
        
    )
}

export default Footer
