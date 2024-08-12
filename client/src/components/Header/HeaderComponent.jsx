import './Header.css'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack } from "@fortawesome/free-brands-svg-icons"

function HeaderComponent() {
    return (
        <>
            <div className="ul-container">

                <ul className="logo-container">
                    <li><Link to="/"><FontAwesomeIcon icon={faSlack} />WordScape</Link></li>
                </ul>

                <ul className="user-auth">
                    <li><Link to="/auth/profile">Profile</Link></li>
                    <li><Link to="/auth/login">Login</Link></li>
                    <li><Link to="/auth/register">Register</Link></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </>
    )
}

export default HeaderComponent;