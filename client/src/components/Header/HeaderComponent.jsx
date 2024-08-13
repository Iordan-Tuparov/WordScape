import "./Header.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function HeaderComponent() {
  const { user, isAuthenticated,userLogout } = useContext(AuthContext);

  return (
    <>
      <div className="ul-container">
        <ul className="logo-container">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faSlack} />
              WordScape
            </Link>
          </li>
        </ul>

        <ul className="user-auth">
          {isAuthenticated ? (
            <>
              <li className="username">
                <p>Welcome {user.username}</p>
              </li>
              <li>
                <Link to="/auth/profile">Profile</Link>
              </li>

              <li>
                <a onClick={userLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth/login">Login</Link>
              </li>
              <li>
                <Link to="/auth/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default HeaderComponent;
