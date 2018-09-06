import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/ActionTypes.actions";
import { createPlayListSaga } from "./Playlist/Playlist.saga";

export function* playlist() {
  yield all([
    // takeEvery(actionTypes.SET_PLAYLIST, setPlayListSaga),
    // takeEvery(actionTypes.ADD_TO_PLAYLIST, ),
    // takeEvery(actionTypes.REMOVE_FROM_PLAYLIST, )
  ]);
}

export function* createPlayList() {
  yield takeEvery(actionTypes.CREATE_PLAYLIST, createPlayListSaga);
}

