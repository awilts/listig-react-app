import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import {
    getItemsFailureAction,
    getItemsStartedAction,
    getItemsSuccessAction,
} from '../actions/actions'

const myUrl = window.location.href
const postUrl = `${myUrl}backend/items`

function* getItemsSaga() {
    yield put(getItemsStartedAction())
    try {
        const result = yield call(axios.get, postUrl)
        yield put(getItemsSuccessAction(result.data))
    } catch (err) {
        yield put(getItemsFailureAction(err.message))
    }
}

export default getItemsSaga
