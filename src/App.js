import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import SignUP from "./Screens/SignUp";
import Predict from "./Screens/Predict";
import About from "./Screens/About";

  

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<SignUP />} />
    <Route path="predict" element={<Predict />} />
    <Route path="about" element={<About />} />
  </Routes>
  </BrowserRouter>
}

export default App;
