import {put} from "redux-saga/effects";
import * as actions from "../../actions";
import FireApp from '../../../firebase-config/config';

// export function* setPlayListSaga(action) {
//   try {
//     const response = yield axios.get(
//       "https://react-my-burger.firebaseio.com/ingredients.json"
//     );
//     yield put(actions.getPlayListSuccess(response.data));
//   } catch (error) {
//     yield put(actions.getPlayListFail());
//   }
// }

export function* createPlayListSaga(action) {
    try {
        let success = false;
        yield FireApp.database().ref(action.playListName).set({
            playListAuthor: action.author
        }, (error) => {
            if (!error) {
                success = true
            }
        });
        if (success) {
            yield put(actions.createPlayListSuccess(action.playListName));
        }
    } catch (error) {
        yield put(actions.createPlayListFail());
    }

}