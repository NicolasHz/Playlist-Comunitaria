import * as actionTypes from '../actions/ActionTypes.actions';
import { updateObject } from '../../shared/utility';

const initialState = {
    currentVideoURL: null
}

const setCurrentVideo = (state, action) => {
    const updatedVideoProps = { 
        currentVideoURL: action.currentVideoURL,
     }
     return updateObject( state, updatedVideoProps );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_VIDEO: return setCurrentVideo( state, action );
        default: return state;
    }
};

export default reducer;
