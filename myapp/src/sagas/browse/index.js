import { put, call, takeEvery } from 'redux-saga/effects';
import { unauthApiUrl } from '../../services/api';

function* fetchDataFromSoundCloud(action) {
    try {
        const payload = yield call(unauthApiUrl, action.payload);
        yield put({ type: SAVE_FEEDBACK_SUCCESS, payload });
    } catch (err) {
        const errResp = err.response.body;
        yield put({ type: SAVE_FEEDBACK__FAILURE, errResp });
    }
}

export function* watchFetchDataFromSoundCloud() {
    yield takeEvery(GET_GENRE_DATA_FROM_CLOUD, fetchDataFromSoundCloud);
}
