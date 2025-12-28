import Moviecards from './moviecards'

const Movietitle = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
        {title}
      </h1>

      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <Moviecards
            key={movie.id}
            posterpath={movie?.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Movietitle;
