import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import {
    CREATE_ITEM_FAILURE,
    CREATE_ITEM_STARTED,
    CREATE_ITEM_SUCCESS,
    ActionWithPayload,
} from '../actions/actions'

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

function* createItemSaga(action: ActionWithPayload) {
    yield put(CREATE_ITEM_STARTED())
    try {
        const result = yield call(axios.post, postUrl, action.payload)
        yield put(CREATE_ITEM_SUCCESS(result.data))
    } catch (err) {
        yield put(CREATE_ITEM_FAILURE(err.message))
    }
}

export default createItemSaga
