import './RegisterComponent.css'

import { Link } from "react-router-dom"

function RegisterComponent() {
    return (
        <div className='register-wrapper'>
            <h1>Register</h1>
            <div className='register-info'>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Repeat Password' />
                <button>Register</button>
                <p><Link to="/auth/login">Already have account?</Link></p>
            </div>
        </div>
    )
}

export default RegisterComponent;