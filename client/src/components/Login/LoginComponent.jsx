import "./LoginComponent.css"

import { Link } from "react-router-dom"

function LoginComponent() {
    return (
        <div className="login-wrapper">
            <div className='login-info'>
                <h1>Login</h1>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
                <p><Link to="/auth/register">You don't have account?</Link></p>
            </div>
        </div>
    )
}

export default LoginComponent;