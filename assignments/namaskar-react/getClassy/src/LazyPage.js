import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
function LazyPage() {
  const { user, setData } = useContext(UserContext);
  console.log("contextData", user);
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
