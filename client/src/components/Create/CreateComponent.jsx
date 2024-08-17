import "./CreateComponent.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createList } from "../../services/listService";
import { ListContext } from "../../context/listContext";

function CreateComponent() {
  const [values, setValues] = useState({
    text: "",
  });
  const { setCurrentList } = useContext(ListContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSetValueHandler = (e) => {
    setValues((state) => ({ state, [e.target.name]: e.target.value }));
  };

  const onCreate = async (e) => {
    e.preventDefault();

    try {
      const list = await createList(values.text);

      setCurrentList(list);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="create-wrapper">
      <div className="form-wrapper">
        {error ? <p className="register-error">{error}</p> : ""}
        <form onSubmit={onCreate}>
          <textarea
            name="text"
            value={values.text}
            onChange={onSetValueHandler}
            placeholder="Some text..."
          ></textarea>
          <button>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default CreateComponent;
