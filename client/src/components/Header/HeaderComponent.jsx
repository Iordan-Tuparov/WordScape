import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack } from "@fortawesome/free-brands-svg-icons"

function HeaderComponent() {
    return (
        <>
            <div className="ul-container">

                <ul className="logo-container">
                    <li><a href="#"><FontAwesomeIcon icon={faSlack}/>WordScape</a></li>
                </ul>

                <ul>
                    <li><a href="#">Messages</a></li>
                </ul>

                <ul className="user-auth">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </>
    )
}

export default HeaderComponent;