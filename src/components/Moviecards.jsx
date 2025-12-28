import { Img_url } from '../utils/constants'

const Moviecards = ({ posterpath }) => {
  if (!posterpath) return null;

  return (
    <div className="min-w-40 md:min-w-45 lg:min-w-50  transform hover:scale-110 transition duration-300 ease-out">
      <img
        className="rounded-lg shadow-lg cursor-pointer"
        src={Img_url + posterpath}
        alt="Movie card"
      />
    </div>
  );
};

export default Moviecards;
