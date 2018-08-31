import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";
import { playlist } from "./store/sagas";
import PlayListReducer from "./store/reducers/PlayList.reducer";
import videoReducer from "./store/reducers/Video.reducer";

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const rootReducer = combineReducers({
    playList: PlayListReducer,
    video: videoReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(playlist);

const app = (
    <Provider store={store}>
        <App />
    </Provider>);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
