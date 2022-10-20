import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        (<SocialIcon url="https://github.com/bremus124" />),
        (<SocialIcon url="https://www.linkedin.com/in/brittany-remus" />),
        (<SocialIcon url="https://www.instagram.com/bremus124" />)

    </footer>
    )
}

export default Footer;