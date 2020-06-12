import React from "react";
//import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
// Пример thunk.
// import getNewFox from './actionCreators/actionCreatorThunk';
// Пример saga.
//import { loadImageSaga } from "./actionCreators/actionCreatorSaga";
import NavBar from "./components/nav";
import Login from "./components/Login";
import Register from "./components/register";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/"></Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registration">
        <Register />
      </Route>
    </BrowserRouter>
  );
}

export default App;
