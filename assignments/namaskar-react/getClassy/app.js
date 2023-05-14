import ReactDOM from "react-dom";
import React from "react";
console.log(ReactDOM);
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/About";
import ErrorPage from "./src/ErrorPage";
import Profile from "./src/ClassBasedComponent";
const App = () => {
  return (
    <div>
      APP PAGEs
      <Profile name="class-based-component"/>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "/about", element: <About />, children:[
      {
        path:'about-profile',
        element:<Profile/>
      }
    ] }],
  },
  ,
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router={appRouter} />);
