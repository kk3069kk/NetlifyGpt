
import { useSelector } from 'react-redux'
import Viedotitle from './Viedotitle';
import ViedoBackground from './ViedoBackground';

const Maincontainer = () => {

    const movies = useSelector((store)=>store.movies?.nowplayingmovies);
    if(!movies) return;

    const mainmovie = movies[0];

    const{original_title,overview , id} = mainmovie;
  return (
    <div >
      <Viedotitle title={original_title} overview ={overview}/>
      <ViedoBackground movie_id={id}/>
    </div>
  )
}

export default Maincontainer