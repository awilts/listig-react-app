import { takeEvery } from 'redux-saga/effects'
import getItemsSaga from './getItemsSaga'
import createItemSaga from './createItemSaga'

export default function* rootSaga() {
    yield takeEvery('GET_ITEMS', getItemsSaga)
    yield takeEvery('CREATE_ITEM', createItemSaga)
}
