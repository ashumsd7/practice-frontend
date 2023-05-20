import ReactDOM from "react-dom";
import React, { Suspense, lazy, useState } from "react";
console.log(ReactDOM);
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/About";
import ErrorPage from "./src/ErrorPage";
import Profile from "./src/ClassBasedComponent";
import useGetTime from "./src/useGetTime";
import Instamart from "./src/LazyPage";
import LazyPage from "./src/LazyPage";
import { useContext } from "react";
import UserContext from "./src/UserContext";

const App = () => {
  const data = useGetTime();
  const [userName, setUserName] = useState("Ashu");
  const userInfo = useContext(UserContext);
  console.log("from context is", userInfo);
  return (
    <div>
      APP PAGEs
      {/* <Profile name="class-based-component" /> */}
      <Outlet />
      <UserContext.Provider value={{ user: userName, setData: setUserName }}>
        <LazyPage />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "about-profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/lazy-page",
        element: <Instamart />,
      },
    ],
  },
  ,
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router={appRouter} />);
