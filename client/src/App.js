import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscrren from "./screens/Bookingscrren";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";  
import Landingscreen from "./screens/Landingscreen";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/adminscreen";

function App() {
  return (
    <Router> {}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path='/book/:roomid/:fromdate/:todate' element={<Bookingscrren />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />  {}
          <Route path="/" element={<Landingscreen />} />
          <Route path="/profile" element={<Profilescreen/>}/>
          <Route path="/admin" element={<Adminscreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
