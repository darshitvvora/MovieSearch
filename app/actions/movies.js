/**
 * Created by darshitvora on 16/03/17.
 */
import * as types from './types'
import Api from '../lib/api'

export function  fetchMovies(searchObj) {
    return (dispatch, getState) => {
        const params = [
            `actor=${encodeURIComponent(searchObj.actor)}`,
            `year=${searchObj.year}`,
        ].join('&')
        return Api.get(`?${params}`).then(resp => {
            dispatch(setSearchedMovies({movies: resp}));
            console.log(resp)
        }).catch((ex) => {
            console.log(ex);
        })
    }
}
export function  setSearchedMovies({ movies }) {
    return {
        type: types.SET_SEARCHED_MOVIES,
        movies
    }

}
export function addMovie() {
    return {
        type: types.ADD_MOVIE
    }
}
