
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer'

const loggerMiddlware = createLogger({predicate: (getState,action) => __DEV__});

function configureStore(initialState){
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddlware,
        )
    );
    return createStore(reducer,initialState,enhancer);
}

const store = configureStore({});

import {
    AppRegistry,
} from 'react-native';


const App = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('qiapp', () => App);
