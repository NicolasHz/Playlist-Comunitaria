import * as actionTypes from "./ActionTypes.actions";

export const getPlayList = ( playListURLToAdd ) => {
    return {
        type: actionTypes.GET_PLAYLIST,
        playListURL: playListURLToAdd
    };
};

export const getPlayListSuccess = ( playListArray ) => {
    return {
        type: actionTypes.GET_PLAYLIST_SUCCESS,
        playList: playListArray
    };
};

export const getPlayListFail = () => {
    return {
        type: actionTypes.GET_PLAYLIST_FAIL
    };
};


export const addToPlayist = ( videoURLToAdd ) => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST,
        videoURLAdd: videoURLToAdd
    };
};

export const addToPlayistSuccess = ( playListArray ) => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST_SUCCESS,
        playList: playListArray
    };
};

export const addToPlayistFail = () => {
    return {
        type: actionTypes.ADD_TO_PLAYLIST_FAIL
    };
};

export const removeFromPlaylist = ( videoURLToRemove ) => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST,
        videoURLRemove: videoURLToRemove
    };
};

export const removeFromPlaylistSuccess = ( playListArray ) => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST_SUCCESS,
        playList: playListArray
    };
};

export const removeFromPlaylistFail = () => {
    return {
        type: actionTypes.REMOVE_FROM_PLAYLIST_FAIL
    };
};
