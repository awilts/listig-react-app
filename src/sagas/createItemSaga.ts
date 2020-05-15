import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
    CREATE_ITEM_FAILURE,
    CREATE_ITEM_STARTED,
    CREATE_ITEM_SUCCESS,
    ActionWithPayload,
} from '../actions/actions'

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

export function* createItem(action: ActionWithPayload) {
    yield put(CREATE_ITEM_STARTED())
    try {
        const result = yield call(axios.post, postUrl, action.payload)
        yield put(CREATE_ITEM_SUCCESS(result.data))
    } catch (err) {
        yield put(CREATE_ITEM_FAILURE(err.message))
    }
}

function* createItemSaga() {
    // @ts-ignore
    yield takeEvery('CREATE_ITEM', createItem)
}

export default createItemSaga
