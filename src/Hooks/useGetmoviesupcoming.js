import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addnowupcomingmovies } from "../utils/movieslice";

const useGetmoviesupcoming = ()=>{
    const dispatch = useDispatch();

  const getmovies = async ()=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,
       options)
      const json = await data.json();
      console.log(json);
      dispatch(addnowupcomingmovies(json.results));
  }

    useEffect(()=>{
        getmovies();
      },[]);
}

export default useGetmoviesupcoming;