import "./RegisterComponent.css";

import { useState, useContext, createRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../services/authService";
import { AuthContext } from "../../context/authContext";

function RegisterComponent() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const fileInput = createRef();
  const [error, setError] = useState("");

  const onSetValueHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const { userRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);
    formData.set("username", values.username);
    formData.set("password", values.password);
    formData.set("repeatPassword", values.repeatPassword);

    if (!fileInput.current.files[0]) {
      throw {
        message: "Please select a avatar!",
      }
    }
    
    try {
      const user = await register(formData);

      userRegister(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-wrapper">
      <h1>Register</h1>
      {error ? <p className="register-error">{error}</p> : ""}
      <form className="register-info" onSubmit={onRegister}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={onSetValueHandler}
          placeholder="Username"
        />
        <input type="file" name="image" ref={fileInput} placeholder="Avatar" />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onSetValueHandler}
          placeholder="Password"
        />
        <input
          type="password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onSetValueHandler}
          placeholder="Repeat Password"
        />
        <button>Register</button>
        <p>
          <Link to="/auth/login">Already have account?</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterComponent;
