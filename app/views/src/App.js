import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>

              <Route exact path='/' element={<User/>}/>


              <Route exact path='/' element={<Home/>}/>

          </Routes>
        </div>
      </Router>
  );
};

export default App;
