/**
 * Created by darshitvora on 16/03/17.
 */
import { combineReducers } from 'redux';
import * as movieReducer from './movies'

export default combineReducers(Object.assign({},movieReducer))
