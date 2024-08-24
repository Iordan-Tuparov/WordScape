import "./Home.css";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

import { lists } from "../../services/listService";
import ListItemComponent from "./ListItemComponent";

function HomeComponent() {
  const [allLists, setAllLists] = useState([{}]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await lists();

        setAllLists(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <div className="card-wrapper">
          {allLists.length === 0 ? (
            <h1>Do not have allready listed items!</h1>
          ) : (
            allLists.map((item, index) => (
              <ListItemComponent key={index} item={item} user={user}/>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
