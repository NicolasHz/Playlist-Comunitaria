import * as actionTypes from '../actions/ActionTypes.actions';
import { updateObject } from '../../shared/utility';

const initialState = {
    currentVideoURL: 'https://www.youtube.com/watch?v=2X6bc-7DsVU'
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CURRENT_VIDEO: return state;
        default: return state;
    }
};

export default reducer;
