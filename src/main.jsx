import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Home , Projects, Edu, Links, Resume, Skills} from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route path="" element={<Home/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="edu" element={<Edu/>}/>
    <Route path="skills" element={<Skills/>}/>
    <Route path="resume" element={<Resume/>}/>
    <Route path="links" element={<Links/>}/>
  </Route>)
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
