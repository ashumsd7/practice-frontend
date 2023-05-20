import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import store from "./store";

function LazyPage() {
  const { user, setData } = useContext(UserContext);
//   const names= useSelector(store)
  console.log("names", names);
  return (
    <div>
      LazyPage {user}
      <button
        onClick={() => {
          setData("Komal");
        }}
      >
        Hello
      </button>
    </div>
  );
}

export default LazyPage;
