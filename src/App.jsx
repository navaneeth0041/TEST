import React from "react";
import SignUpForm from "./SignUpForm";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element = {<SignUpForm/>}></Route>
      <Route path="/login" element = {<Login/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
