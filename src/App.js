
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from './components/Home/Home2';
import Biceps from './components/Biceps/Biceps'
import Forearms from './components/Forearms/Forearms'
import Chest from './components/Chest/Chest';
import Abs from './components/Abs/Abs';
import UpperBack from './components/UpperBack/UpperBack';
import Glutes from './components/Glutes/Glutes';
import Quads from './components/Quads/Quads';
import Calves from './components/Calves/Calves';
import Abductors from './components/Abductors/Abductors';
import Adductors from './components/Adductors/Adductors';
import Hamstrings from './components/Hamstrings/Hamstrings';
import Lats from './components/Lats/Lats';
import Delts from './components/Delts/Delts';
import Traps from './components/Traps/Traps';
import Triceps from './components/Triceps/Triceps';
import Footer from './components/Footer/Footer';

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
          <Route path="/Adductors" element={<Adductors />}/>
          <Route path="/Glutes" element={<Glutes />}/>
          <Route path="/Quads" element={<Quads />}/>
          <Route path="/Calves" element={<Calves />}/>
          <Route path="/Abductors" element={<Abductors />}/>
          <Route path="/Hamstrings" element={<Hamstrings />}/>
          <Route path="/Lats" element={<Lats />}/>
          <Route path="/Delts" element={<Delts />}/>
          <Route path="/Traps" element={<Traps />}/>
          <Route path="/Triceps" element={<Triceps />}/>
        </Routes>
      </main>
    </BrowserRouter>
    <footer>
      <Footer/>
    </footer>
      
      
      </>    
  );
}

export default App;
