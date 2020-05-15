import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import {
    GET_ITEMS_FAILURE,
    GET_ITEMS_STARTED,
    GET_ITEMS_SUCCESS,
} from '../actions/actions'

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
