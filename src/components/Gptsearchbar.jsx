import { useRef } from "react";
import client from "../utils/openai";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addgptmovies } from "../utils/gptslice";

const Gptsearchbar = () => {
  const text = useRef(null);
  const dispatch = useDispatch();

  const Tmdbsearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const json = await data.json();
    return json.results;
  };

  const handlegpttext = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie for the query :" +
      text.current.value +
      " in output only give name of movie seperated by comma no extra words other than movie only give 5 movie name";

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: "You are a coding assistant that talks like a pirate",
      input: gptQuery,
    });

    const gptmovies = completion.output_text.split(",");
    const promisemovie = gptmovies.map((movie) => Tmdbsearch(movie));
    const tmdbresults = await Promise.all(promisemovie);

    dispatch(
      addgptmovies({
        movienames: gptmovies,
        movieresults: tmdbresults,
      })
    );
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">

  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
    alt="background"
  />

  <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
      What do you want to watch?
    </h1>

    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-3xl flex flex-col sm:flex-row gap-3 
      bg-black/70 backdrop-blur-md p-4 rounded-xl shadow-2xl"
    >
      <input
        ref={text}
        type="text"
        placeholder="Search movies, genres, moods..."
        className="flex-1 px-5 py-3 md:px-6 md:py-4 
        bg-[#2a2a2a] text-white rounded-lg placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <button
        onClick={handlegpttext}
        className="bg-red-600 hover:bg-red-700 
        px-6 md:px-10 py-3 md:py-4 
        rounded-lg text-white font-bold transition"
      >
        Search
      </button>
    </form>
  </div>
</div>

  );
};

export default Gptsearchbar;
