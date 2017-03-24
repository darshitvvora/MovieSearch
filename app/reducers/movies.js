import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedMovies = createReducer({},{
    [types.SET_SEARCHED_MOVIES](state,action){
        let newState = {};
        action.movies.forEach((movie) => {
            newState[movie.show_id] = movie
        })
        return newState;
    }
});
export const movieCount = createReducer(0,{
    [types.ADD_MOVIE](state,action){
        return state +1;
    },

    [types.SET_SEARCHED_MOVIES](state,action){
        return action.movies.length;
    }

});