
import {Link} from "react-router-dom"
const Home2 = () => {

  const muscles = [
    {
      id: 1,
      title: "Biceps y hombros",
      img: "./images/Hombro&Biceps.png",
      page: "/biceps"
    },
    {
      id: 2,
      title: "Antebrazo",
      img: "./images/Antebrazo.png",
      page: "/forearm"
    },
    {
      id: 3,
      title: "Chest",
      img: "./images/Chest.png",
      page: "/chest"
    },
    {
      id: 4,
      title: "Abs",
      img: "./images/Abs.png",
      page: "/abs"
    },
    {
      id: 5,
      title: "Side-Abs",
      img: "./images/Side-Abs.png"
    },
    {
      id: 6,
      title: "Upper-Back",
      img: "./images/Upper-Back.png",
      page: "/UpperBack"
    },
    {
      id: 7,
      title: "Lower-Back",
      img: "./images/Lower-Back.png",
      page: "/LowerBack"
    },
    {
      id: 8,
      title: "Glutes",
      img: "./images/Glutes.png"
    },
    {
      id: 9,
      title: "Upper-Legs",
      img: "./images/Upper-Legs.png"
    },
    {
      id: 10,
      title: "Lower-Legs",
      img: "./images/Lower-Legs.png"
    }

  ]


  return (
    <>
      <div className="container">
        <div className="row">
          {muscles.map(item => {
            return(
              <div className="col" key={item.id}>
                <Link to={item.page}>
                    <img src={item.img} alt={item.title} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Home2;
