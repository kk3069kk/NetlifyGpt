import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addnowtopratedmovies } from "../utils/movieslice";

const useGetmoviestoprated = ()=>{
    const dispatch = useDispatch();

  const getmovies = async ()=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' ,
       options)
      const json = await data.json();
      console.log(json);
      dispatch(addnowtopratedmovies(json.results));
  }

    useEffect(()=>{
        getmovies();
      },[]);
}

export default useGetmoviestoprated;