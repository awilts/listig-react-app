import { takeEvery } from 'redux-saga/effects'
import getItemsSaga from './getItemsSaga'
import createItemSaga from './createItemSaga'
import { CREATE_ITEM, GET_ITEMS } from '../actions/actions'

export default function* rootSaga() {
    yield takeEvery(GET_ITEMS, getItemsSaga)
    yield takeEvery(CREATE_ITEM, createItemSaga)
}
