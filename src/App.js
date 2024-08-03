import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Notfound from "./components/NotFound/Notfound";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
