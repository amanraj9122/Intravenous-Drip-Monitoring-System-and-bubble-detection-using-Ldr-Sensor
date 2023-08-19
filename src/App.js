import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import Chat from './components/Chat'
import { useState } from 'react';
import Login from './components/Login';
import {useStateValue} from "./StateProvider"
import Signup from './components/Signup';
import { useHistory } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
// import Renter from './components/Renter';
// import Rented from './components/Rented';
import Monitor from './components/Monitor';
function App() {
  // const [user,setuser]=useState(null); 
  const [{user},dispatch]=useStateValue();
  return (
    //BEM naming convention 
    <div className="App">
    <Router>
      <Switch>
    <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
          {/* Login */}
        </Route>
        <Route path="/signup">
          <Signup></Signup>
          {/* SignUp */}
        </Route>
        <Route path="/main/:email">
          <Main></Main>
          {/* SignUp */}
        </Route>
        <Route path="/monitor/:email">
          <Monitor></Monitor>
          {/* SignUp */}
        </Route>
      </Switch>
      {/* <Switch> */}
        
      {/* </Switch> */}
    </Router>
     
    </div>
  );
}

export default App;
