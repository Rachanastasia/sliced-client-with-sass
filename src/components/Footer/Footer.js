import React from 'react'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'


function Footer() {
    return (
        <footer><span>Rachel Reilly | 2020</span><a href='https://github.com/Rachanastasia'><SiGithub className='footer_icon' /></a><a href='https://www.linkedin.com/in/rachel-a-reilly/'><SiLinkedin className='footer_icon' /></a></footer>
    )
}

export default Footer
