import ReactDOM from "react-dom";
import React from "react";
console.log(ReactDOM);
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/About";
import ErrorPage from "./src/ErrorPage";
const App = () => {
  return (
    <div>
      APP PAGE
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "/about", element: <About /> }],
  },
  ,
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router={appRouter} />);
