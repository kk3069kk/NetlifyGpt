import { createSlice } from "@reduxjs/toolkit";

const movieslice  = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        nowplayingtrailers:null,
        nowpopularmovies:null,
        nowtopratedmovies:null,
        nowupcomingmovies:null,
    },
    reducers:{
        addnowplayingmovies : (state,action) =>{
            state.nowplayingmovies =  action.payload;
        },
        addnowplayingtrailers : (state,action) =>{
            state.nowplayingtrailers =action.payload;
        },
        addnowpopularmovies : (state,action) =>{
            state.nowpopularmovies =action.payload;
        },
        addnowtopratedmovies : (state,action) =>{
            state.nowtopratedmovies =action.payload;
        },
        addnowupcomingmovies : (state,action) =>{
            state.nowupcomingmovies =action.payload;
        }
    }

})
export const {addnowplayingmovies,
    addnowplayingtrailers,
    addnowpopularmovies,
    addnowtopratedmovies,
    addnowupcomingmovies} = movieslice.actions; 

 export default movieslice.reducer;