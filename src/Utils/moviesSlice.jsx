import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:[ { original_title: 'Movie Title', overview: 'Movie Overview' }]
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;