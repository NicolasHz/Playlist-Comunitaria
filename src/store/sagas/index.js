import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/ActionTypes.actions";

import { getPlayListSaga } from "./Playlist/Playlist.saga";

export function* playlist() {
  yield all([
    takeEvery(actionTypes.GET_PLAYLIST, getPlayListSaga),
    // takeEvery(actionTypes.ADD_TO_PLAYLIST, ),
    // takeEvery(actionTypes.REMOVE_FROM_PLAYLIST, )
  ]);
}



export const GET_PLAYLIST = '[PLAYLIST] Get Playlist';
export const GET_PLAYLIST_SUCCESS = '[PLAYLIST] Get Playlist Success';
export const GET_PLAYLIST_FAIL = '[PLAYLIST] Get Playlist Fail';

export const ADD_TO_PLAYLIST = '[PLAYLIST] Add To Playlist';
export const ADD_TO_PLAYLIST_SUCCESS = '[PLAYLIST] Add To Playlist Success';
export const ADD_TO_PLAYLIST_FAIL = '[PLAYLIST] Add From Playlist Fail';

export const REMOVE_FROM_PLAYLIST = '[PLAYLIST] Remove From Playlist';
export const REMOVE_FROM_PLAYLIST_SUCCESS = '[PLAYLIST] Remove From Playlist Success';
export const REMOVE_FROM_PLAYLIST_FAIL = '[PLAYLIST] Remove From Playlist Fail';