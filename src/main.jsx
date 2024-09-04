import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root";
import Home from "../src/Pages/Home";
import AuthProvider from "./firebase/AuthProvider";
import Contact from "./Pages/Contact";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ProfileUpdate from "./Pages/ProfileUpdate";
import PrivetRoute from "./Routes/PrivetRoute";
import PropertyDetails from "./Pages/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <PropertyDetails />,
          </PrivetRoute>
        ),
        loader: () => fetch(`/residential.json`),
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <ProfileUpdate />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
