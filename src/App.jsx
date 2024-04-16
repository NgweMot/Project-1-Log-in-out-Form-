import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./pages";


const App = () => {
    return <>
<Routes>
  <Route path="/" element={<SignIn/>}/>
  <Route path="/sign_up" element={<SignUp/>}/>
</Routes>
    </>;
};

export default App;
