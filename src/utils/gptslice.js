import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:"gpt",
    initialState:{
        gptstate:false,
        movieresults:null,
        movienames:null,
    },
    reducers:{
        addgptstate: (state) =>{
            state.gptstate = !state.gptstate;
        },
        addgptmovies:(state,action)=>{
            const {movienames,movieresults} = action.payload;
            state.movienames = movienames;
            state.movieresults = movieresults;
        }
    }
})

export const {addgptstate,addgptmovies} =gptslice.actions;

export default gptslice.reducer;