import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addnowplayingmovies } from "../utils/movieslice";

const useGetmovies = ()=>{
    const dispatch = useDispatch();

  const getmovies = async ()=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' ,
       options)
      const json = await data.json();
      console.log(json);
      dispatch(addnowplayingmovies(json.results));
  }

    useEffect(()=>{
        getmovies();
      },[]);
}

export default useGetmovies;