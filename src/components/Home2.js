import hombroYbiceps from "../images/Hombro&Biceps.png";
import antebrazo from "../images/Antebrazo.png";
import chest from "../images/Chest.png";
import abs from "../images/Abs.png";
import sideAbs from "../images/Side-Abs.png";
import upperBack from "../images/Upper-Back.png";
import lowerBack from "../images/Lower-Back.png";
import glutes from "../images/Glutes.png";
import upperLeggs from "../images/Upper-Legs.png";
import lowerLegs from "../images/Lower-Legs.png";
import styled from "styled-components";
import {Link, BrowserRouter} from "react-router-dom"
const Home2 = () => {
  return (
    <>

      <BtnHombro>
          <div>
            <Link to="/biceps"><img src={hombroYbiceps} /></Link>
            <Link to="/forearm"> <img src={antebrazo} /> </Link>
          </div>
          <div>
            <img src={chest} />
            <img src={abs} />
          </div>
          <div>
            <img src={sideAbs} />
            <img src={upperBack} />
          </div>
          <div>
            <img src={lowerBack} />
            <img src={glutes} />
          </div>
          <div>
            <img src={upperLeggs} />
            <img src={lowerLegs} />
          </div>
      </BtnHombro>
      
    </>
  );
};

export default Home2;

const BtnHombro = styled.div`
display:flex;
align-items: center;
flex-direction: column;
  
`;
