import React from 'react'
import Home from './pages/Home';
import Tours from './pages/Tours';
import Books from './pages/Books';
import Pages from './pages/Pages';
import Blogs from './pages/Blogs';
import Features from './pages/Features';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route
     path="/" 
     element={<Home />}>
  </Route>
  <Route
     path="/tours" 
     element={<Tours />}>
  </Route>
  <Route
     path="/books" 
     element={<Books />}>
  </Route>
  <Route
     path="/pages" 
     element={<Pages />}>
  </Route>
  <Route
     path="/blogs" 
     element={<Blogs />}>
  </Route>
  <Route
     path="/features" 
     element={<Features />}>
  </Route>
  </>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App