import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { Item } from '../types/Item'

export type GET_ITEMS_SUCCESS_TYPE = {
    type: 'GET_ITEMS_SUCCESS'
    payload: Item[]
}

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

export const GET_ITEMS_ACTION = { type: 'GET_ITEMS' }
export const GET_ITEMS_STARTED = { type: 'GET_ITEMS_STARTED' }

function* getItems() {
    yield put(GET_ITEMS_STARTED)
    try {
        const result = yield call(axios.get, postUrl)
        yield put(GET_ITEMS_SUCCESS(result.data))
    } catch (err) {
        yield put(GET_ITEMS_FAILURE(err.message))
    }
}

export const GET_ITEMS_SUCCESS = (items: Item[]): GET_ITEMS_SUCCESS_TYPE => ({
    type: 'GET_ITEMS_SUCCESS',
    payload: items,
})

const GET_ITEMS_FAILURE = (error: any) => ({
    type: 'GET_ITEMS_FAILURE',
    payload: error,
})

function* getItemsSaga() {
    yield takeEvery(GET_ITEMS_ACTION.type, getItems)
}

export default getItemsSaga
