import { put } from "redux-saga/effects";

import axios from "../../../axiosPlayList";
import * as actions from "../../actions";

export function* getPlayListSaga(action) {
  try {
    const response = yield axios.get(
      "https://react-my-burger.firebaseio.com/ingredients.json"
    );
    yield put(actions.getPlayListSuccess(response.data));
  } catch (error) {
    yield put(actions.getPlayListFail());
  }
}
