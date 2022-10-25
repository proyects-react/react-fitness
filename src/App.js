
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home2 from './components/Home2';
import Biceps from './components/Biceps'
import Forearms from './components/Forearms'

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <Router>
        <Home2 />
        <Routes>
          <Route patch="/" element={<Home2 />} />
          <Route path="/biceps" element={<Biceps />}/>
          <Route path="/forearm" element={<Forearms />}/>
        </Routes>
      </Router>
      </>    
  );
}

export default App;
