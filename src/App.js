
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from './components/Home2';
import Biceps from './components/Biceps/Biceps'
import Forearms from './components/Forearms/Forearms'
import Chest from './components/Chest/Chest';
import Abs from './components/Abs/Abs';
import UpperBack from './components/UpperBack/UpperBack';
import LowerBack from './components/LowerBack/LowerBack';

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/biceps" element={<Biceps />}/>
          <Route path="/forearm" element={<Forearms />}/>
          <Route path="/chest" element={<Chest />}/>
          <Route path="/abs" element={<Abs />}/>
          <Route path="/UpperBack" element={<UpperBack />}/>
          <Route path="/LowerBack" element={<LowerBack />}/>
        </Routes>
      </main>
    </BrowserRouter>
      
      
      </>    
  );
}

export default App;
