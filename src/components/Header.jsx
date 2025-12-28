import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase.js"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";
import { addgptstate } from "../utils/gptslice.js";

const Header = () => {

  const user = useSelector(store => store.user);
  const status = useSelector(store => store.gpt?.gptstate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesignout = ()=>{
    signOut(auth).then(() => {
      
}).catch((error) => {
      navigate("/error");
});
  }
    useEffect(()=>{
   
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email ,displayName: displayName,photoURL:photoURL}));
    navigate("/browse");
  } else {
    dispatch(removeUser());
    navigate("/");
  }

});

return ()=> unsubscribe();

  },[])
  
  const handlegptbar = ()=>{
      dispatch(addgptstate());
  }
  return (
    <div className="absolute top-0 left-0 z-20 w-full px-4 md:px-8 py-3 md:py-4 
bg-linear-to-b from-black flex items-center justify-between">

  <img
    className="w-28 md:w-44 object-contain"
    src={LOGO}
    alt="logo"
  />

  {user && (
    <div className="flex items-center gap-2 md:gap-4">

      <button
        className="text-xs md:text-sm text-white font-semibold px-3 md:px-4 py-2 
        rounded-full bg-white/10 hover:bg-white/20 
        backdrop-blur-md border border-white/20 transition hover:scale-105"
        onClick={handlegptbar}
      >
        {status ? "Home" : "Search"}
      </button>

      <img
        className="w-8 h-8 md:w-10 md:h-10 rounded"
        src={user?.photoURL}
        alt="user icon"
      />

      <Link to="/reactking" className="hidden sm:block">
        <h1 className="text-white font-bold hover:underline text-sm md:text-base">
          React King
        </h1>
      </Link>

      <button
        onClick={handlesignout}
        className="text-white text-xs md:text-sm font-bold hover:underline"
      >
        Sign Out
      </button>
    </div>
  )}
</div>

  );
};

export default Header;
