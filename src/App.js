
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Components/Login/login";
import Header from "./Components/Header/header";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Jobs from "./Pages/jobs";
import About from "./Pages/About";
import { useState } from "react";
import NotFound from "./Pages/NotFound";

function App() {
  const [islogged, setLogged] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setLogged} />}></Route>
          <Route path="*" element={<NotFound value="un Authorized" />}></Route>
          {islogged && (
            <>
              <Route path="header" element={<Header />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="jobs" element={<Jobs />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route index path="home" element={<Home />}></Route>
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
