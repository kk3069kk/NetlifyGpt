const Viedotitle = ({ title, overview }) => {
    
  return (
    <div className="relative pt-[20%] px-12 text-white max-w-2xl">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        {title}
      </h1>

      <p className="text-lg mb-6 line-clamp-3 text-gray-200">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
          ▶ Play
        </button>

        <button className="bg-gray-600/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Viedotitle;
