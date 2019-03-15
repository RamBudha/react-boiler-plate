import { fork, all } from 'redux-saga/effects';
import { watchFetchDataFromSoundCloud } from './browse';

export default function* rootSaga() {
    yield all([
        fork(watchFetchDataFromSoundCloud)
    ]);
}
