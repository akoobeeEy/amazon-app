import React from "react";
import {Home, Cart, Registration, SignIn} from "./pages/index"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { productsData } from "./api/api";

import Layout from "./components/Layout";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
  
   <Route>
       <Route path="/" element={<Layout/>}> 
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        </Route>
        <Route path="/signup" element={<SignIn/>}></Route>
        <Route path="/registration" element={<Registration/>}> </Route>
        </Route>


       
        
       
  ));
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
