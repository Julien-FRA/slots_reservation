import { BrowserRouter as Router, Link } from "react-router-dom";
import { RouterContainer } from "./Router";
import Header from "./components/Inc/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import { createContext, useEffect, useState } from "react";
import { getUser } from "./services/UserRequest";

export const UserContext = createContext<any>([])

//YOU CAN IMPORT FOOTER HERE
const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
      (
        async () => {
            const response = await getUser();
            setUsers(response)
        }
      )();
  }, [])

  return (
    <UserContext.Provider value={[users, setUsers]}>
      <Router>
        <div className="app">
          <Header />
          <RouterContainer />
        </div>
      </Router>*
    </UserContext.Provider>
  );
};

export default App;