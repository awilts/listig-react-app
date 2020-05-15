import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { Item } from '../types/Item'
import {
    GET_ITEMS_FAILURE,
    GET_ITEMS_STARTED,
    GET_ITEMS_SUCCESS,
} from '../actions/actions'

export type GET_ITEMS_SUCCESS_TYPE = {
    type: 'GET_ITEMS_SUCCESS'
    payload: Item[]
}

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

function* getItemsSaga() {
    yield put(GET_ITEMS_STARTED())
    try {
        const result = yield call(axios.get, postUrl)
        yield put(GET_ITEMS_SUCCESS(result.data))
    } catch (err) {
        yield put(GET_ITEMS_FAILURE(err.message))
    }
}

export default getItemsSaga
