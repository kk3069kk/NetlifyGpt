import { useSelector } from "react-redux"
import Movietitle from "./Movietitle";

const Secondarycomponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black px-6 md:px-12 py-10 space-y-14">
      <Movietitle title={"Now Playing"} movies={movies?.nowplayingmovies} />
      <Movietitle title={"Popular Movies"} movies={movies?.nowpopularmovies} />
      <Movietitle title={"Top Rated"} movies={movies?.nowtopratedmovies} />
      <Movietitle title={"Upcoming Movies"} movies={movies?.nowupcomingmovies} />
    </div>
  );
};

export default Secondarycomponent;
