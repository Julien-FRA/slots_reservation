import { BrowserRouter as Router, Link } from "react-router-dom";
import { RouterContainer } from "./Router";
import NavbarContainer from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Router>
        <div>
          <NavbarContainer/>
          <RouterContainer/>
        </div>
      </Router>
  );
};

export default App;