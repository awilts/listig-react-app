import { all } from 'redux-saga/effects'
import getItemsSaga from './getItemsSaga'
import createItemSaga from './createItemSaga'

export default function* rootSaga() {
    yield all([getItemsSaga(), createItemSaga()])
}
