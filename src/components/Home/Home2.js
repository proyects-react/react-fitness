
import {Link} from "react-router-dom"
import "./Home.css"
const Home2 = () => {

  const muscles = [
    {
      id: 1,
      title: "Biceps",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/biceps_0.jpg",
      page: "/biceps"
    },
    {
      id: 2,
      title: "Forearms",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/forearms_0.jpg",
      page: "/forearm"
    },
    {
      id: 3,
      title: "Chest",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/chest_0.jpg",
      page: "/chest"
    },
    {
      id: 4,
      title: "Abs",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abs_0.jpg",
      page: "/abs"
    },
    {
      id: 5,
      title: "Abductors",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/abductors.jpg",
      page:"/Abductors"
    },
    {
      id: 6,
      title: "Upper-Back",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/upperback.jpg",
      page: "/UpperBack"
    },
    {
      id: 7,
      title: "Adductors",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/adductors.jpg",
      page: "/Adductors"
    },
    {
      id: 8,
      title: "Glutes",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/glutes_0.jpg",
      page: "/Glutes"
    },
    {
      id: 9,
      title: "Quads",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/quads_1.jpg",
      page:"/Quads"
    },
    {
      id: 10,
      title: "Calves",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/calves_0.jpg",
      page:"/Calves"
    },
    {
      id: 11,
      title: "Hamstrings",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/hamstrings_0.jpg",
      page:"/Hamstrings"
    },
    {
      id: 12,
      title: "Lats",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/lats_0.jpg",
      page:"/Lats"
    },
    {
      id: 12,
      title: "Delts",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/shoulders_0.jpg",
      page:"/Delts"
    },
    {
      id: 13,
      title: "Traps",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/traps_0.jpg",
      page:"/Traps"
    },
    {
      id: 14,
      title: "Triceps",
      img: "https://cdn.muscleandstrength.com/sites/default/files/taxonomy/image/videos/triceps_0.jpg",
      page:"/Triceps"
    },

  ]


  return (
    <>
      <div className="container">
        <div className="row">
          {muscles.map(item => {
            return(
              <div className="col img-muscles" key={item.id}>
                    <h4>{item.title}</h4>
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
