import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addnowplayingtrailers } from "../utils/movieslice";

const useGetbackground = (movie_id)=>{
    const dispatch =useDispatch();

     const getbackground = async ()=>{
         const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
    
      const json = await data.json();
      console.log(json.results);

      const trailer = json.results.find((items)=>items.type=== "Trailer")
      const maintrailer = trailer?trailer:json.results[0];
      console.log(maintrailer);
      
      dispatch(addnowplayingtrailers(maintrailer));
}
useEffect(()=>{
    getbackground();
},[])
}

export default useGetbackground;