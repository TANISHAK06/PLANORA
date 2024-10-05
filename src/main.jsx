import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./create-trip/index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/ui/custom/Header.jsx";
const router = createBrowserRouter([
  {
    path: "/PLANORA",
    element: <App />,
  },
  {
    path: "/PLANORA/create-trip",
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
