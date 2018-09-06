import * as actionTypes from '../actions/ActionTypes.actions';
import {
    updateObject
} from '../../shared/utility';

const initialState = {
    error: null,
    playList: [
        {
            videoURL: 'https://www.youtube.com/watch?v=fkYIAdJvP5Q',
            title: 'Oliver Heldens - Mainstage Tomorrowland 2017 (Full Set)',
            author: {
                name: 'Nicolas',
                id: 123543
            }
        }
    ],
    playlistAuthor: {
        name: 'Nicolas',
        id: 123543
    },
}

const setPlayList = (state, action) => {
    const updatedPlayList = {
        error: null,
        playList: action.payload.playList,
        playlistAuthor: action.payload.playListAuthor,
     }
     return updateObject( state, updatedPlayList );
}

const createPlayListSuccess = (state, action) => {

    console.log(state, action)
    return state;
    // const updatedPlayList = {
    //     error: null,
    //     playList: action.payload.playList,
    //     playlistAuthor: action.payload.playListAuthor,
    //  }
    //  return updateObject( state, updatedPlayList );
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PLAYLIST_SUCCESS:
            return createPlayListSuccess( state, action );
        case actionTypes.SET_PLAYLIST:
            return setPlayList( state, action );
        case actionTypes.ADD_TO_PLAYLIST_SUCCESS:
            return state;
        case actionTypes.ADD_TO_PLAYLIST_FAIL:
            return state;
        case actionTypes.REMOVE_FROM_PLAYLIST_SUCCESS:
            return state;
        case actionTypes.REMOVE_FROM_PLAYLIST_FAIL:
            return state;
        default:
            return state;
    }
};

export default reducer;