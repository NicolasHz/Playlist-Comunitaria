import * as actionTypes from "./ActionTypes.actions";

export const setCurrentVideo = ( videoURL ) => {
    return {
        type: actionTypes.SET_CURRENT_VIDEO,
        currentVideoURL: videoURL
    };
};
