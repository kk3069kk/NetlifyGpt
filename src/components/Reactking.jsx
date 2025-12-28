import myPhoto from "../assets/myPhoto.jpeg";
import music from "../assets/music.mp3";

const Reactking = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white font-sans">
      
      {/* 🎬 Video Background */}
      <div className="absolute inset-0 -z-10">
        <iframe
          className="w-screen h-screen scale-125 object-cover"
          src="https://www.youtube.com/embed/0PfErHA3zzQ?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=0PfErHA3zzQ"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/90"></div>
      </div>

      {/* 🌟 Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl px-12 w-full">
          
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-wide leading-tight drop-shadow-xl">
            👑 <span className="text-red-600">The King</span> Is Here
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Building powerful React applications with modern tools,
            elegant UI, Just like Me  ("THE REACT KING")
          </p>

          {/* Profile + Button */}
          <div className="flex items-center gap-10">
            
            {/* Profile Card */}
            <div className="relative bg-black/50 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(255,0,0,0.25)]">
              <img
                src={myPhoto}
                alt="Myphoto"
                className="w-70 h-95 object-cover rounded-xl hover:scale-105 transition duration-300"
              />
            </div>

            {/* CTA */}
            <button className="gradient-gray-500 hover:bg-red-200 px-12 py-4 rounded-md font-semibold text-lg tracking-wide shadow-lg transition transform hover:scale-105">
              Chase Me If You Can
            </button>

          </div>
        </div>
      </div>

      {/* 🎵 Background Music */}
      <audio src={music} autoPlay loop />
    </div>
  );
};

export default Reactking;
