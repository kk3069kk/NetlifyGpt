import { useSelector } from "react-redux";
import Movietitle from "./Movietitle";

const Gptsuggestion = () => {
  const { movienames, movieresults } = useSelector((store) => store.gpt);

  // 🔹 EMPTY STATE (before search)
  if (!movienames) {
    return (
      <div className="bg-black px-6 md:px-12 py-20 text-center text-gray-300">
        <h2 className="text-3xl font-bold mb-4">
          Discover movies with AI 🎬
        </h2>
        <p className="max-w-xl mx-auto text-gray-400">
          Search by mood, genre, actor, or anything you like.  
          We’ll recommend movies just for you.
        </p>

        {/* Skeleton posters */}
        <div className="mt-12 flex gap-4 justify-center overflow-hidden">
          {Array(6).fill("").map((_, i) => (
            <div
              key={i}
              className="w-36 h-52 bg-gray-800 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  // 🔹 RESULTS STATE
  return (
    <div className="bg-black px-6 md:px-12 py-10 space-y-14">
      {movienames.map((moviename, index) => (
        <Movietitle
          key={moviename}
          title={moviename}
          movies={movieresults[index]}
        />
      ))}
    </div>
  );
};

export default Gptsuggestion;
