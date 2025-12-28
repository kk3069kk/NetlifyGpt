import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/Validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";




const Login = () => {
  const [islogin , setislogin] = useState(true);
  const [errormessage , seterrormessage] = useState(null);
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  
  const dispatch = useDispatch();

  const checkData = ()=>{

      const message = ValidateData(email.current.value,password.current.value);
      seterrormessage(message);
      if(message)return;
      
      if(!islogin){
         
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://tse3.mm.bing.net/th/id/OIP.jivkXB82TGU_5A3g1L5n8AHaNK?pid=Api&P=0&h=220"
        }).then(() => {
           const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email ,displayName: displayName,photoURL:photoURL}));
          
        }).catch((error) => {
          seterrormessage(error.message);

        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorMessage)
        // ..
      });
      }
      else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage( errorMessage)
        });
      }
      
  }

  const togglefunction = () =>{
    setislogin(!islogin);
  }
  return (
    <div>
      <Header/>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
      alt="background"
      />
      <form
  onSubmit={(e) => e.preventDefault()}
  className="absolute top-1/2 left-1/2 
  w-[90%] sm:w-105 
  -translate-x-1/2 -translate-y-1/2 
  bg-black/75 p-8 sm:p-12 
  text-white rounded-md"
>
  
  <h1 className="text-3xl font-bold mb-6">
    {islogin ? "SIGN IN" : "SIGN UP"}
  </h1>

  {!islogin && <input
    ref={name}
    type="text"
    placeholder="NAME"
    className="w-full mb-4 px-4 py-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
  />}

   <input
    ref={email}
    type="text"
    placeholder="Email"
    className="w-full mb-4 px-4 py-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
  />

  <input
  ref={password}
    type="password"
    placeholder="Password"
    className="w-full mb-6 px-4 py-3 bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
  />
 <p className="text-red-600 font-bold py-1">{errormessage}</p>
  <button onClick=
  {checkData}
  className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
    {islogin ? "SIGN IN" : "SIGN UP"}
  </button>

  <p className="py-4 cursor-pointer" onClick={togglefunction} >
    {islogin ? "NEW TO NETFLIX ? Sign Up" : "Already a user ? sign in"}
    </p>

</form>

    </div>
  )
}

export default Login; 