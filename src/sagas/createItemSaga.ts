import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import {
    createItemFailureAction,
    createItemStartedAction,
    createItemSuccessAction,
} from '../actions/actions'
import { CreateItemAction } from '../actions/actionTypes'

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

function* createItemSaga(action: CreateItemAction) {
    yield put(createItemStartedAction())
    try {
        const result = yield call(axios.post, postUrl, action.payload)
        yield put(createItemSuccessAction(result.data))
    } catch (err) {
        yield put(createItemFailureAction(err.message))
    }
}

export default createItemSaga
