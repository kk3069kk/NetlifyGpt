import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addnowpopularmovies } from "../utils/movieslice";

const useGetmoviespopular = ()=>{
    const dispatch = useDispatch();

  const getmovies = async ()=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' ,
       options)
      const json = await data.json();
      console.log(json);
      dispatch(addnowpopularmovies(json.results));
  }

    useEffect(()=>{
        getmovies();
      },[]);
}

export default useGetmoviespopular;