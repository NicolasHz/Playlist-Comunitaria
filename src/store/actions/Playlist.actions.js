import * as actionTypes from "./ActionTypes.actions";

export const createPlayList = ( payload ) => {
    return {
        type: actionTypes.CREATE_PLAYLIST,
        playListName: payload.playListName,
        author: payload.author
    };
};

export const createPlayListSuccess = ( playListName ) => {
    return {
        type: actionTypes.CREATE_PLAYLIST_SUCCESS,
        playListName: playListName
    };
};

export const createPlayListFail = () => {
    return {
        type: actionTypes.CREATE_PLAYLIST_FAIL,
    };
};

export const setPlayList = ( payload ) => {
    return {
        type: actionTypes.SET_PLAYLIST,
        payload: payload
    };
};

export const addToPlayList = ( videoURLToAdd ) => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST,
        videoURLAdd: videoURLToAdd
    };
};

export const addToPlayListSuccess = ( playListArray ) => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST_SUCCESS,
        payload: playListArray
    };
};

export const addToPlayListFail = () => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST_FAIL
    };
};

export const removeFromPlayList = ( videoURLToRemove ) => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST,
        videoURLRemove: videoURLToRemove
    };
};

export const removeFromPlayListSuccess = ( playListArray ) => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST_SUCCESS,
        playList: playListArray
    };
};

export const removeFromPlayListFail = () => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST_FAIL
    };
};
