import { useContext, useState } from "react";
import "./LoginComponent.css";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import { login } from "../../services/authService";

function LoginComponent() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSetValueHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await login(values.username, values.password);

      userLogin(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      {error ? <p className="register-error">{error}</p> : ""}
      <form className="login-info" onSubmit={onLogin}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={onSetValueHandler}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onSetValueHandler}
          placeholder="Password"
        />
        <button>Login</button>
        <p>
          <Link to="/auth/register">You don't have account?</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginComponent;
