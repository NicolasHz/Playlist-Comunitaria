import * as actionTypes from '../actions/ActionTypes.actions';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    playlist: [],
    playlistAuthor: {
        name: '',
        id: ''
    },
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PLAYLIST_SUCCESS: return state;    
        case actionTypes.GET_PLAYLIST_FAIL: return state;
        case actionTypes.ADD_TO_PLAYLIST_SUCCESS: return state;
        case actionTypes.ADD_TO_PLAYLIST_FAIL: return state;
        case actionTypes.REMOVE_FROM_PLAYLIST_SUCCESS: return state;
        case actionTypes.REMOVE_FROM_PLAYLIST_FAIL: return state;
        default: return state;
    }
};

export default reducer;
