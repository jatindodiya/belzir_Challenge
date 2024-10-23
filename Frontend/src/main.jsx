import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

import { ProtectedRoute} from "./component/index.js";
import { Home, Login, Page404} from "./Pages/index.js";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element="" >
        <Route path="" element={(<ProtectedRoute Component={Layout} />)} >
          <Route path="" element={<Home />} > </Route>

          {/* <Route path='products' element={<ProductPage />} >
          <Route path=':productId' element={<ProductPage />} />
          </Route> */}
        </Route>
        <Route path="/login" element={<Login />} /> 
        <Route path="" element={<Layout />}>
          <Route path='404' element={<Page404 />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Route>
  )
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

