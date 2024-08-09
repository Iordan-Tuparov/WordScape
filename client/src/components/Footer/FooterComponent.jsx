import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function FooterComponent() {
    return (
        <>
            <footer>
                <ul>
                    <p>&copy; 2024 WordScape</p>
                    <p>Designed by Iordan Typarow</p>
                    <li><a href="https://www.facebook.com/profile.php?id=100084871037402"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/_tuparow_"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/iordan-typarov-5848b3299"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://github.com/Iordan-Tuparov"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </footer>

        </>
    )

}

export default FooterComponent;

