import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/ActionTypes.actions";

import { setPlayListSaga } from "./Playlist/Playlist.saga";

export function* playlist() {
  yield all([
    // takeEvery(actionTypes.SET_PLAYLIST, setPlayListSaga),
    // takeEvery(actionTypes.ADD_TO_PLAYLIST, ),
    // takeEvery(actionTypes.REMOVE_FROM_PLAYLIST, )
  ]);
}

export const SET_PLAYLIST = '[PLAYLIST] Set Playlist';

export const ADD_TO_PLAYLIST = '[PLAYLIST] Add To Playlist';
export const ADD_TO_PLAYLIST_SUCCESS = '[PLAYLIST] Add To Playlist Success';
export const ADD_TO_PLAYLIST_FAIL = '[PLAYLIST] Add From Playlist Fail';

export const REMOVE_FROM_PLAYLIST = '[PLAYLIST] Remove From Playlist';
export const REMOVE_FROM_PLAYLIST_SUCCESS = '[PLAYLIST] Remove From Playlist Success';
export const REMOVE_FROM_PLAYLIST_FAIL = '[PLAYLIST] Remove From Playlist Fail';