import { BrowserRouter as Router } from "react-router-dom";
import { RouterContainer } from "./Router";
import Header from "./components/Inc/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import { createContext, useEffect, useState } from "react";
import { getUser } from "./services/UserRequest";

interface User {
  id: string,
  email: string,
  name: string,
  role: string,
}

export const UserContext = createContext<User | null>(null);

//YOU CAN IMPORT FOOTER HERE
const App = () => {
  const dataUser = {
    id: "",
    email: "",
    name: "",
    role: "",
  }

  const [user, setUser] = useState(dataUser)

  useEffect(() => {
    const userConnect = async() => {
      try {
          var response = await getUser();
          setUser(response);
      } catch (error) {
          console.error(error);
      }
  }
  userConnect()
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div className="app">
          <Header />
          <RouterContainer />
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;