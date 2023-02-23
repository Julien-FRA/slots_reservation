import { BrowserRouter as Router, Link } from "react-router-dom";
import { RouterContainer } from "./Router";
import Header from "./components/Inc/Header";
import Footer from "./components/Inc/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

//YOU CAN IMPORT FOOTER HERE
const App = () => {
  return (
      <Router>
        <div className="app">
          <Header/>
          <RouterContainer />
        </div>
      </Router>
  );
};

export default App;