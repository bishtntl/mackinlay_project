import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactCompo from "./Components/Contact";
import Mission from "./Components/Mission";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import SignupCompo from "./Components/Register";
import LoginCompo from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/contact" element={<ContactCompo />}></Route>
          <Route path="/signup" element={<SignupCompo />}></Route>
          <Route path="/login" element={<LoginCompo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
