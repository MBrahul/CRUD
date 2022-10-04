import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import React, { useState } from 'react'
// import Alert from "./components/Alert.js";
import Home from "./Home.js";
import Create from "./Create.js";



function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route
             path='/'
            element={<Home/>}
            
          />
            <Route
             path='/create'
            element={<Create/>}
            
          />
          
         


        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
