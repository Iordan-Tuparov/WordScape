import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin } from "@fortawesome/free-solid-svg-icons";

function FooterComponent() {
    return (
        <>
            <footer>Site designed by Iordan &copy;
                <ul>
                    <li href="#"><FontAwesomeIcon icon={faFaceGrin} /></li>
                    <li href="#">Link</li>
                    <li href="#">Link</li>
                    <li href="#">Link</li>
                </ul>
            </footer>

        </>
    )

}

export default FooterComponent;

