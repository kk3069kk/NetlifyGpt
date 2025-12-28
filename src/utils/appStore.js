import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviereducer from "./movieslice.js"
import gptreducer from "./gptslice.js"


 const appStore = configureStore({
    reducer:{
        user : userReducer,
        movies : moviereducer,
        gpt : gptreducer,
    },
 })

 export default appStore;
