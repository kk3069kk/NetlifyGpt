
import { useSelector } from 'react-redux';
import useGetmovies from '../Hooks/useGetmovies'
import useGetmoviespopular from '../Hooks/useGetmoviespopular.js';
import useGetmoviestoprated from '../Hooks/useGetmoviestop_rated.js';
import useGetmoviesupcoming from '../Hooks/useGetmoviesupcoming.js';
import Header from './Header';
import Maincontainer from './Maincontainer.jsx';
import Secondarycomponent from './Secondarycomponent.jsx';
import Gptsearch from './Gptsearch.jsx';


const Browse = () => {
 
const status = useSelector((store)=>store.gpt?.gptstate);
 useGetmovies();
 useGetmoviespopular();
 useGetmoviestoprated();
 useGetmoviesupcoming();
  
  return (
    <div>
      <Header/>
      {status? <Gptsearch/>:
          <>
          <Maincontainer/>
      <Secondarycomponent/>
      </>}
    </div>
  )
}

export default Browse