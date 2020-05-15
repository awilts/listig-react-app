import { takeEvery } from 'redux-saga/effects'
import getItemsSaga from './getItemsSaga'
import createItemSaga from './createItemSaga'
import { CREATE_ITEM, GET_ITEMS, SUBSCRIBE_TO_ITEMS } from '../actions/actions'
import { subscribeToItems } from './subcribeToItems'

export default function* rootSaga() {
    yield takeEvery(GET_ITEMS, getItemsSaga)
    yield takeEvery(CREATE_ITEM, createItemSaga)
    yield takeEvery(SUBSCRIBE_TO_ITEMS, subscribeToItems)
}
