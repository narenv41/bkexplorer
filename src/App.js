import './Styles/App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Pages/about'; // Corrected the component name (home to Home)
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} /> 
          <Route path="/about" exact element={<About />} /> {/* Fixed the prop name "componenet" to "element" */}
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
