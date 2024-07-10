import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:[ { original_title: 'Movie Title', overview: 'Movie Overview' }],
        popularMovies: [] 
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
      }
    }
});

export const {addNowPlayingMovies , addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;