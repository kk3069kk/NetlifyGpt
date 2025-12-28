import { useSelector } from "react-redux";
import useGetbackground from "../Hooks/useGetbackground.js";

const ViedoBackground = ({ movie_id }) => {
  const key = useSelector(
    (store) => store.movies?.nowplayingtrailers?.key
  );

  useGetbackground(movie_id);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="w-screen h-screen scale-125 object-cover"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent"></div>
    </div>
  );
};

export default ViedoBackground;
